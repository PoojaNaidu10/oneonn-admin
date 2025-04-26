<template>
	<v-card class="pa-4">
		<v-row class="pt-9 px-5">
			<v-col class="text-center">
				<span class="text-h5">{{ edit ? 'Edit' : 'Add' }} Product Information</span>
			</v-col>
			<v-col cols="2" class="text-right">
				<v-btn icon @click="CloseForm">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-col>
		</v-row>

		<v-card-text>
			<v-form v-model="isValid" ref="form" class="px-15">
				<v-row>
					<v-col cols="12">
						<v-row>
							
								<v-col cols="12">
									<label>Product Image<sup class="red--text">*</sup></label>
									<FormElementsFileInput
										v-model="payload.product_image"
										:errorMessage="errorMessages.product_image"
										@change="isImagesValidated(['product_image'])"
										:UploadAPI="HomeScreenAPI.add_homescreen_image"
									/>
								</v-col>

							<v-col cols="6">
								<label class="required">Ingredients</label>
								<v-text-field
									outlined
									placeholder="Enter Ingredients"
									:rules="[rules.required]"
									v-model="payload.ingredients"
								/>
							</v-col>
							<v-col cols="12">
								<label>Product Name<span class="red--text">*</span></label>
								<v-text-field
									outlined
									v-model="payload.product_name"
									:rules="[rules.required]"
									placeholder="Enter Title"
								/>
							</v-col>
							<v-col cols="6">
  <label>Product Details<span class="red--text">*</span></label>
  <v-textarea
    outlined
    v-model="payload.details"
    :rules="[rules.required]"
    placeholder="Enter Title"
    rows="3"               
    auto-grow              
  />
</v-col>

							<v-col cols="6">
								<label>Weight <span class="red--text">*</span></label>
								<v-text-field
									outlined
									v-model="payload.weight"
									placeholder="Enter Weight"
									:rules="[rules.required]"
								/>
							</v-col>
							<v-col cols="6">
								<label>Fat </label>
								<v-text-field
									outlined
									v-model="payload.fat"
									placeholder="Enter Fat"
								/>
							</v-col>
							<v-col cols="6">
								<label>Protein</label>
								<v-text-field
									outlined
									v-model="payload.protein"
									placeholder="Enter Protein"
								/>
							</v-col>
							<v-col cols="6">
								<label>Carbohydrates</label>
								<v-text-field
									outlined
									v-model="payload.carbohydrates"
									placeholder="Enter Carbohydrates"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Energy</label>
								<v-text-field
									outlined
									v-model="payload.energy"
									placeholder="Enter Energy"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Acidity As Citric Acid</label>
								<v-text-field
									outlined
									v-model="payload.acidity_as_citric_acid"
									placeholder="Enter Acidity As Citric Acid"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Sugar</label>
								<v-text-field
									outlined
									v-model="payload.sugar"
									placeholder="Enter Sugar"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Calcium</label>
								<v-text-field
									outlined
									v-model="payload.calcium"
									placeholder="Enter Calcium"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Trans Fat</label>
								<v-text-field
									outlined
									v-model="payload.trans_fat"
									placeholder="Enter Trans Fat"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Saturated Fat</label>
								<v-text-field
									outlined
									v-model="payload.saturated_fat"
									placeholder="Enter Saturated Fat"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Sodium</label>
								<v-text-field
									outlined
									v-model="payload.sodium"
									placeholder="Enter Sodium"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Total Fat</label>
								<v-text-field
									outlined
									v-model="payload.total_fat"
									placeholder="Enter Total Fat"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Citric Acid</label>
								<v-text-field
									outlined
									v-model="payload.citric_acid"
									placeholder="Enter Citric Acid"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Taurine</label>
								<v-text-field
									outlined
									v-model="payload.taurine"
									placeholder="Enter Taurine"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Caffeine</label>
								<v-text-field
									outlined
									v-model="payload.caffeine"
									placeholder="Enter Caffeine"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Inositol</label>
								<v-text-field
									outlined
									v-model="payload.inositol"
									placeholder="Enter Inositol"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Niacin</label>
								<v-text-field
									outlined
									v-model="payload.niacin"
									placeholder="Enter Niacin"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Vitamin B6</label>
								<v-text-field
									outlined
									v-model="payload.vitamin_b6"
									placeholder="Enter Vitamin B6"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>Vitamin B3</label>
								<v-text-field
									outlined
									v-model="payload.vitamin_b3"
									placeholder="Enter Vitamin B3"
									
								/>
							</v-col>
							<v-col cols="6">
								<label>vitamin B12</label>
								<v-text-field
									outlined
									v-model="payload.vitamin_b12"
									placeholder="Enter Vitamin B12"
									
								/>
							</v-col>
						
							<v-col cols="4">
								<v-row class="sticky-header">
									<div class="mx-auto mt-3">
										<v-btn class="mr-2 white--text" color="grey" @click="CloseForm">
											Cancel
										</v-btn>
										<v-btn class="mr-2 white--text" color="design" @click="AddEditData">
											{{ edit ? 'Update' : 'Submit' }}
										</v-btn>
									</div>
								</v-row>
							</v-col>
						</v-row>
						<!-- <small>*indicates required field</small> -->
					</v-col>
				</v-row>

			</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
