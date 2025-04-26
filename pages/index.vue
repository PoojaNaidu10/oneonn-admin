<template>
	<v-sheet class="margin-high mx-auto rounded-lg fixed-width overflow-hidden w-50" elevation="4">
		<v-row>
			<!-- <v-col class="pa-0 overflow-hidden">
				<img src="@/assets/hero.jpg" alt="Hero" width="100%" />
			</v-col> -->
			<v-divider vertical />
			<v-col>
				<FormDefaultLogin />
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({}),
	layout: 'login',
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.margin-high {
	margin-top: 100px;
}
.fixed-width {
	width: 70%;
	margin: auto;
}

.col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
	box-shadow: none;
	border: none;
}
.w-50{
	width: 40% !important;
}
</style>
