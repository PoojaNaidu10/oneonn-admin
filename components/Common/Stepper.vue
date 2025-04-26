<template>
	<div>
		<v-stepper
			alt-labels
			size="small"
			elevation="0"
			:value="currentStep"
			color="green darken-4"
			v-if="currentStep >= 1"
		>
			<v-stepper-header>
				<v-stepper-step step="1" :complete="currentStep > 1" color="green darken-4">
					Order Placed
				</v-stepper-step>
				<v-divider></v-divider>

				<v-stepper-step step="2" :complete="currentStep > 2" color="green darken-4">
					Dispatched
				</v-stepper-step>
				<v-divider></v-divider>

				<v-stepper-step step="3" :complete="currentStep > 3" color="green darken-4">
					Out for Pickup
				</v-stepper-step>
				<v-divider></v-divider>

				<v-stepper-step step="4" :complete="currentStep > 4" color="green darken-4">
					Pickedup
				</v-stepper-step>
				<v-divider></v-divider>

				<v-stepper-step step="5" :complete="currentStep > 5" color="green darken-4">
					Intransit
				</v-stepper-step>
				<v-divider></v-divider>

				<v-stepper-step step="6" :complete="currentStep > 6" color="green darken-4">
					Out for Delivery
				</v-stepper-step>
				<v-divider></v-divider>

				<v-stepper-step step="7" :complete="currentStep >= 7" color="green darken-4">
					Delivered
				</v-stepper-step>
			</v-stepper-header>
		</v-stepper>
		<div class="d-flex">
			<v-row class="mb-2 mt-4 mx-4" v-for="(items, index) in history" :key="index">
				<div v-if="items.status == 'ORDER_PLACED'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
				<div v-if="items.status == 'DISPATCHED'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
				<div v-if="items.status == 'OUT_FOR_PICKUP'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
				<div v-if="items.status == 'PICKEDUP'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
				<div v-if="items.status == 'INTRANSIT'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
				<div v-if="items.status == 'OUT_FOR_DELIVERY'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
				<div v-if="items.status == 'DELIVERED'" class="ft-small">
					{{ $dayjs(items.date).format('DD-MM-YYYY hh:mm a') }}
				</div>
			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	props: { currentStep: { type: Number, default: 1 }, history: { type: Array } },
}
</script>

<style scoped>
.ft-small {
	font-size: 13px;
}
</style>
