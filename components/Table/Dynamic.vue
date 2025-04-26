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
				:search="search"
				calculate-widths
				:headers="header"
				v-model="selected"
				:page="pageHistory"
				class="elevation-1"
				v-if="items.length"
				@pagination="ChangePage"
				:items-per-page="pageLimit"
				:footer-props="footer_props"
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
							interval="2000"
							hide-delimiters
							show-arrows-on-hover
							:cycle="isContinuous"
							:width="carousel_width"
							:height="carousel_height"
							:continuous="isContinuous"
							hide-delimiter-background
							:show-arrows="item[construct].length > 1"
							v-if="image_construct_size[index] == 'carousel'"
						>
							<v-carousel-item :key="index" v-for="(carousel_item, index) in item[construct]">
								<div @click="OpenVideo(carousel_item)" v-if="carousel_item.endsWith('.mp4')">
									<video class="video-style" :src="carousel_item" type=video/mp4 autoplay muted
									/>
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
					</div>
				</template>
			</v-data-table>
		</v-card>

		<v-dialog persistent v-model="deleteDialog" width="450">
			<DialogDelete @delete="SendDeleteEvent" @close="deleteDialog = false" />
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
		search: '',
		selected: [],
		zoom_item: '',
		pageLimit: 10,
		pageHistory: 1,
		currentPage: {},
		itemToDelete: '',
		zoomDialog: false,
		isContinuous: true,
		deleteDialog: false,
	}),
	props: {
		action_view: { type: Boolean, default: false },
		action_edit: { type: Boolean, default: false },
		tag_construct: { type: Array, default: Array },
		/*
		tag_construct columns need to be an array with object having structure 
		{title: '', color: ''}
		 */
		footer_props: { type: Object, default: Object },
		action_delete: { type: Boolean, default: false },
		action_toggle: { type: Boolean, default: false },
		image_construct: { type: Array, default: Array },
		/*
		button_construct columns need to be an array with object having structure 
		{title: '', link: '', icon: ''}
		 */
		button_construct: { type: Array, default: Array },
		carousel_width: { type: String, default: '300px' },
		carousel_height: { type: String, default: '150px' },
		image_construct_size: { type: Array, default: Array },
		items: { type: Array, required: true, default: Array },
		header: { type: Array, required: true, default: Array },
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
		ConfirmDelete(item_id) {
			this.itemToDelete = item_id
			this.deleteDialog = true
		},
		SendDeleteEvent() {
			this.$emit('delete', this.itemToDelete)
			this.deleteDialog = false
		},
		MoveToNewPage(Link) {
			// When moving to the next page upon clicking the view and all links related buttons that can be dynamically created
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
		ChangePage(pagination) {
			this.currentPage = pagination
		},
	},
	mounted() {
		// Loading the previous state of the table form the localstorage
		const prev_page = localStorage.getItem('page-history')
		if (prev_page != null) {
			const prev_history = JSON.parse(prev_page)
			if (prev_history.URL == this.$route.path) {
				// Setting the search, page, items per page back to the table
				this.search = prev_history.search
				this.pageHistory = prev_history.page
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
