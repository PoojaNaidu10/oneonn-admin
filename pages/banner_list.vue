<template>
	<div>
		<v-overlay v-model="isLoading">
			<v-progress-circular indeterminate size="64" />
		</v-overlay>

		<v-sheet class="mx-15 my-10" v-if="!isLoading">
			<div class="d-flex align-center justify-space-between mb-8">
				<h1 class="font-weight-medium design--text">Homescreen - Banner</h1>
				<v-btn rounded outlined color="blue" class="my-4 text-capitalize" @click="AddEditDialog = true">
					<v-icon small>mdi-plus</v-icon>Add Banner
				</v-btn>
			</div>

			<TableDynamic
				action_edit
				action_delete
				@edit="EditData"
				@delete="DeleteData"
				:items="datatable.items"
				:header="datatable.header"
				:options="datatable.options"
				:image_construct="datatable.image_construct"
				:image_construct_size="datatable.image_construct_size"
			/>
		</v-sheet>

		<!-- Dialog for add/edit Form -->
		<v-dialog persistent v-model="AddEditDialog" width="600">
			<DialogBannerList
				:edit="isEditing"
				:content="content"
				@change="FetchData"
				@close="AddEditDialog = false"
				@close_edit="isEditing = false"
			/>
		</v-dialog>
	</div>
</template>

<script>
import { map, cloneDeep, orderBy } from 'lodash'
import HomescreenAPI from '@/utils/api/homescreen'

export default {
	data: () => ({
		content: {},
		isEditing: false,
		isLoading: false,
		AddEditDialog: false,
		homescreen_community_id: '',
		datatable: {
			items: [],
			options: { page: 2, itemsPerPage: 1 },
			image_construct: ['image', 'mobile_image'],
			image_construct_size: ['square', 'square'],
			header: [
				{
					text: 'Serial',
					sortable: false,
					align: 'center',
					value: 'index',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: ' Image',
					sortable: false,
					align: 'center',
					value: 'image',
					divider: true,
					width: 200,
					class: 'design_light white--text',
				},
				// {
				// 	text: 'Mobile Image',
				// 	sortable: false,
				// 	align: 'center',
				// 	value: 'mobile_image',
				// 	divider: true,
				// 	width: 200,
				// 	class: 'design_light white--text',
				// },
				{
					text: 'Type',
					divider: true,
					align: 'center',
					sortable: false,
					value: 'type',
					cellClass: 'custom-cell-100',
					class: 'design_light white--text',
				},
				{
					text: 'Position',
					sortable: false,
					align: 'center',
					divider: true,
					value: 'position',
					cellClass: 'custom-cell-100',
					class: 'design_light white--text',
				},
				{
					text: 'Action',
					sortable: false,
					align: 'center',
					value: 'link',
					divider: true,
					class: 'design_light white--text',
				},
			],
		},
	}),
	layout: 'admin',
	methods: {
		async FetchData() {
			try {
				this.isLoading = true
				const response = await HomescreenAPI.get_homescreen_data()
				console.log('response',response);
				
				// this.homescreen_community_id = response.data.payload._id
				// this.orderWise = orderBy(response.data.payload.banner_list, ['desktop_image'], ['desc'])
				this.datatable.items = map(response.data.payload, (d, i) => ({
					...d,
					index: i + 1,
				}))
				this.isLoading = false
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
				const response = await HomescreenAPI.delete_banner_list({
					banner_id: itemToDelete,
				})
				if (response.status.status_code === 0) {
					this.$store.dispatch('ActivateSnackBar', {
						state: true,
						color: 'green darken-4',
						msg: 'Item deleted successfully',
					})
				}
				this.FetchData()
			} catch (err) {
				console.log(err)
			}
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.FetchData()
		})
	},
}
</script>

<style></style>
