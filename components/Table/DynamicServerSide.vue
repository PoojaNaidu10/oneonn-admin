<template>
	<div>
		<v-card elevation="0">
			<v-card-title class="px-0 mb-4">
				<v-text-field
					outlined
					clearable
					single-line
					hide-details
					v-model="search"
					placeholder="Search"
					prepend-inner-icon="mdi-magnify"
				/>
			</v-card-title>

			<v-data-table
				:items="items"
				item-key="index"
				:search="search"
				calculate-widths
				:headers="header"
				:loading="loading"
				v-model="selected"
				class="elevation-1"
				:page="onSearchPage"
				@pagination="ChangePage"
				:items-per-page="pageLimit"
				:footer-props="footer_props"
				:show-select="show_selection"
				:server-items-length="items_length"
			>
				<template v-for="(construct, index) in image_construct" v-slot:[`item.${construct}`]="{ item }">
					<div class="py-2 text-center d-flex align-center justify-center" :key="index">
						<v-img
							contain
							width="100px"
							height="100px"
							alt="Product Image"
							:src="item[construct]"
							v-if="image_construct_size[index] == 'square'"
						/>
						<v-img
							contain
							width="80px"
							height="80px"
							alt="Product Image"
							:src="item[construct]"
							v-if="image_construct_size[index] == 'round-circle'"
						/>
						<v-img
							width="400px"
							height="250px"
							alt="Product Image"
							:src="item[construct]"
							v-if="image_construct_size[index] == 'banner'"
						/>

						<v-carousel
							cycle
							continuous
							interval="2000"
							hide-delimiters
							show-arrows-on-hover
							:width="carousel_width"
							:height="carousel_height"
							hide-delimiter-background
							:show-arrows="item[construct].length > 1"
							v-if="image_construct_size[index] == 'carousel'"
						>
							<v-carousel-item :key="index" v-for="(carousel_item, index) in item[construct]">
								<div @click="OpenVideo(carousel_item)" v-if="carousel_item.endsWith('.mp4')">
									<video class="video-style" controls :src="carousel_item" type=video/mp4
									autoplay muted />
								</div>
								<v-img
									v-else
									contain
									alt="Product Image"
									:src="carousel_item"
									:width="carousel_width"
									:height="carousel_height"
									@click="OpenVideo(carousel_item)"
								/>
							</v-carousel-item>
						</v-carousel>
					</div>
				</template>

				<template v-for="(tagstruct, index) in tag_construct" v-slot:[`item.${tagstruct}`]="{ item }">
					<div
						class="d-flex justify-center align-center"
						v-if="Array.isArray(item[tagstruct])"
						:key="index"
					>
						<v-chip
							small
							dark
							class="mr-2"
							:key="tag_index"
							:color="tag.color"
							v-for="(tag, tag_index) in item[tagstruct]"
						>
							{{ tag.title }}
						</v-chip>
					</div>

					<v-chip small :color="item[tagstruct].color" dark :key="`E-${index}`" v-else>
						{{ item[tagstruct].title }}
					</v-chip>
				</template>

				<template v-slot:[`item.link`]="{ item }">
					<div class="d-flex justify-center" v-if="action_toggle">
						<v-switch
							dense
							color="design"
							@click="$emit('edit', item)"
							v-model="item.cash_on_delivery"
						/>
					</div>

					<div class="d-flex justify-center">
						<v-btn
							icon
							color="blue"
							v-if="action_view"
							@click="MoveToNewPage(item.link)"
							class="font-caption text-capitalize"
						>
							<v-icon small class="mr-1" title="View Data">mdi-eye</v-icon>
						</v-btn>

						<v-btn
							icon
							color="blue"
							v-if="action_edit"
							@click="$emit('edit', item)"
							class="font-caption text-capitalize"
						>
							<v-icon small class="mr-1" title="Edit Data">mdi-pencil</v-icon>
						</v-btn>

						<v-btn
							icon
							color="red"
							@click="ConfirmCancel(item)"
							class="font-caption text-capitalize"
							v-if="action_cancel && item.isShowCancel"
						>
							<v-icon small class="mr-1" title="Cancel Order">mdi-close-thick</v-icon>
						</v-btn>

						<v-btn
							text
							color="blue"
							class="font-caption text-capitalize"
							v-if="action_accept && item.isShowToSeller && item.isShowCancel"
							@click="ConfirmAccept(Object.keys(item).includes('_id') ? item._id : item)"
						>
							<div>Accept</div>
						</v-btn>

						<div v-if="button_construct.length">
							<v-btn
								text
								:key="index"
								color="blue"
								class="font-caption text-capitalize"
								v-for="(button, index) in button_construct"
								@click="MoveToNewPage(item[item[button].link])"
							>
								<v-icon small class="mr-1">
									{{ item[button].icon }}
								</v-icon>
								{{ item[button].title }}
							</v-btn>
						</div>
					</div>

					<!-- 
						Handling the delete condition where the id is not present 
						in that case sending back the whole object
					-->
					<v-btn
						icon
						color="blue"
						v-if="action_delete"
						class="font-caption text-capitalize"
						@click="ConfirmDelete(Object.keys(item).includes('_id') ? item._id : item)"
					>
						<v-icon small class="mr-1" title="Delete Data" color="red">mdi-delete</v-icon>
					</v-btn>
				</template>
			</v-data-table>
		</v-card>

		<v-dialog persistent v-model="deleteDialog" width="450">
			<DialogDelete @delete="SendDeleteEvent" @close="deleteDialog = false" />
		</v-dialog>
		<v-dialog persistent v-model="acceptDialog" width="450">
			<DialogAccept @accept="SendAcceptEvent" @close="acceptDialog = false" />
		</v-dialog>
		<v-dialog persistent v-model="cancelDialog" width="450">
			<DialogCancel @cancel="SendCancelEvent" @close="cancelDialog = false" :order="itemToCancel" />
		</v-dialog>

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
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [],
		search: '',
		selected: [],
		zoom_item: '',
		pageLimit: 10,
		onSearchPage: 1,
		currentPage: {},
		itemToCancel: {},
		itemToDelete: '',
		itemToAccept: '',
		zoomDialog: false,
		isContinuous: true,
		cancelDialog: false,
		deleteDialog: false,
		acceptDialog: false,
	}),
	props: {
		loading: { type: Boolean, default: false },
		action_view: { type: Boolean, default: false },
		action_edit: { type: Boolean, default: false },
		action_cancel: { type: Boolean, default: false },
		action_accept: { type: Boolean, default: false },
		tag_construct: { type: Array, default: Array },
		/*
		tag_construct columns need to be an array with object having structure 
		{title: '', color: ''}
		*/
		footer_props: { type: Object, default: Object },
		action_delete: { type: Boolean, default: false },
		action_toggle: { type: Boolean, default: false },
		image_construct: { type: Array, default: Array },
		show_selection: { type: Boolean, default: false },
		/*
		button_construct columns need to be an array with object having structure 
		{title: '', link: '', icon: ''}
		 */
		button_construct: { type: Array, default: Array },
		carousel_width: { type: String, default: '300px' },
		carousel_height: { type: String, default: '150px' },
		image_construct_size: { type: Array, default: Array },
		header: { type: Array, required: true, default: Array },
		// Function that is used to fetch data
		fetch_data: { type: Function, required: true },
		items_length: { type: Number, default: 2000 },
	},
	watch: {
		async search(value) {
			this.onSearchPage = 0
			this.items = await this.fetch_data(value)
			const prev_page = localStorage.getItem('page-history')
			if (prev_page != null) {
				const prev_history = JSON.parse(prev_page)
				this.onSearchPage = this.items.length < prev_history.itemsPerPage ? 1 : prev_history.page
			} else {
				this.onSearchPage = 1
			}
		},
		selected: {
			handler(newVal, oldVal) {
				this.$emit('input', newVal)
			},
			deep: true,
		},
	},
	methods: {
		OpenVideo(item) {
			this.zoomDialog = true
			this.isContinuous = false
			this.zoom_item = item
		},
		CloseVideo() {
			this.zoomDialog = false
			this.isContinuous = true
			this.zoom_item = ''
		},
		MoveToNewPage(Link) {
			localStorage.setItem(
				'page-history',
				JSON.stringify({
					URL: this.$route.path,
					search: this.search || '',
					page: this.currentPage.page,
					itemsPerPage: this.currentPage.itemsPerPage,
				}),
			)
			this.$router.push(Link)
		},
		async ChangePage(pagination) {
			this.currentPage = pagination
			this.items = await this.fetch_data(this.search, pagination)
		},
		ConfirmCancel(item) {
			this.itemToCancel = item
			this.cancelDialog = true
		},
		ConfirmDelete(item_id) {
			this.itemToDelete = item_id
			this.deleteDialog = true
		},
		ConfirmAccept(item_id) {
			this.itemToAccept = item_id
			this.acceptDialog = true
		},
		SendAcceptEvent() {
			this.$emit('accept', this.itemToAccept)
			this.acceptDialog = false
		},
		SendDeleteEvent() {
			this.$emit('delete', this.itemToDelete)
			this.deleteDialog = false
		},
		SendCancelEvent() {
			this.$emit('cancel', this.itemToCancel)
			this.cancelDialog = false
		},
	},
	async mounted() {
		const prev_page = localStorage.getItem('page-history')
		if (prev_page != null) {
			const prev_history = JSON.parse(prev_page)
			if (prev_history.URL == this.$route.path) {
				this.search = prev_history.search
				this.onSearchPage = prev_history.page
				this.pageLimit = prev_history.itemsPerPage
			}
		}
	},
}
</script>

<style scoped>
.video-style {
	width: 100%;
	height: 150px;
}
.full-video-style {
	width: 70vw;
	height: 70vh;
}
</style>
