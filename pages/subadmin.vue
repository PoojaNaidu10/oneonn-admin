<template>
	<div>
		<v-overlay v-model="isLoading">
			<v-progress-circular indeterminate size="64" />
		</v-overlay>

		<v-sheet class="mx-15 my-10" v-if="!isLoading">
			<div class="d-flex align-center justify-space-between mb-8">
				<h1 class="font-weight-medium design--text">Subadmin Management</h1>
				<v-btn rounded outlined color="blue" class="my-4 text-capitalize" @click="AddEditDialog = true">
					<v-icon small>mdi-plus</v-icon>Add subadmin users
				</v-btn>
			</div>

			<TableDynamic
				action_edit
				action_delete
				@edit="EditData"
				@delete="DeleteData"
				:items="datatable.items"
				:header="datatable.header"
			/>
		</v-sheet>

		<!-- Dialog for add/edit Form -->
		<v-dialog persistent v-model="AddEditDialog" width="600">
			<DialogSubAdmin
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
import ShopUser from '@/utils/api/ShopUser'
import { cloneDeep } from 'lodash'

export default {
	data: () => ({
		content: {},
		isEditing: false,
		AddEditDialog: false,
		isLoading: false,
		datatable: {
			items: [],
			header: [
				{
					text: 'User Name',
					sortable: false,
					align: 'center',
					value: 'name',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Mobile No',
					sortable: false,
					align: 'center',
					value: 'mobile',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Email',
					sortable: false,
					align: 'center',
					value: 'email',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'Password',
					sortable: false,
					align: 'center',
					value: 'password',
					divider: true,
					class: 'design_light white--text',
				},
				{
					text: 'ACL',
					sortable: false,
					align: 'center',
					value: 'privilage_list',
					divider: true,
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
				const response = await ShopUser.getAllShopUserSubAdmin({ user_type: 'SHOP' })
				this.datatable.items = response.data.payload
				this.isLoading = false
			} catch (err) {
				console.log(err)
			}
		},
		async DeleteData(itemToDelete) {
			try {
				const response = await ShopUser.deleteShopUserSubAdminById({
					subadmin_id: itemToDelete,
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
