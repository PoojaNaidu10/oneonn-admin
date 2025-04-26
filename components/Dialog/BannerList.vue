<template>
	<v-card class="pa-4">
		<v-row>
			<v-col class="text-center">
				<span class="text-h5">{{ edit ? 'Edit' : 'Add' }} Homescreen - Banner</span>
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
						<label>Product Image<sup class="red--text">*</sup></label>
						<FormElementsFileInput v-model="payload.image" :errorMessage="errorMessages.image"
							@change="isImagesValidated(['image'])" :UploadAPI="HomeScreenAPI.add_homescreen_image" />
					</v-col>


					<v-col cols="6">
						<label class="mb-3">Type <span class="red--text">*</span></label>
						<v-text-field outlined v-model="payload.type" :rules="[rules.required]" />
					</v-col>

					<v-col cols="6">
						<label>Position</label>
						<v-text-field outlined type="number" persistent-hint hide-spin-buttons
							placeholder="Enter Position" v-model="payload.position"
							:rules="[rules.notnull, rules.notNegative]" />
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
import HomeScreenAPI from '@/utils/api/homescreen'

export default {
	data: () => ({
		HomeScreenAPI: HomeScreenAPI,
		isValid: false,
		payload: {
			type: '',
			image: '',
			position: 0,
		},
		// Error keys must match with the payload keys
		// Only keys that must be kept here are the ones that are with Custom FILEINPUT Component
		errorMessages: { image: '' },
		rules: {
			required: (value) => !!value || 'This field is required',
			notnull: (value) => (value !== null && value !== '') || 'This field is required',
			notNegative: (value) => value >= 0 || 'Please enter a non-negative number',
		},
	}),
	watch: {
		edit: {
			handler(newVal, oldVal) {
				if (newVal) {
					this.payload = { ...this.payload, ...this.content }
					this.payload.banner_id = this.content._id
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
			const isImagesValid = this.isImagesValidated(['image'])
			console.log("image", this.payload.image.imageUrl)

			if (this.isValid && isImagesValid) {
				if (!(await this.isPositionExists())) {
				if (this.payload?.image?.imageUrl) {
					this.payload.image = this.payload.image.imageUrl
				}
				
				try {
					if (this.edit) {
						await HomeScreenAPI.update_banner_list({
							...this.payload,
							banner_id: this.payload.banner_id,
						})
						this.$emit('close_edit')
					} else {
						console.log('this.payload', this.payload)
						await HomeScreenAPI.add_homescreen_data({ ...this.payload })
					}
					this.ResetForm()
					this.$emit('change')
					this.$emit('close')
				} catch (err) {
					console.log(err)
				}
				} else {
					this.$store.dispatch('ActivateSnackBar', {
						state: true,
						color: 'red darken-4',
						msg: 'Position Not Available',
					})
				}
			}
		},
		isImagesValidated(itemsToValidate) {
			let isValid = true
			map(itemsToValidate, (item) => {
				if (typeof this.payload[item] === 'string') {
					console.log("inside of if")
					this.errorMessages[item] = this.payload[item] ? '' : 'This is required'
					isValid = isValid && !!this.payload[item]

				} else if (typeof this.payload[item] === 'object') {
					console.log("inside of else if")

					this.errorMessages[item] = this.payload?.image.imageUrl ? '' : 'This is required'
					console.log("payload lenth", this.errorMessages[item])
					console.log("pyalod lenth", this.payload?.image.imageUrl)
					isValid = isValid && !!this.payload?.image.imageUrl
				}
			})
			return isValid
		},
		async isPositionExists() {
			try {
				const response = await HomeScreenAPI.checkBannerPositionExistence({
					position: parseInt(this.payload.position),
				})
				return response.data.payload.isExist
			} catch (err) {
				console.log(err)
			}
		},
		ResetForm() {
			this.payload = {
				type: '',
				image: '',
				position: 0,
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
		this.$nextTick(() => { })
	},
}
</script>

<style scoped></style>
