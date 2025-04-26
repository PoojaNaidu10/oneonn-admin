<template>
	<v-card class="pa-4">
		<v-row>
			<v-col class="text-center">
				<span class="text-h5">{{ edit ? 'Edit' : 'Add' }} Blog Information</span>
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
						<label>Blog Heading<span class="red--text">*</span></label>
						<v-text-field outlined auto-select-first placeholder="Enter Blog Heading" v-model="payload.title"
							:rules="[rules.required]" />
					</v-col>
					<v-col cols="6">
						<label>Blog Description<span class="red--text">*</span></label>
						<v-text-field outlined :rules="[rules.required]" v-model="payload.description"
							placeholder="Enter Blog Description" />
					</v-col>

					<v-text-field
  label="Start Date"
  type="date"
  v-model="payload.date"
  :min="minDate"          
  clearable
  outlined
  @click:clear="payload.date = ''"
  @keydown.backspace="payload.date = ''"
  @keydown.delete="payload.date = ''"
/>


					<v-col cols="6">
						<label>Blog Image <sup class="red--text">*</sup></label>
						<FormElementsFileInput  v-model="payload.image"
							:errorMessage="errorMessages.image" @change="isImagesValidated(['image'])"
							:UploadAPI="HomeScreenAPI.add_homescreen_image" />
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
import { map } from 'lodash'
import CategoryAPI from '@/utils/api/category'
import SubcategoryAPI from '@/utils/api/subCategory'
import HomeScreenAPI from '@/utils/api/homescreen'

export default {
	data: () => ({
		HomeScreenAPI: HomeScreenAPI,

		isValid: false,
		d_categoryList: [],
		SubcategoryAPI: SubcategoryAPI,
		payload: {
			title: '',
			description: '',
			date: '',
			image: "",
		},
		minDate: new Date().toISOString().split("T")[0], 

		// Error keys must match with the payload keys
		// Only keys that must be kept here are the ones that are with Custom FILEINPUT Component
		errorMessages: {
			image: '',
		},
		rules: { required: (value) => !!value || 'This field is required' },
	}),
	watch: {
		edit: {
			handler(newVal, oldVal) {
				if (newVal) {
					this.payload = { ...this.payload, ...this.content }
					this.payload.blog_id = this.content._id
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
			const isImagesValid = this.isImagesValidated(['page_thumbnail', 'banner_image_list'])

			if (this.isValid && isImagesValid) {
				if (this.payload.image && typeof this.payload.image === 'object' && this.payload.image.imageUrl) {
      this.payload.image = this.payload.image.imageUrl;
    }
				try {
					let response
					if (this.edit) {
						response = await SubcategoryAPI.updateSubCategory(this.payload)
						this.$emit('close_edit')
					} else {
						response = await SubcategoryAPI.addSubCategory(this.payload)
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
		async getAllCategory() {
			try {
				const response = await CategoryAPI.getAllCategory({ category: '', limit: 0, skip: 0 })
				this.d_categoryList = response.data.payload
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
					this.errorMessages[item] = this.payload[item] ? '' : 'This is required'
					isValid = isValid && !!this.payload[item]
				}
			})
			return isValid
		},
		ResetForm() {
			this.payload = {
				title: '',
				description: '',
				date: '',
				image: "",
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
		this.$nextTick(() => {
			this.getAllCategory()
		})
	},
}
</script>

<style scoped></style>
