<template>
	<div>
		<v-overlay v-model="isLoading">
			<v-progress-circular indeterminate size="64" />
		</v-overlay>

		<v-sheet class="mx-15 my-10" v-if="!isLoading">
			<div class="d-flex justify-space-between">
				<div><h1 class="font-weight-medium design--text">Product</h1></div>

				<div class="d-flex justify-center align-center">
					<div class="mt-1">
						<v-btn
							rounded
							outlined
							color="blue"
							class="my-4 text-capitalize"
							@click="AddEditDialog = true"
						>
							<v-icon small>mdi-plus</v-icon>Add Product
						</v-btn>
					</div>
				</div>
			</div>

			<TableDynamicServerSide
				action_edit
				action_delete
				@edit="EditData"
				@delete="DeleteData"
				:loading="isTableLoading"
				:header="datatable.header"
				:key="ReloadServerSideData"
				:items_length="table_items_count"
				:fetch_data="FetchDataWithPagination"
				:footer_props="datatable.footer_props"
				:image_construct="datatable.image_construct"
				:image_construct_size="datatable.image_construct_size"
			/>
		</v-sheet>

		<!-- Dialog for add/edit Form -->
		<v-dialog persistent v-model="AddEditDialog" fullscreen>
			<DialogProduct
				:edit="isEditing"
				:content="content"
				@close="AddEditDialog = false"
				@close_edit="isEditing = false"
				@change="ReloadServerSideData = Date.now() + Math.floor(Math.random() * 10000 + 1)"
			/>
		</v-dialog>

		<v-dialog persistent v-model="ExcelSheetErrorDialog" width="800">
			<DialogExcelSheetError :excelIssue="excelIssue" @close="ExcelSheetErrorDialog = false" />
		</v-dialog>
	</div>
</template>

<script>
import ProductAPI from '@/utils/api/ProductFormAPI'
import { map, capitalize, cloneDeep, join, mapKeys } from 'lodash'

