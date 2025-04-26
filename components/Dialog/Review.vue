<template>
	<v-card class="pa-4">
		<v-row>
			<v-col class="text-center">
				<span class="text-h5">{{ edit ? 'Edit' : 'Add' }} Review Information</span>
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
						<label>Username<span class="red--text">*</span></label>
						<v-text-field
							outlined
							:rules="[rules.required]"
							v-model="payload.user_name"
							placeholder="Enter username"
						/>
					</v-col>

					<v-col cols="6">
						<label>Title<span class="red--text">*</span></label>
						<v-text-field
							outlined
							:rules="[rules.required]"
							v-model="payload.title"
							placeholder="Enter review title"
						/>
					</v-col>

					<v-col cols="6">
						<label class="required">Rating</label>
						<v-rating hover size="35" length="5" color="orange lighten-1" v-model="payload.rating" />
						<sup class="red--text" v-if="errorMessages.rating"> {{ errorMessages.rating }} </sup>
					</v-col>

					<v-col cols="6">
						<label>Attachments <sup class="red--text">*</sup></label>
						<FormElementsFileInput
							multiple
							:image_width="1920"
							:image_height="670"
							v-model="payload.image_list"
							:errorMessage="errorMessages.image_list"
							@change="isImagesValidated(['image_list'])"
							:UploadAPI="ReviewAPI.upload_image"
						/>
					</v-col>

					<v-col cols="12">
						<label>Review <sup class="red--text">*</sup></label>
						<v-textarea
							outlined
							v-model="payload.review"
							:rules="[rules.required]"
							placeholder="Enter review"
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
	</v-card>
</template>

<script>
import { map } from 'lodash'
import ReviewAPI from '@/utils/api/review'

export default {
	data: () => ({
		ReviewAPI: ReviewAPI,
		isValid: false,
		payload: {
			rating: 0,
			title: '',
			review: '',
			seller_id: '',
			user_name: '',
			product_id: '',
			image_list: [],
		},
		// Error keys must match with the payload keys
		// Only keys that must be kept here are the ones that are with Custom FILEINPUT Component
		errorMessages: { image_list: '', rating: '' },
		rules: {
			required: (value) => !!value || 'This field is required',
		},
	}),
	watch: {
		edit: {
			handler(newVal, oldVal) {
				if (newVal) {
					this.payload = { ...this.payload, ...this.content }
					this.payload.tag_id = this.content._id
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
		// Additional required values for adding review
		seller_id: { type: String, required: true },
		product_id: { type: String, required: true },
	},

	methods: {
		async AddEditData() {
			this.$refs.form.validate()
			let isRatingValid
			const isImagesValid = this.isImagesValidated(['image_list'])
			if (!this.payload.rating) {
				this.errorMessages.rating = 'This is required'
				isRatingValid = true
			} else {
				this.errorMessages.rating = ''
				isRatingValid = false
			}
			if (this.isValid && isImagesValid && isRatingValid) {
				try {
					let response
					if (this.edit) {
						// response = await TagAPI.updateTag(this.payload)
						// this.$emit('close_edit')
					} else {
						this.payload.seller_id = this.seller_id
						this.payload.product_id = this.product_id
						response = await ReviewAPI.addReview(this.payload)
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
			this.payload = {
				rating: 0,
				title: '',
				review: '',
				seller_id: '',
				user_name: '',
				product_id: '',
				image_list: [],
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
