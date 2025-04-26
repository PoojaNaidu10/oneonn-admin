<template>
	<v-card class="pa-4">
		<v-row class="justify-end">
			<v-col cols="2" class="text-right">
				<v-btn icon @click="$emit('close')">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-col>
		</v-row>

		<v-card-text>
			<v-row>
				<v-col cols="12" class="text-center">
					<img src="@/assets/icons/accept_icon.png" width="80" alt="" />
				</v-col>
				<v-col class="text-center">
					<div class="text-h5">Do you want to send this to the seller for processing?</div>
				</v-col>
			</v-row>
		</v-card-text>

		<v-card-actions>
			<div class="mx-auto mt-3">
				<v-btn class="mr-2" color="gray" @click="$emit('close')"> Cancel </v-btn>
				<v-btn class="mr-2 white--text" color="design" @click="$emit('accept')"> Accept </v-btn>
			</div>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data: () => ({}),
	methods: {},
}
</script>