import { map } from 'lodash'
import TagAPI from '@/utils/api/tag'
import BrandAPI from '@/utils/api/brand'
import SellerAPI from '@/utils/api/SellerFormAPI'
import ProductAPI from '@/utils/api/ProductFormAPI'
import HealthconcernAPI from '@/utils/api/healthconcern'
import HomeScreenAPI from '@/utils/api/homescreen'

export default {
	data: () => ({
		ProductAPI: ProductAPI,
		HomeScreenAPI: HomeScreenAPI,
		isValid: false,
		d_tagList: [],
		d_hsnList: [],
		d_labelList: [],
		d_brandList: [],
		d_sellerList: [],
		d_categoryList: [],
		d_subcategoryList: [],
		d_healthconcernList: [],
		payload: {
			product_name: '',
			details: '',

			product_image: '',
			ingredients: '',
			weight: '',
			fat: '',
			protein: '',
			carbohydrates: '',
			energy: '',
			acidity_as_citric_acid: '',
			sugar: '',
			calcium: '',
			trans_fat: '',
			saturated_fat: '',
			sodium: '',
			citric_acid: '',
			taurine: '',
			caffeine: '',
			inositol: '',
			niacin: '',
			vitamin_b6: '',
			vitamin_b3: '',
			vitamin_b12: '',
			total_fat:'',
		},
		errorMessages: { product_image: '' },
		rules: {
			required: (value) => !!value || 'This field is required',
			notNegative: (value) => value >= 0 || 'Please enter a non-negative number',
			notNull: (value) => (value !== null && value !== '') || 'This field is required',
		},
	}),
	watch: {
		edit: {
			handler(newVal, oldVal) {
				if (newVal) {
					this.payload = { ...this.payload, ...this.content }
					this.payload.product_id = this.content._id
					// this.payload.selling_price = this.content?.seller_list[0]?.selling_price
					// this.payload.brand_id = this.content?.brand?._id
					// this.payload.seller_id = this.content?.seller_list[0]?.seller?._id
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
		content: { type: Object, default: false },
		edit: { type: Boolean, default: false },
	},
	methods: {
		async DeleteData(itemToDelete) {

try {
	const response = await ProductAPI.deleteAllProductById({
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
		async AddEditData() {
			this.$refs.form.validate()
			const isImagesValid = this.isImagesValidated(['image'])
			console.log('out side of if 123',this.isValid)
			console.log('out -----------------',isImagesValid)
			if (this.isValid && isImagesValid) {
				try {
					if (this.payload?.product_image?.imageUrl) {
					this.payload.product_image = this.payload.product_image.imageUrl
				}
					console.log('in side of if')

					if (this.edit) {
						
						await ProductAPI.updateProduct(this.payload)
						this.$emit('close_edit')
						this.ResetForm()
						this.$emit('change')
						this.$emit('close')
					} else {
						console.log('in side of else if1111111')

						const response = await ProductAPI.addProduct(this.payload)
						console.log('add product', this.payload)
						if (response.data.status.status_code == 1) {
							this.$store.dispatch('ActivateSnackBar', {
								state: true,
								color: 'red darken-4',
								msg: response.data.status.message,
							})
						} else if (response.data.status.status_code == 0) {
							this.$store.dispatch('ActivateSnackBar', {
								state: true,
								color: 'green darken-4',
								msg: response.data.status.message,
							})
							this.ResetForm()
							this.$emit('change')
							this.$emit('close')
						} else {
							this.$store.dispatch('ActivateSnackBar', {
								state: true,
								color: 'red darken-4',
								msg: response.data.status.message,
							})
						}
					}
				} catch (err) {
					console.log(err)
				}
			} else {
				console.log('in side of else')
				this.errorMessages.description = 'This is required'
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
				product_name: '',
				details: '',
				product_image: '',
				ingredients: '',
				weight: '',
				fat: '',
				protein: '',
				carbohydrates: '',
				energy: '',
				acidity_as_citric_acid: '',
				sugar: '',
				calcium: '',
				trans_fat: '',
				saturated_fat: '',
				sodium: '',
				citric_acid: '',
				taurine: '',
				caffeine: '',
				inositol: '',
				niacin: '',
				vitamin_b6: '',
				vitamin_b3: '',
				vitamin_b12: '',
				total_fat:"",
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
		descriptionHide() {
			console.log('description')
			if (this.payload.description.length) {
				console.log('description1', this.payload.description.length)
				this.errorMessages.description = ''
			}
		},
	},
	mounted() {
		this.$nextTick(async () => {
			await Promise.all([])
		})
	},
}
</script>

<style scoped>
.sticky-header {
	top: 0;
	z-index: 100;
	position: sticky;
}
</style>
