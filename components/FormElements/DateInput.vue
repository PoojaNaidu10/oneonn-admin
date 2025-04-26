<template>
	<v-menu
		offset-y
		v-model="menu"
		min-width="280"
		:nudge-top="nudge_top"
		:nudge-left="nudge_left"
		:nudge-right="nudge_right"
		:nudge-bottom="nudge_bottom"
		transition="scale-transition"
		:close-on-content-click="false"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-text-field
				outlined
				readonly
				v-on="on"
				:label="label"
				:dense="small"
				v-bind="attrs"
				v-model="date"
				placeholder="Select Date"
			/>
		</template>
		<v-date-picker
			v-model="date"
			:max="end_date"
			:min="start_date"
			@change="DateChange"
			@input="menu = false"
			:allowed-dates="allowed_dates"
		/>
	</v-menu>
</template>

<script>
export default {
	data: () => ({
		date: '',
		menu: false,
	}),
	props: {
		small: { type: Boolean, default: false },
		allowed_dates: { type: Function },
		value: { type: String, default: '' },
		label: { type: String, default: '' },
		end_date: { type: String, default: '' },
		start_date: { type: String, default: '' },
		nudge_left: { type: String, default: '0' },
		nudge_right: { type: String, default: '0' },
		nudge_top: { type: String, default: '0' },
		nudge_bottom: { type: String, default: '0' },
		disabled_dates: { type: Array, default: Array },
	},
	watch: {
		value(val) {
			if (!this.date) {
				this.date = val
			}
		},
	},
	methods: {
		DateChange(event) {
			this.$emit('input', event)
			this.$emit('change')
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.date = this.value
		})
	},
}
</script>

<style scoped></style>