export default {
	data: () => ({
		title: '',
		stock_status: '',
		excelIssue: {},
		d_stockStatusList: [
			{ _id: '', title: 'ALL' },
			{ _id: 'IN_STOCK', title: 'IN STOCK' },
			{ _id: 'LESS_STOCK', title: 'LESS STOCK' },
			{ _id: 'OUT_OF_STOCK', title: 'OUT OF STOCK' },
		],
		content: {},
		isEditing: false,
		isLoading: false,
		AddEditDialog: false,
		table_items_count: 0,
		isTableLoading: false,
		ProductAPI: ProductAPI,
		ExcelSheetErrorDialog: false,
		ReloadServerSideData: Date.now() + Math.floor(Math.random() * 10000 + 1),
		datatable: {
			items: [],
			footer_props: { itemsPerPageOptions: [10, 50, 100, 200, -1] },
			image_construct: ['product_image'],
			image_construct_size: ['square'],
			header: [
				{
					text: 'Serial',
					sortable: false,
					align: 'center',
					value: 'index',
					width: '50px',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Product Name',
					sortable: false,
					align: 'center',
					value: 'product_name',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Product Details',
					sortable: false,
					align: 'center',
					value: 'details',
					divider: true,
					class: 'design_light white--text',
					width: 200
				},
				{
					text: 'Image',
					divider: true,
					align: 'center',
					sortable: false,
					value: 'product_image',
					class: 'design_light white--text',
				},

				{
					text: 'Weight',
					sortable: false,
					align: 'center',
					value: 'weight',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Ingredients',
					sortable: false,
					align: 'center',
					value: 'ingredients',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Fat',
					sortable: false,
					align: 'center',
					value: 'fat',
					divider: true,
					class: 'design_light white--text',
				},

				{
					text: 'Protein',
					divider: true,
					align: 'center',
					sortable: false,
					value: 'protein',
					class: 'design_light white--text',
				},
				{
					text: 'Carbohydrates',
					sortable: false,
					align: 'center',
					value: 'carbohydrates',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Energy',
					sortable: false,
					align: 'center',
					value: 'energy',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Acidity As Citric Acid',
					sortable: false,
					align: 'center',
					value: 'acidity_as_citric_acid',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Sugar',
					sortable: false,
					align: 'center',
					value: 'sugar',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Calcium',
					sortable: false,
					align: 'center',
					value: 'calcium',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Trans Fat',
					sortable: false,
					align: 'center',
					value: 'trans_fat',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Saturated Fat',
					sortable: false,
					align: 'center',
					value: 'energy',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Sodium',
					sortable: false,
					align: 'center',
					value: 'sodium',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Total Fat',
					sortable: false,
					align: 'center',
					value: 'total_fat',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Citric Acid',
					sortable: false,
					align: 'center',
					value: 'citric_acid',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Taurine',
					sortable: false,
					align: 'center',
					value: 'taurine',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Caffeine',
					sortable: false,
					align: 'center',
					value: 'caffeine',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Inositol',
					sortable: false,
					align: 'center',
					value: 'inositol',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Niacin',
					sortable: false,
					align: 'center',
					value: 'niacin',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Vitamin B6',
					sortable: false,
					align: 'center',
					value: 'vitamin_b6',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Vitamin B3',
					sortable: false,
					align: 'center',
					value: 'vitamin_b3',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Vitamin B12',
					sortable: false,
					align: 'center',
					value: 'vitamin_b12',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Action',
					sortable: false,
					align: 'center',
					value: 'link',
					divider: true,
					width: 80,
					class: 'design_light white--text',
				},
				// //comment by suraj instruction by animesh sir
				// // {
				// // 	text: 'Inventory',
				// // 	sortable: false,
				// // 	align: 'center',
				// // 	width: '50px',
				// // 	value: 'inventory',
				// // 	divider: true,
				// // 	class: 'design_light white--text',
				// // },
				// {
				// 	text: 'Action',
				// 	sortable: false,
				// 	align: 'center',
				// 	value: 'link',
				// 	divider: true,
				// 	width: 80,
				// 	class: 'design_light white--text',
				// },
			],
		},
	}),
	layout: 'admin',
	methods: {
		async FetchProductCount(search) {
			try {
				// const response = await ProductAPI.get_patient_product_count({
				// 	title: search || '',
				// 	stock_status: this.stock_status,
				// })
				// this.table_items_count = response.data.payload.total_product_count
				this.table_items_count = 100
			} catch (err) {
				console.log(err)
			}
		},
		async FetchDataWithPagination(search, pagination) {
			console.log('inside funtion')
			try {
				this.isTableLoading = true
				await this.FetchProductCount(search)
				const limit = pagination?.itemsPerPage == -1 ? 0 : pagination?.itemsPerPage || 10
				const skip =
					this.table_items_count > 10
						? pagination
							? (pagination?.page - 1) * pagination?.itemsPerPage
							: 0
						: 0
				const response = await ProductAPI.getAllProductAdmin({
					skip: skip,
					limit: limit,
					title: search || '',
					stock_status: this.stock_status,
				})
				console.log('inside response', response)

				this.datatable.items = map(response.data.payload, (d, i) => ({
					...d,
					index: i + 1,

					// sold_stock: d?.seller_list[0]?.sold_stock,
					// total_stock: d?.seller_list[0]?.total_stock,
					// Extra keys for Table
					// index: skip + i + 1,
					// product_image: d.product_image,
					// product_name: d.product_name,

					// mrp_table: `₹ ${d?.mrp?.toLocaleString('en-IN')}`,
					// link: `/patient/product/review/${d.product_id}`,
					// selling_price_table: `₹ ${d?.seller_list[0]?.selling_price?.toLocaleString('en-IN')}`,
					// total_stock_table: `${d?.seller_list[0]?.total_stock?.toLocaleString('en-IN')}`,
					// category_list_table: `${capitalize(d?.category_list[0])} - ${capitalize(
					// 	d?.sub_category_list[0],
					// )}`,
				}))
				this.isTableLoading = false
				console.log('datatable', this.datatable.items)
				return this.datatable.items
			} catch (err) {
				console.log(err)
			}
		},
		RefreshPage() {
			this.FetchDataWithPagination()
			this.$store.dispatch('ActivateSnackBar', {
				state: true,
				color: 'green darken-4',
				msg: 'Products added successfully via Excel',
			})
		},
		async ExportTableProduct() {
			try {
				this.isLoading = true
				const response = await ProductAPI.getAllProductAdmin({ search: '', limit: 0, skip: 0 })
				consoel.log('response 222', response)
				const transformedList = map(response.data.payload, (item) => ({
					ID: item?._id,
					SKU: item?.sku,
					STATUS: item?.status,
					HSN: item?.hsn_code,
					TITLE: item?.product_name,
					CATEGORY: item?.category_list,
					'SUB CATEGORY': item?.sub_category_list,
					TAGS: item?.tags,
					BRAND: item?.brand?.name,
					SELLER: item?.seller_list[0]?.seller?.name,
					BENEFITS: item?.benefits,
					DESCRIPTION: item?.description,
					INGREDIENTS: item?.ingredients,
					PROTEIN: item?.protein,
					CARBOHYDRATES: item?.carbohydrates,
					Emergy: item?.energy,
					CITRICACIDE: item?.citric_acid,
					Fat: item?.fat,
					SUGAR: item?.sugar,
					CALCIUM: item?.calcium,
					TRANSFAT: item?.trans_fat,
					SATURATEDFAT: item?.saturated_fat,
					SODIUM: item?.sodium,
					TOTALFAT: item?.total_fat,
					ACIDITYCITRICACID: item?.acidity_as_citric_acid,
					TAURINE: item?.taurine,
					CAFFEINE: item?.caffeine,
					INOSITOL: item?.inositol,
					NIACIN: item?.niacin,
					VITAMINB6: item?.vitamin_b6,
					VITAMINB3: item?.vitamin_b3,
					VITAMINB12: item?.vitamin_b12,
					IMAGES: join(
						map(item.product_image, (image) => `<a href="${image}" target="_blank">${image}</a>`),
						',',
					),
					'WEIGHT(gm)': item?.shipping_details?.weight,
					PRODUCT_LINK: `https://naturefit.in/shop/product/${item.slug}`,
				}))
				this.isLoading = false
				console.log('transformedList', transformedList)
				return transformedList
			} catch (err) {
				console.log(err)
			}
		},
		EditData(itemtoEdit) {
			this.isEditing = true
			this.content = cloneDeep(itemtoEdit)
			this.AddEditDialog = true
		},
		async DeleteData(itemToDelete) {
			try {
				const response = await ProductAPI.deleteProduct({
					product_id: itemToDelete,
				})
				console.log('resposne ++++++++++++++++++++',response);
				
				if (response.data.status.status_code === 0) {
					this.$store.dispatch('ActivateSnackBar', {
						state: true,
						color: 'green darken-4',
						msg: 'Product deleted successfully',
					})
					this.FetchDataWithPagination()
				}
				this.ReloadServerSideData = Date.now() + Math.floor(Math.random() * 10000 + 1)
			} catch (err) {
				console.log(err)
			}
		},
		HandleUploadError(error) {
			const renamedKeys = {
				selling_price_more_than_mrp_arr: 'Price Discrimination',
				sku_is_not_exist_arr: 'SKU Not Found',
			}
			// Renaming the keys before sending to Modal
			this.excelIssue = mapKeys(error, (value, key) => renamedKeys[key] || key)
			delete this.excelIssue.message
			this.ExcelSheetErrorDialog = true
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped></style>
