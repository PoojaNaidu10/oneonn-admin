<template>
	<v-card class="pa-4">
		<v-row>
			<v-col class="text-center">
				<span class="text-h5">{{ edit ? 'Edit' : 'Add' }} User Roles</span>
			</v-col>
			<v-col cols="2" class="text-right">
				<v-btn icon @click="CloseForm">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-col>
		</v-row>

		<v-card-text>
			<v-form v-model="isValid" ref="form">
				<v-row>
					<v-col cols="6">
						<label>User Name <sup class="red--text">*</sup></label>
						<v-text-field
							outlined
							v-model="payload.name"
							:rules="[rules.required]"
							placeholder="Enter User Name"
						/>
					</v-col>

					<v-col cols="6">
						<label>Mobile No <sup class="red--text">*</sup></label>
						<v-text-field
							outlined
							type="number"
							hide-spin-buttons
							v-model="payload.mobile"
							placeholder="Enter Mobile No"
							:rules="[rules.validateMobile]"
						/>
					</v-col>

					<v-col cols="12">
						<label>Email <sup class="red--text">*</sup></label>
						<v-text-field
							outlined
							type="email"
							:rules="[rules.email]"
							v-model="payload.email"
							placeholder="Enter Email"
						/>
					</v-col>

					<v-col cols="12">
						<label>User Roles<sup class="red--text">*</sup></label>
						<div class="d-flex">
							<v-checkbox
								class="mr-2"
								label="Operation"
								value="OPERATION"
								:rules="[rules.requiredOneSelected]"
								v-model="payload.privilage_list"
							/>
							<v-checkbox
								class="mr-2"
								hide-details
								label="Brand"
								:rules="[rules.requiredOneSelected]"
								value="BRAND"
								v-model="payload.privilage_list"
							/>

							<v-checkbox
								class="mr-2"
								hide-details
								label="Doctor"
								value="DOCTOR"
								:rules="[rules.requiredOneSelected]"
								v-model="payload.privilage_list"
							/>
							<v-checkbox
								class="mr-2"
								hide-details
								label="Marketing"
								:rules="[rules.requiredOneSelected]"
								value="MARKETING"
								v-model="payload.privilage_list"
							/>
							<v-checkbox
								class="mr-2"
								hide-details
								:rules="[rules.requiredOneSelected]"
								label="Uploader"
								value="UPLOADER"
								v-model="payload.privilage_list"
							/>
						</div>
					</v-col>
				</v-row>
				<small>*indicates required field</small>
			</v-form>
		</v-card-text>

		<v-card-actions>
			<div class="mx-auto mt-3">
				<v-btn class="mr-2 white--text" color="grey" @click="CloseForm"> Cancel </v-btn>
				<v-btn class="mr-2 white--text" color="design" @click="AddEditData">
					{{ edit ? 'Update' : 'Submit' }}
				</v-btn>
			</div>
		</v-card-actions>
	</v-card>
</template>

<script>
import ShopUser from '@/utils/api/ShopUser'

export default {
	data: () => ({
		isValid: false,
		payload: {
			name: '',
			role: '',
			email: '',
			mobile: '',
			user_type: 'SHOP',
			privilage_list: [],
		},
		rules: {
			required: (value) => !!value || 'This field is required',
			email: (value) =>
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) || 'Please enter correct email',
			validateMobile: (value) => {
				const mobile = (value || '').replace(/\D/g, '')
				return mobile.length === 10 ? true : 'Mobile number must have 10 digits'
			},
			requiredOneSelected: (value) => (value && value.length > 0) || 'Select at least one user role',
		},
	}),
	watch: {
		edit: {
			handler(newVal, oldVal) {
				if (newVal) {
					this.payload = { ...this.payload, ...this.content }
					this.payload.subadmin_id = this.content._id
					// Removing unnecessary keys
					delete this.payload.__v
					delete this.payload._id
					delete this.payload.createdAt
					delete this.payload.updatedAt
				} else {
					this.ResetForm()
				}
			},
			immediate: true,
		},
	},
	props: {
		content: { type: Object },
		edit: { type: Boolean, default: false },
	},
	methods: {
		async AddEditData() {
			this.$refs.form.validate()
			if (this.isValid) {
				try {
					if (this.edit) {
						await ShopUser.updateShopUserSubAdmin(this.payload)
						this.$emit('close_edit')
					} else {
						await ShopUser.addShopUserSubAdmin(this.payload)
					}
					this.ResetForm()
					this.$emit('change')
					this.$emit('close')
				} catch (err) {
					console.log(err)
				}
			}
		},
		ResetForm() {
			this.payload = {
				name: '',
				role: '',
				email: '',
				mobile: '',
				user_type: 'SHOP',
				privilage_list: [],
			}
			this.$refs?.form?.resetValidation()
		},
		CloseForm() {
			if (this.edit) {
				this.ResetForm()
				this.$emit('close_edit')
			}
			this.$emit('close')
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped></style>
