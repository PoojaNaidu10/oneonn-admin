<template>
	<div>
		<v-card elevation="0">
			<v-tabs
				dark
				hide-slider
				show-arrows
				center-active
				class="rounded-lg"
				background-color="blue lighten-1"
				:key="Date.now() + Math.floor(Math.random() * 10000 + 1)"
			>
				<v-tab
					:key="index"
					v-for="(item, index) in table_items"
					active-class="white--text rounded-lg design"
				>
					{{ item.order_id }}
				</v-tab>

				<v-tab-item v-for="(item, index) in table_items" :key="index" class="rounded-lg">
					<v-container fluid class="rounded-lg my-2">
						<div
							v-if="item.status == 'ORDER_CANCELLED'"
							class="mb-2 text-h5 font-weight-bold red--text"
						>
							This order has been cancelled
						</div>

						<div
							v-else-if="item.status != 'ORDER_PLACED'"
							class="mb-2 text-h5 font-weight-bold blue--text"
						>
							This order has been already processed
						</div>

						<div class="mb-2" v-else>
							<TableCourierDetail
								:order_id="item._id"
								@remove="$emit('remove', index)"
								v-if="!Object.keys(item.shipment).includes('awb')"
							/>

							<div v-else>
								<v-row>
									<v-col>
										<label class="text-h6 design--text mb-1"> Delivery Details </label>
										<div class="d-flex flex-column">
											<div><b>Courier Name: </b>{{ item.shipment.awb.courier_name }}</div>
											<div><b>Shipment ID: </b>{{ item.shipment.shipment_id }}</div>
											<div>
												<b>Shipment Order ID: </b>{{ item.shipment.shipment_order_id }}
											</div>
										</div>
									</v-col>

									<v-col>
										<div class="d-flex flex-column">
											<label class="text-h6 design--text mb-1"> Shipper Details </label>
											<div>
												<b>Shipping Company: </b>
												{{ item.shipment.awb.shipped_by.shipper_company_name }}
											</div>
											<div>
												<b>Shipping Email: </b>
												{{ item.shipment.awb.shipped_by.shipper_email }}
											</div>
											<div>
												<b>Shipper Phone: </b>
												{{ item.shipment.awb.shipped_by.shipper_phone }}
											</div>
										</div>
									</v-col>

									<v-col>
										<div class="d-flex">
											<v-btn
												dark
												large
												color="design"
												class="mr-2 text-capitalize"
												@click="GenerateManifest(item)"
												:loading="isOrderManifestLoader"
											>
												Generate Order Manifest
											</v-btn>

											<v-btn
												dark
												large
												color="design"
												class="mr-2 text-capitalize"
												@click="GenerateLabel(item)"
												:loading="isOrderLabelLoader"
											>
												Generate Order Label
											</v-btn>
										</div>
									</v-col>
								</v-row>
							</div>
						</div>

						<div class="mb-2 text-h6 design--text">Order Details</div>
						<TableProductView
							:key="index"
							:order="order"
							v-for="(order, index) in item?.product_list"
						/>
					</v-container>
				</v-tab-item>
			</v-tabs>
		</v-card>
	</div>
</template>

<script>
import OrderAPI from '@/utils/api/order'

export default {
	data: () => ({
		isOrderLabelLoader: false,
		isOrderManifestLoader: false,
	}),
	props: { table_items: { type: Array, required: true } },
	methods: {
		async GenerateManifest(order) {
			if (!Object.keys(order.shipment).includes('manifest_url')) {
				try {
					this.isOrderManifestLoader = true
					const response = await OrderAPI.generateManifest({ child_order_id: order._id })
					const pdf_url = response.data.payload.url
					const link = document.createElement('a')
					link.href = pdf_url
					link.target = '_blank'
					link.click()
					this.isOrderManifestLoader = false
				} catch (err) {
					console.log(err)
				}
			} else {
				const link = document.createElement('a')
				link.href = order.shipment.manifest_url
				link.target = '_blank'
				link.click()
			}
		},
		async GenerateLabel(order) {
			if (!Object.keys(order.shipment).includes('label_url')) {
				try {
					this.isOrderLabelLoader = true
					const response = await OrderAPI.generateOrderLabel({ child_order_id: order._id })
					const pdf_url = response.data.payload.url
					const link = document.createElement('a')
					link.href = pdf_url
					link.target = '_blank'
					link.click()
					this.isOrderLabelLoader = false
				} catch (err) {
					console.log(err)
				}
			} else {
				const link = document.createElement('a')
				link.href = order.shipment.label_url
				link.target = '_blank'
				link.click()
			}
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped></style>
