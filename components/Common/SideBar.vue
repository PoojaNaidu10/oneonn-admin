<template>
	<v-navigation-drawer dark clipped fixed app class="elevation-0" color="design2">
		<v-list dense nav>
			<div v-for="(items, index) in nav_items" :key="index">
				<!-- Nav Bar Item submenu of submenu STARTS HERE-->
				<v-list-group v-if="items.isSubSubMenu" v-model="items.isOpen" active-class="white--text">
					<template v-slot:activator>
						<v-list-item-icon>
							<v-icon>{{ items.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ items.title }}</v-list-item-title>
						</v-list-item-content>
					</template>

					<div v-for="(item, index2) in items.submenu" :key="index2" class="ml-2">
						<v-list-group
							sub-group
							class="ml-n2"
							v-if="item.isSubMenu"
							:prepend-icon="item.icon"
							active-class="white--text"
						>
							<template v-slot:activator>
								<v-list-item-content class="pl-4">
									<v-list-item-title>{{ item.title }}</v-list-item-title>
								</v-list-item-content>

								<v-list-item-icon>
									<v-icon>mdi-chevron-down</v-icon>
								</v-list-item-icon>
							</template>

							<v-list-item
								link
								dense
								exact-path
								:key="index3"
								:to="sub.link"
								active-class="white--text"
								@click="OnPageChange(sub.link)"
								v-for="(sub, index3) in item.submenu"
							>
								<v-list-item-icon>
									<v-icon>{{ sub.icon }}</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>{{ sub.title }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list-group>

						<v-list-item
							link
							v-else
							exact-path
							class="pl-4"
							:to="item.link"
							active-class="white--text"
							@click="OnPageChange(item.link)"
						>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>

						<v-divider v-if="item.divider" />
					</div>
				</v-list-group>
				<!-- Nav Bar Item submenu of submenu ENDS HERE-->

				<!-- Nav Bar Item just submenu STARTS HERE-->
				<v-list-group v-else-if="items.isSubMenu" v-model="items.isOpen" active-class="white--text">
					<template v-slot:activator>
						<v-list-item-icon>
							<v-icon>{{ items.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ items.title }}</v-list-item-title>
						</v-list-item-content>
					</template>

					<v-list-item
						link
						exact-path
						class="pl-6"
						:key="index2"
						:to="item.link"
						active-class="white--text"
						@click="OnPageChange(item.link)"
						v-for="(item, index2) in items.submenu"
					>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
				<!-- Nav Bar Item just submenu ENDS HERE-->

				<!-- Nav Bar Item without any submenu -->
				<v-list-item exact-path link :to="items.link" dense @click="OnPageChange(items.link)" v-else>
					<v-list-item-icon>
						<v-icon>{{ items.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ items.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</div>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { map, filter, compact } from 'lodash'
import { mapFields } from 'vuex-map-fields'

export default {
	data: () => ({
		nav_items: [
			// {
			// 	link: '/dashboard',
			// 	title: 'Dashboard',
			// 	subadmin: 'OPERATION',
			// 	icon: 'mdi-view-dashboard',
			// },
			// {
			// 	link: '/subadmin',
			// 	icon: 'mdi-security',
			// 	title: 'Subadmin Management',
			// },
			// {
			// 		link: '/setting',
			// 		isSubMenu: true,
			// 		title: 'Setting',
			// 		subadmin: 'MARKETING',
			// 		icon: 'mdi-cog-outline',
			// 		submenu: [
			// 			{ link: '/setting/cod', title: 'COD', icon: 'mdi-truck-delivery', subadmin: 'MARKETING' },
			// 			{
			// 				link: '/setting/shipping',
			// 				title: 'Shipping Charges',
			// 				icon: 'mdi-truck',
			// 				subadmin: 'MARKETING',
			// 			},
			// 			{
			// 				link: '/setting/prepaid-discount',
			// 				title: 'Prepaid Discount',
			// 				icon: 'mdi-percent-circle',
			// 				subadmin: 'MARKETING',
			// 			},
			// 		],
			// 	},
			 {
				link: '/product',
				title: 'Product',
				icon: 'mdi-package-variant',
			},
			{
				link: '/blog',
				title: 'Blog',
				icon: 'mdi-package-variant',
			},
			{
				title: 'Banner List',
				icon: 'mdi-folder-home',
				link: '/banner_list',
			},

			// {
			// 	link: '',
			// 	isOpen: true,
			// 	icon: 'mdi-store',
			// 	isSubSubMenu: true,
			// 	title: 'Patient Shop',
			// 	submenu: [
			// 		{
			// 			isSubMenu: true,
			// 			title: 'Product Management',
			// 			subadmin: 'BRAND',
			// 			link: '/patient/product',
			// 			icon: 'mdi-package-variant',
			// 			submenu: [
			// 				{ title: 'Product ', link: '/patient/product' },
			// 				{ title: 'HSN', link: '/patient/hsn' },
			// 				{ title: 'Category', link: '/patient/category' },
			// 				{ title: 'Subcategory', link: '/patient/subcategory' },
			// 				{ title: 'Health Concern ', link: '/patient/healthconcern' },
			// 				{ title: 'Tags', link: '/patient/tags' },
			// 			],
			// 		},
			// 		// {
			// 		// 	link: '/patient/brand',
			// 		// 	title: 'Brand',
			// 		// 	subadmin: 'BRAND',
			// 		// 	icon: 'mdi-flag-checkered',
			// 		// },
			// 		// {
			// 		// 	isSubMenu: true,
			// 		// 	title: 'Seller Management',
			// 		// 	subadmin: 'BRAND',
			// 		// 	link: '/patient/seller',
			// 		// 	icon: 'mdi-account-group-outline',
			// 		// 	submenu: [
			// 		// 		{ title: 'Seller ', link: '/patient/seller' },
			// 		// 		{ title: 'Product History', link: '/patient/seller/history' },
			// 		// 	],
			// 		// },

			// 		// {
			// 		// 	title: 'Wishlist',
			// 		// 	icon: 'mdi-cart-heart',
			// 		// 	link: '/patient/wishlist',
			// 		// },
			// 		// {
			// 		// 	title: 'Cart',
			// 		// 	link: '/patient/cart',
			// 		// 	icon: 'mdi-cart-plus',
			// 		// },
			// 		// {
			// 		// 	title: 'Coupon',
			// 		// 	subadmin: 'MARKETING',
			// 		// 	link: '/patient/coupon',
			// 		// 	icon: 'mdi-ticket-percent',
			// 		// },
			// 		// {
			// 		// 	title: 'Checkout',
			// 		// 	link: '/patient/checkout',
			// 		// 	icon: 'mdi-basket-check-outline',
			// 		// },
			// 		// {
			// 		// 	link: '',
			// 		// 	title: 'Order',
			// 		// 	isSubMenu: true,
			// 		// 	subadmin: 'OPERATION',
			// 		// 	icon: 'mdi-store-edit-outline',
			// 		// 	submenu: [
			// 		// 		{ title: 'Active Orders', link: '/patient/order' },
			// 		// 		{ title: 'Returns', link: '/patient/order/return' },
			// 		// 	],
			// 		// },
			// 		// {
			// 		// 	title: 'Tickets',
			// 		// 	subadmin: 'OPERATION',
			// 		// 	link: '/patient/ticket',
			// 		// 	icon: 'mdi-ticket-confirmation',
			// 		// },
			// 		// {
			// 		// 	subadmin: 'UPLOADER',
			// 		// 	title: 'Upload Image',
			// 		// 	icon: 'mdi-cloud-upload',
			// 		// 	link: '/patient/uploadimage',
			// 		// },
			// 		{
			// 			link: '',
			// 			isSubMenu: true,
			// 			title: 'Homescreen',
			// 			subadmin: 'MARKETING',
			// 			icon: 'mdi-folder-home',
			// 			submenu: [
			// 				{ title: 'Banner List', link: '/patient/homescreen/banner_list' },
			// 				// { title: 'Discount Banner', link: '/patient/homescreen/discount_banner' },
			// 				// { title: 'Consult by Therapy', link: '/patient/homescreen/consult_by_therapy' },
			// 				// { title: 'Limited Time Deal', link: '/patient/homescreen/limited_time_deal' },
			// 				// { title: 'Shop by Concern', link: '/patient/homescreen/shop_by_concern' },
			// 				// { title: 'Top Brands', link: '/patient/homescreen/top_brands' },
			// 				// { title: 'Trending', link: '/patient/homescreen/trending' },
			// 				// { title: 'Brands', link: '/patient/homescreen/brands' },
			// 				// { title: 'Lab Test List', link: '/patient/homescreen/lab_test_list' },
			// 				// { title: 'Top Deal Brand List', link: '/patient/homescreen/top_deal_brand_list' },
			// 				// { title: 'Fitbook Image', link: '/patient/homescreen/fitbook_image' },
			// 				// { title: 'Article List', link: '/patient/homescreen/article_list' },
			// 				// { title: 'Advertise Image', link: '/patient/homescreen/advertise_image' },
			// 				// { title: 'Top Practitioner', link: '/patient/homescreen/top_Practitioner' },
			// 			],
			// 		},
			// 	],
			// },
			// {
			// 	link: '',
			// 	isSubSubMenu: true,
			// 	icon: 'mdi-doctor',
			// 	subadmin: 'DOCTOR',
			// 	title: 'Doctor Shop',
			// 	submenu: [
			// 		{ icon: 'mdi-flag-checkered', title: 'Brand', link: '/doctor/brand', subadmin: 'DOCTOR' },
			// 		{
			// 			icon: 'mdi-account-group-outline',
			// 			title: 'Seller',
			// 			link: '/doctor/seller',
			// 			subadmin: 'DOCTOR',
			// 		},
			// 		{ icon: 'mdi-package-variant', title: 'Product', link: '/doctor/product', subadmin: 'DOCTOR' },
			// 		{ icon: 'mdi-ticket-percent', title: 'Coupon', link: '/doctor/coupon', subadmin: 'DOCTOR' },
			// 		{ icon: 'mdi-store-edit-outline', title: 'Order', link: '/doctor/order', subadmin: 'DOCTOR' },
			// 		{
			// 			subadmin: 'UPLOADER',
			// 			title: 'Upload Image',
			// 			icon: 'mdi-cloud-upload',
			// 			link: '/doctor/uploadimage',
			// 		},
			// 		{
			// 			icon: 'mdi-percent-circle',
			// 			title: 'Prepaid Discount',
			// 			link: '/doctor/prepaid-discount',
			// 			subadmin: 'DOCTOR',
			// 		},
			// 		{ icon: 'mdi-truck-delivery', title: 'COD', link: '/doctor/cod', subadmin: 'DOCTOR' },
			// 		{
			// 			icon: 'mdi-map-marker-multiple',
			// 			title: 'Add/Edit Pincode',
			// 			link: '/doctor/pincode',
			// 			subadmin: 'DOCTOR',
			// 		},
			// 		{
			// 			link: '',
			// 			isSubMenu: true,
			// 			title: 'Homescreen',
			// 			subadmin: 'DOCTOR',
			// 			icon: 'mdi-folder-home',
			// 			submenu: [
			// 				{ icon: 'mdi-flag-checkered', title: 'Banner', link: '/doctor/homescreen/banner' },
			// 			],
			// 		},
			// 	],
			// },
		],
	}),
	computed: { ...mapFields(['user']) },
	methods: {
		OnPageChange(Link) {
			localStorage.removeItem('page-history')
			this.$router.push(Link)
		},
		ModifyMenuBasedOnACL() {
			if (this.user.role === 'sub_admin' && this.user.privilage_list) {
				let first_item_counter = 0
				this.nav_items = filter(
					map(this.nav_items, (menuItems) => {
						if (
							menuItems.isSubSubMenu ||
							menuItems.isSubMenu ||
							this.user.privilage_list.includes(menuItems.subadmin)
						) {
							if (menuItems.isSubMenu || menuItems.isSubSubMenu) {
								menuItems.submenu = filter(menuItems.submenu, (subMenuItems) =>
									this.user.privilage_list.includes(subMenuItems.subadmin),
								)
							}
							if (
								(menuItems.isSubMenu || menuItems.isSubSubMenu) &&
								menuItems.submenu.length &&
								!first_item_counter
							) {
								first_item_counter = first_item_counter + 1
								menuItems.isOpen = true
							} else {
								menuItems.isOpen = false
							}
							return menuItems.submenu ? (menuItems.submenu.length ? menuItems : null) : menuItems
						}
						return null
					}),
				)
			}
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.ModifyMenuBasedOnACL()
		})
	},
}
</script>

<style scoped></style>
