<template>
	<v-card class="pa-4">
		<v-row>
			<v-col class="text-center">
				<span class="text-h5">{{ edit ? 'Edit' : 'Add' }} Upload Image</span>
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
					<v-col cols="12">
						<label>Brand<span class="red--text">*</span></label>
						<v-autocomplete
							outlined
							item-value="_id"
							item-text="name"
							auto-select-first
							:items="d_brandList"
							:rules="[rules.required]"
							placeholder="Select Brand"
							v-model="payload.brand_id"
							append-icon="mdi-chevron-down"
						/>
					</v-col>

					<v-col cols="4">
						<label>Product Images<sup class="red--text">*</sup></label>
						<FormElementsFileInput
							multiple
							v-model="payload.product_image_list"
							:errorMessage="errorMessages.product_image_list"
							@change="isImagesValidated(['product_image_list'])"
							:UploadAPI="CategoryAPI.uploadCategoryThumbnailImage"
						/>
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

		<v-dialog persistent v-model="uploadImageDialog" width="850">
			<DialogUploadImagePopUp
				:items="d_payload.product_image_list"
				@CloseDialog="uploadImageDialog = false"
			/>
		</v-dialog>
	</v-card>
</template>

<script>
import { map } from 'lodash'
import UploadimgAPI from '@/utils/api/uploadimg'
import CategoryAPI from '@/utils/api/category'
import BrandAPI from '@/utils/api/brand'

export default {
	data: () => ({
		d_payload: {},
		uploadImageDialog: false,
		isValid: false,
		CategoryAPI: CategoryAPI,
		d_brandList: [],
		payload: {
			brand_id: '',
			product_image_list: [],
		},
		errorMessages: { product_image_list: '' },
		rules: { required: (value) => !!value || 'This field is required' },
	}),
	props: {
		content: { type: Object },
		edit: { type: Boolean, default: false },
	},
	methods: {
		async AddEditData() {
			this.$refs.form.validate()
			const isImagesValid = this.isImagesValidated(['product_image_list'])
			if (this.isValid && isImagesValid) {
				try {
					let response
					if (this.edit) {
						// response = await CategoryAPI.updateCategory(this.payload)
						// this.$emit('close_edit')
					} else {
						response = await UploadimgAPI.addBrandProductImg(this.payload)
						this.d_payload = this.payload
						this.uploadImageDialog = true
					}
					if (response.data.status.status_code) {
						this.$store.dispatch('ActivateSnackBar', {
							state: true,
							color: 'red darken-4',
							msg: response.data.status.message,
						})
					} else {
						this.$store.dispatch('ActivateSnackBar', {
							state: true,
							color: 'green darken-4',
							msg: `Item ${this.edit ? 'Updated' : 'Added'} Successfully`,
						})
					}
					this.ResetForm()
					this.$emit('change')
					this.$emit('close')
				} catch (err) {
					console.log(err)
				}
			}
		},
		async GetBrand() {
			try {
				const response = await BrandAPI.getAllBrand({ search: '', limit: 0, skip: 0 })
				console.log('response', response)
				this.d_brandList = response.data.payload
			} catch (err) {
				console.log(err)
			}
		},
		isImagesValidated(itemsToValidate) {
			let isValid = true
			map(itemsToValidate, (item) => {
				if (typeof this.payload[item] === 'string') {
					this.errorMessages[item] = this.payload[item] ? '' : 'This is required'
					isValid = isValid && !!this.payload[item]
				} else if (typeof this.payload[item] === 'object') {
					this.errorMessages[item] = this.payload[item]?.length ? '' : 'This is required'
					isValid = isValid && !!this.payload[item]?.length
				}
			})
			return isValid
		},
		ResetForm() {
			this.payload = { brand_id: '', product_image_list: [] }
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
		this.$nextTick(() => {
			this.GetBrand()
		})
	},
}
</script>

<style scoped></style>
