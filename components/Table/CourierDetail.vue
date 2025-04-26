<template>
	<v-form v-model="isValid" ref="form">
		<label class="mb-2 text-h6 design--text">Enter the Package Dimensions</label>
		<v-row>
			<v-col cols="4">
				<label class="required">Dead Weight (kg)</label>
				<v-text-field
					outlined
					type="number"
					hide-spin-buttons
					v-model="payload.weight"
					placeholder="Enter Dead Weight"
					:rules="[rules.required, rules.notzero]"
				/>
			</v-col>

			<v-col>
				<label class="required">Length (cm)</label>
				<v-text-field
					outlined
					type="number"
					hide-spin-buttons
					v-model="payload.length"
					placeholder="Enter Length"
					:rules="[rules.required, rules.notzero]"
				/>
			</v-col>

			<v-col>
				<label class="required">Width (cm)</label>
				<v-text-field
					outlined
					type="number"
					hide-spin-buttons
					v-model="payload.breadth"
					placeholder="Enter Width"
					:rules="[rules.required, rules.notzero]"
				/>
			</v-col>

			<v-col>
				<label class="required">Height (cm)</label>
				<v-text-field
					outlined
					type="number"
					hide-spin-buttons
					v-model="payload.height"
					placeholder="Enter Height"
					:rules="[rules.required, rules.notzero]"
				/>
			</v-col>
		</v-row>

		<div class="text-center mt-2">
			<v-btn
				dark
				large
				color="design"
				@click="GetCourier"
				class="text-capitalize"
				:loading="isCourierLoading"
			>
				<v-icon class="mr-2">mdi-truck-fast</v-icon>
				Get Courier Details
			</v-btn>
		</div>

		<div v-if="shipping_partners.length">
			<label class="mb-2 text-h6 design--text required">Choose Delivery Partner</label>
			<v-radio-group v-model="selectedPartner" :rules="[rules.required]">
				<v-row>
					<v-col cols="3" :key="index" v-for="(partner, index) in shipping_partners">
						<v-radio :value="partner.courier_company_id" class="rounded-lg pa-2 border-line">
							<template v-slot:label>
								<div class="d-flex flex-column">
									<div>
										{{ partner.courier_name }}
									</div>
									<div class="d-flex align-center">
										Rating: <v-icon small class="mx-1" color="orange">mdi-star</v-icon>
										{{ partner.rating }}
									</div>
									<div class="blue--text">[ETD: {{ partner.etd }}]</div>
									<div>COD Charges: ₹ {{ partner.cod_charges }}</div>
									<div>Freight Charges: ₹ {{ partner.freight_charge }}</div>
									<div>Total charges: ₹ {{ partner.rate }}</div>
								</div>
							</template>
						</v-radio>
					</v-col>
				</v-row>
			</v-radio-group>

			<div class="text-center mt-2">
				<v-btn large color="design" dark class="text-capitalize" @click="SetCourierPartner">
					<v-icon class="mr-2">mdi-truck</v-icon>
					Request Shipment Pickup
				</v-btn>
			</div>
		</div>
	</v-form>
</template>

<script>
import OrderAPI from '@/utils/api/order'

export default {
	data: () => ({
		isValid: false,
		selectedPartner: '',
		isCourierLoading: false,
		payload: {
			length: 0,
			height: 0,
			weight: 0,
			breadth: 0,
			child_order_id: '',
		},
		shipping_partners: [],
		rules: {
			required: (value) => !!value || 'This field is required',
			notzero: (value) => value > 0 || 'This field cannot be zero',
			notnull: (value) => (value !== null && value !== '') || 'This field is required',
		},
	}),
	props: { order_id: { type: String, required: true } },
	methods: {
		async GetCourier() {
			this.$refs.form.validate()
			if (this.isValid) {
				try {
					this.isCourierLoading = true
					this.payload.child_order_id = this.order_id
					const response = await OrderAPI.getCheckCourierServiceAbility(this.payload)
					this.isCourierLoading = false
					this.shipping_partners = response.data.payload
				} catch (err) {
					console.log(err)
				}
			}
		},
		async SetCourierPartner() {
			try {
				const response = await OrderAPI.requestForShipmentPickup({
					...this.payload,
					courier_id: this.selectedPartner,
				})
				if (response.data.status.status_code == 1) {
					this.$store.dispatch('ActivateSnackBar', {
						state: true,
						color: 'red darken-4',
						msg: response.data.status.message,
					})
				} else {
					this.$store.dispatch('ActivateSnackBar', {
						state: true,
						color: 'green darken-4',
						msg: 'Shipment requested successfully',
					})
					this.$emit('remove')
				}
			} catch (err) {
				console.log(err)
				this.$store.dispatch('ActivateSnackBar', {
					state: true,
					color: 'red darken-4',
					msg: 'Encountered some error',
				})
			}
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.border-line {
	border: 0.75px solid #333;
}
</style>
