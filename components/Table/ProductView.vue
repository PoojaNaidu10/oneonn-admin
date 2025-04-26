<template>
	<v-card outlined class="mb-4">
		<v-list-item class="py-2">
			<v-list-item-avatar tile size="100" color="white">
				<v-img :src="order.product.image_list[0]" />
			</v-list-item-avatar>

			<v-list-item-content>
				<!-- Product Title -->
				<v-list-item-title class="text-h6 mb-1">
					{{ order.product.title }}
				</v-list-item-title>
				<v-row>
					<v-col cols="9">
						<!-- HSN and SKU -->
						<v-list-item-subtitle>
							<span class="mr-2" v-if="order.product.sku"> SKU: {{ order.product.sku }} </span>
							<span class="mr-2" v-if="order.product.hsn_code">
								HSN: {{ order.product.hsn_code }}
							</span>
						</v-list-item-subtitle>

						<!-- Price & Quantity -->
						<v-list-item-subtitle class="text-subtitle-1 my-1">
							<div class="d-flex flex-column">
								<div>Quantity: {{ order.quantity }}</div>
								<div>
									Selling Price: ₹
									{{ order.product.seller_list[0].selling_price.toLocaleString('en-IN') }}
								</div>
								<div v-if="isPatient">
									<div v-if="sellerError">
										Can't calculate GST due to less information of seller
									</div>
									<div v-else>
										<div v-if="MatchState == true">
											<span class="mr-2">
												SGST: ₹
												{{
													SetRound(
														(CalculateGST(order.price, order.product.gst) *
															order.quantity) /
															2,
													)
												}}
											</span>
											<span class="mr-2">
												CGST: ₹
												{{
													SetRound(
														(CalculateGST(order.price, order.product.gst) *
															order.quantity) /
															2,
													)
												}}
											</span>
										</div>
										<div v-if="MatchState == false">
											<span class="mr-2">
												IGST: ₹
												{{
													SetRound(
														(CalculateGST(order.price, order.product.gst) *
															order.quantity) /
															1,
													)
												}}
											</span>
										</div>
									</div>
								</div>
								<div v-else>
									<div>
										<span class="mr-2">
											SGST: ₹
											{{
												SetRound(
													(CalculateGST(order.price, order.product.gst) *
														order.quantity) /
														2,
												)
											}}
										</span>
										<span class="mr-2">
											CGST: ₹
											{{
												SetRound(
													(CalculateGST(order.price, order.product.gst) *
														order.quantity) /
														2,
												)
											}}
										</span>
									</div>
								</div>

								<div class="font-weight-bold" v-if="isDoctor">
									<span v-if="order?.brand_offer_discount_price">
										<del class="grey--text darken-1">
											₹ {{ order?.total_price?.toLocaleString('en-IN') }}
										</del>
										₹
										{{ order?.brand_offer_discount_price?.toLocaleString('en-IN') }}
									</span>
									<span v-else>₹ {{ order?.total_price?.toLocaleString('en-IN') }}</span>
								</div>
								<div class="font-weight-bold" v-else>
									Total: ₹ {{ order.total_price.toLocaleString('en-IN') }}
								</div>
							</div>
						</v-list-item-subtitle>
					</v-col>

					<v-col cols="3" v-if="!checkout">
						<v-list-item-title class="text-subtitle-1 mb-1"> Dispatch Details </v-list-item-title>
						<v-list-item-subtitle>
							<div class="d-flex flex-column">
								<div>
									Length:
									{{ order.product?.shipping_details?.length || 0 }} cm
								</div>
								<div>
									Height:
									{{ order.product?.shipping_details?.height || 0 }} cm
								</div>
								<div>
									Width:
									{{ order.product?.shipping_details?.width || 0 }} cm
								</div>
								<div>
									Weight:
									{{ order.product?.shipping_details?.weight || 0 }} gm
								</div>
							</div>
						</v-list-item-subtitle>
					</v-col>
				</v-row>
			</v-list-item-content>
		</v-list-item>
	</v-card>
</template>

<script>
import { round } from 'lodash'
import SellerAPI from '@/utils/api/SellerFormAPI'

export default {
	data: () => ({
		MatchState: false,
		sellerError: false,
	}),
	props: {
		order: { type: Object, required: true },
		buyerState: { type: String, required: true },
		isPatient: { type: Boolean, default: false },
		checkout: { type: Boolean, required: false },
		isDoctor: { type: Boolean, required: false },
	},
	methods: {
		CalculateGST(selling_price, gst) {
			const gst_amount = selling_price / (1 + gst / 100)
			return selling_price - gst_amount
		},
		SetRound(value) {
			return round(value, 2)
		},
		async GetSellerDetail() {
			try {
				this.isLoading = true
				const response = await SellerAPI.getSellerById({
					seller_id: this.order.product.seller_list[0].seller._id,
				})
				if (response.data.payload.state == undefined || '') {
					this.sellerError = true
				} else {
					if (response.data.payload.state == this.buyerState) {
						this.MatchState = true
					} else {
						this.MatchState = false
					}
				}
				this.isLoading = false
			} catch (err) {
				console.log(err)
			}
		},
		StateMatch() {},
	},
	mounted() {
		this.$nextTick(() => {
			this.GetSellerDetail()
			this.StateMatch()
		})
	},
}
</script>

<style scoped></style>
