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
					<v-icon size="64" color="red">mdi-package-variant-closed-remove</v-icon>
				</v-col>
				<v-col class="text-center">
					<div class="text-h5">Are you sure you want to cancel the order {{ order?.order_id }}?</div>
					<div class="text-subtitle">This is permanent and cannot be reversed</div>
				</v-col>
			</v-row>
		</v-card-text>

		<v-card-actions>
			<div class="mx-auto mt-3">
				<v-btn class="mr-2" color="gray" @click="$emit('close')"> Close </v-btn>
				<v-btn class="mr-2 white--text" color="red" @click="$emit('cancel')"> Cancel Order </v-btn>
			</div>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data: () => ({}),
	props: { order: { type: Object, required: true } },
}
</script>
