<template>
	<v-card>
		<div class="text-right">
			<v-btn icon @click="Cancel">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</div>
		<v-simple-table>
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left">Image</th>
						<th class="text-left">URL</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="url in items">
						<td><img :src="url" alt="" class="image-size" /></td>
						<td class="f-12">{{ url }}</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
		<div class="text-center pa-4">
			<v-btn @click="Cancel" color="grey" class="white--text"> Okay </v-btn>
		</div>
	</v-card>
</template>
<script>
export default {
	data: () => ({}),
	props: ['items'],
	methods: {
		async Cancel() {
			this.$emit('CloseDialog')
		},
	},
}
</script>
<style>
.image-size {
	width: 50px;
	height: 50px;
}
.f-12 {
	font-size: 12px;
}
</style>
