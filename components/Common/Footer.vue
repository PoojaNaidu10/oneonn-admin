<template>
	<v-footer :app="login" color="design2" class="py-3" :class="{ 'ml-16': !login }">
		<v-spacer class="flex-grow-0 flex-md-grow-1" />
		<div class="d-flex white--text text-caption">Oneonnn Admin Version: {{ $config.clientVersion }}</div>
	</v-footer>
</template>

<script>
export default {
	data: () => ({}),
	props: { login: { type: Boolean, default: false } },
}
</script>

<style></style>
