<template>
	<div>
		<v-overlay v-model="isLoading">
			<v-progress-circular indeterminate size="64" />
		</v-overlay>

		<v-sheet class="mx-15 my-10" v-if="!isLoading">
			<div class="d-flex align-center justify-space-between mb-8">
				<h1 class="font-weight-medium design--text">Blogs</h1>
				<v-btn rounded outlined color="blue" class="my-4 text-capitalize" @click="AddEditDialog = true">
					<v-icon small>mdi-plus</v-icon>Add Blog
				</v-btn>
			</div>

			<TableDynamic
				action_edit
				action_delete
				@edit="EditData"
				@delete="DeleteData"
				:items="datatable.items"
				:header="datatable.header"
				:image_construct="datatable.image_construct"
				:image_construct_size="datatable.image_construct_size"
			/>
		</v-sheet>

		<!-- Dialog for add/edit Form -->
		<v-dialog persistent v-model="AddEditDialog" width="800">
			<DialogSubCategory
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
import { map, capitalize, trim, cloneDeep } from 'lodash'
import SubcategoryAPI from '@/utils/api/subCategory'

export default {
	data: () => ({
		content: {},
		isEditing: false,
		isLoading: false,
		AddEditDialog: false,
		datatable: {
			items: [],
			image_construct: ['page_thumbnail', 'image'],
			image_construct_size: ['square', 'banner'],
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
					text: 'Blog Title',
					sortable: false,
					align: 'center',
					value: 'title',
					divider: true,
					class: 'design_light white--text',
					width: 100,

				},
				{
					text: 'Blog Description',
					sortable: false,
					align: 'center',
					value: 'description',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Blog Image',
					sortable: false,
					align: 'center',
					value: 'image',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Action',
					sortable: false,
					align: 'center',
					value: 'link',
					divider: true,
					width: 110,
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
				const response = await SubcategoryAPI.getSubCategory()
				this.datatable.items = map(response.data.payload, (d, i) => ({
					...d,
					index: i + 1,
				}))
				this.isLoading = false
			} catch (err) {
				console.log(err)
			}
		},
		async DeleteData(itemToDelete) {

			try {
				const response = await SubcategoryAPI.deleteSubCategoryById({
					blog_id: itemToDelete,
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
		EditData(itemtoEdit) {
			this.isEditing = true
			this.content = cloneDeep(itemtoEdit)
			this.AddEditDialog = true
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
