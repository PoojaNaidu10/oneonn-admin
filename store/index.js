import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
	user: '',
	snackbar: {
		msg: '',
		color: '',
		state: false,
	},
	seller_edit: {},
	brand_edit: {},
	product_edit: {},
	category_edit: {},
	checkout_edit: {},
	subcategory_edit: {},
	hsn_edit: {},
	healthconcern_edit: {},
	tag_edit: {},
	doctororder_edit: {},
	selected_tab: '',
	review: [],
})

export const getters = {
	getField,
}

export const mutations = {
	updateField,
	UPDATE_SNACKBAR(state, payload) {
		state.snackbar = payload
	},
	UPDATE_SIDEBAR(state, payload) {
		state.selected_tab = payload
	},
}

export const actions = {
	async ActivateSnackBar({ commit, dispatch }, payload) {
		await commit('UPDATE_SNACKBAR', payload)
	},
	async UpdateSideBar({ commit, dispatch }, payload) {
		await commit('UPDATE_SIDEBAR', payload)
	},
}
