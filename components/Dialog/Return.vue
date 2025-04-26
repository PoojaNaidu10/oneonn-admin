<template>
	<v-card class="pa-4">
		<v-row>
			<v-col class="text-center">
				<span class="text-h5">Verify Return Information</span>
			</v-col>
			<v-col cols="2" class="text-right">
				<v-btn icon @click="CloseForm">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-col>
		</v-row>

		<v-card-text>
			<v-row>
				<v-col cols="6">
					<label>Reason</label>
					<div class="text-subtitle-1 font-weight-medium">{{ content.return.reason }}</div>
				</v-col>

				<v-col cols="6">
					<label>Status</label>
					<div class="text-subtitle-1 font-weight-medium">{{ content.return.status }}</div>
				</v-col>

				<v-col cols="12">
					<label>Images and Videos</label>

					<div class="d-flex flex-wrap">
						<div class="d-flex flex-column mr-2" v-if="content.return.bill_photo_filepath">
							<label>Bill Images</label>
							<img
								width="100px"
								height="100px"
								class="rounded-lg"
								:src="content.return.bill_photo_filepath"
								@click="OpenVideo(content.return.bill_photo_filepath)"
							/>
						</div>

						<div class="d-flex flex-column mr-2" v-if="content.return.package_photo_filepath">
							<label>Package Images</label>
							<img
								width="100px"
								height="100px"
								class="rounded-lg"
								:src="content.return.package_photo_filepath"
								@click="OpenVideo(content.return.package_photo_filepath)"
							/>
						</div>

						<div class="d-flex flex-column mr-2" v-if="content.return.product_photo_filepath">
							<label>Product Images</label>
							<img
								width="100px"
								height="100px"
								class="rounded-lg"
								:src="content.return.product_photo_filepath"
								@click="OpenVideo(content.return.product_photo_filepath)"
							/>
						</div>
					</div>

					<div class="d-flex flex-column" v-if="content.return.other_filepath_list.length">
						<label>Other Images</label>
						<div class="d-flex flex-wrap">
							<div
								class="mr-2"
								:key="index"
								v-for="(ticket_file, index) in content.return.other_filepath_list"
							>
								<div v-if="ticket_file.endsWith('.mp4')">
									<video class="video-style rounded-lg" :src="ticket_file" type=video/mp4
									autoplay muted @click="OpenVideo(ticket_file)"/>
								</div>
								<img
									v-else
									width="100px"
									height="100px"
									:src="ticket_file"
									class="rounded-lg"
									@click="OpenVideo(ticket_file)"
								/>
							</div>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-card-text>

		<v-card-actions>
			<div class="mx-auto mt-3">
				<v-btn class="mr-2 white--text" color="grey" @click="CloseForm"> Cancel </v-btn>
				<v-btn
					class="mr-2 white--text"
					color="green"
					@click="
						$emit('update', 'APPROVE')
						CloseForm
					"
				>
					Approve
				</v-btn>
				<v-btn
					class="mr-2 white--text"
					color="red"
					@click="
						$emit('update', 'REJECT')
						CloseForm
					"
				>
					Reject
				</v-btn>
			</div>
		</v-card-actions>

		<!-- Only for slider pop out and show the content in larger size -->
		<v-overlay v-model="zoomDialog">
			<div>
				<div class="text-right">
					<v-btn fab color="white" @click="CloseVideo">
						<v-icon color="grey">mdi-close</v-icon>
					</v-btn>
				</div>
				<div v-if="zoom_item.endsWith('.mp4')">
					<video class="full-video-style" :src="zoom_item" type=video/mp4 controls autoplay muted />
				</div>
				<v-img v-else contain width="70vw" height="70vh" :src="zoom_item" alt="Product Image" />
			</div>
		</v-overlay>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		zoom_item: '',
		zoomDialog: false,
	}),
	props: {
		content: { type: Object },
	},
	methods: {
		OpenVideo(item) {
			this.zoomDialog = true
			this.zoom_item = item
		},
		CloseVideo() {
			this.zoomDialog = false
			this.zoom_item = ''
		},
		CloseForm() {
			this.$emit('close')
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.video-style {
	width: 100%;
	height: 100px;
}
.full-video-style {
	width: 70vw;
	height: 70vh;
}
</style>
