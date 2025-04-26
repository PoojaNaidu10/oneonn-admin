<template>
	<div>
		<v-file-input
			ref="file"
			hide-input
			:key="render"
			prepend-icon=""
			:accept="filetype"
			:multiple="multiple"
			@change="HandleFileUpload"
		>
			<template v-slot:append-outer>
				<div class="d-flex flex-column">
					<!-- Upload Button -->
					<v-btn
						outlined
						color="blue"
						class="px-6 mb-2"
						:loading="isLoading"
						@click="OpenFileBrowser"
						:rounded="rounded_button_style"
					>
						<v-icon small class="mr-1">mdi-text-box-outline</v-icon>
						{{ button_text }}
					</v-btn>

					<!-- Hint Section -->
					<div class="v-text-field__details" v-if="!no_hint">
						<div class="v-messages theme--light">
							<div class="v-messages__wrapper">
								<div class="v-messages__message" v-if="image_height && image_width">
									Recommended {{ image_height }} * {{ image_width }}
								</div>
								<div class="v-messages__message" v-if="image_size">
									Recommended size &lt;= {{ image_size }} MB
									
								</div>
								<div class="v-messages__message">Accepted file format: {{ filetype }}</div>
							</div>
						</div>
					</div>

					<!-- Error Section -->
					<div
						role="alert"
						v-if="imageIssues || errorMessage"
						class="v-messages theme--light error--text"
					>
						<div class="v-messages__wrapper">
							<div class="v-messages__message" v-if="imageIssues">{{ imageIssues }}</div>
							<div class="v-messages__message" v-if="errorMessage">{{ errorMessage }}</div>
						</div>
					</div>
				</div>
			</template>
		</v-file-input>

		<!-- Section to show uploaded images -->
		<div v-if="!no_preview && (value || value?.length)">
			<div class="d-flex flex-wrap my-3 ml-3" v-if="typeof value == 'object'">
				<v-badge
					avatar
					overlap
					bordered
					:key="index"
					color="error"
					icon="mdi-close"
					class="mr-3"
					v-for="(item, index) in value"
					@click.native="RemoveImage(index)"
				>
					<v-avatar tile size="50" class="rounded">
						<v-img :src="item" />
					</v-avatar>
				</v-badge>
			</div>

			<div class="d-flex flex-wrap my-3 ml-3" v-else-if="typeof value == 'string'">
				<v-badge icon="mdi-close" bordered overlap color="error" @click.native="RemoveImage">
					<v-avatar tile size="50" class="rounded">
						<v-img :src="value" />
					</v-avatar>
				</v-badge>
			</div>
		</div>
	</div>
</template>

<script>
import { cloneDeep, map } from 'lodash'

export default {
	data: () => ({
		imageIssues: '',
		not_image: false,

		isLoading: false,
		render: Date.now() + Math.floor(Math.random() * 10000 + 1),
	}),
	props: {
		image_width: { type: Number },
		image_height: { type: Number },
		errorMessage: { type: String },
		value: { type: Array | String },
		image_size: { type: Number, default: 5 },
		not_image: { type: Boolean, default: false },
		no_hint: { type: Boolean, default: false },
		multiple: { type: Boolean, default: false },
		UploadAPI: { type: Function, required: true },
		no_preview: { type: Boolean, default: false },
		button_text: { type: String, default: 'Upload image' },
		rounded_button_style: { type: Boolean, default: false },
		filetype: { type: String | Array, default: 'image' },
	},
	methods: {
		async HandleFileUpload(files) {
			this.isLoading = true
			if (this.multiple) {
				// Create a list of promises based on all the files uploaded
		
				let uploadPromises = map(files, async (file) => {
					if ((await this.ValidateImageDimensions(file)) && (await this.ValidateImageSize(file))) {
						let formData = new FormData()
						formData.append('file', file, file.name)
						try {
							const response = await this.UploadAPI(formData)
							console.log('response nimage,', response)
							return response.data.payload.imageUrl
						} catch (err) {
							console.log(err)
							// Return null has to be there otherwise need to handle undefined condition
							return null
						}
					}
					// Return null has to be there otherwise need to handle undefined condition
					return null
				})
				// Await all the files together
				let upload_urls = await Promise.all(uploadPromises)
				upload_urls = upload_urls.filter((url) => url !== null)
				// Emits all the images including the existing images in the v-model to the parent
				if (this.value) {
					this.$emit('input', [...this.value, ...upload_urls])
					this.$emit('change')
				} else {
					this.$emit('input', upload_urls)
					this.$emit('change')
				}
			} else {
				console.log("else conditon")
				if (files) {
					console.log("if files else")
					if ((await this.ValidateImageDimensions(files)) && (await this.ValidateImageSize(files))) {
						console.log("if inside funtion")
						let formData = new FormData()
						console.log("if inside funtion11")

						formData.append('file', files, files.name)
						console.log("if inside funtion 22", files.name)

						try {
							const response = await this.UploadAPI(formData)
							console.log("if inside funtion 33" )

							for (let key in response.data.payload) {
								console.log("if inside funtion 44", response.data.payload  )

								if (response.data.payload[key].length != 0 && key != 'message') {
									console.log("if inside funtion 44", response.data.payload[key].length  )

									this.$emit('error', response.data.payload)
									console.log("if inside funtion 55", response.data.payload  )

									break
								}
							}

							this.$emit('input', response.data.payload)
							console.log("payload path", response.data.payload)
							this.$emit('change')
						} catch (err) {
							console.log(err)
						}
					}
				}
			}
			this.isLoading = false
			this.render = Date.now() + Math.floor(Math.random() * 10000 + 1)
		},
		ValidateImageDimensions(File) {
			return new Promise((resolve, reject) => {
				if (this.not_image) {
					resolve(true)
				}
				const reader = new FileReader()
				reader.onload = (file) => {
					const img = new Image()
					img.onload = () => {
						if (img.width > this.image_width || img.height > this.image_height) {
							this.imageIssues = `${File.name}: Provided image dimension ${img.height} * ${img.width} are incorrect`
							resolve(false)
						} else {
							this.imageIssues = ''
							resolve(true)
						}
					}
					img.src = file.target.result
				}
				reader.readAsDataURL(File)
			})
		},
		ValidateImageSize(File) {
			return new Promise((resolve, reject) => {
				if (this.not_image) {
					resolve(true)
				}
				const reader = new FileReader()
				reader.onload = (file) => {
					const img = new Image()
					img.onload = () => {
						const image_size = 1024 * 1024 * this.image_size
						const fileSize = File.size
if (fileSize > image_size) {
  this.imageIssues = `${File.name}: Image size exceeds the maximum allowed size of ${this.image_size} MB`;
  resolve(false);
} else {
  resolve(true);
}

						if (fileSize > image_size) {
							this.imageIssues = `${File.name}: Image size exceeds the maximum allowed size of ${this.image_size} MB`
							resolve(false)
						} else {
							resolve(true)
						}
					}
					img.src = file.target.result
				}
				reader.readAsDataURL(File)
			})
		},
		OpenFileBrowser() {
			this.$refs.file.$el.querySelector('input').click()
		},
		RemoveImage(index) {
			if (this.multiple) {
				let input_data = cloneDeep(this.value)
				input_data.splice(index, 1)
				this.$emit('input', input_data)
				this.$refs.file.reset()
			} else {
				this.$emit('input', null)
				this.$refs.file.reset()
			}
			this.$emit('change')
			this.render = Date.now() + Math.floor(Math.random() * 30000 + 1)
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped></style>
