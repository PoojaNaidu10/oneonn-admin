<template>
	<div class="text-center">
		<v-card>
			<div v-for="url in itemUrl" :key="url">
				<v-img :src="url" alt="" width="400px" height="400px" />
			</div>
		</v-card>
	</div>
</template>
<script>
export default {
	data: () => ({
		// dialog: false,
		// selectedItem: {},
	}),
	props: ['items', 'itemUrl'],
	methods: {
		async cancel(value) {
			this.$emit('CloseDialog', value)
			this.dialog = false
		},
	},
}
</script>
<style scoped>
.image-size {
	width: 50px;
	height: 50px;
}
.text-center {
	text-align: center;
}
.justify {
	justify-content: center;
}
.close-btn {
	text-align: right;
}
.pt-1 {
	display: flex;
	justify-content: center;
}
</style>
