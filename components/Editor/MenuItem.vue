<template>
	<button
		:title="title"
		@click="action"
		class="menu-item"
		:class="{ 'is-active': isActive ? isActive() : null }"
	>
		<svg class="remix">
			<use :xlink:href="require('@/assets/icons/remixicon.symbol.svg') + `#ri-${icon}`" />
		</svg>
	</button>
</template>

<script>
export default {
	props: {
		icon: { type: String, required: true },
		title: { type: String, required: true },
		action: { type: Function, required: true },
		isActive: { type: Function, default: null },
	},
}
</script>

<style scoped>
.menu-item {
	border: none;
	color: #000;
	width: 1.75rem;
	cursor: pointer;
	height: 1.75rem;
	padding: 0.25rem;
	border-radius: 0.4rem;
	margin-right: 0.25rem;
	background: transparent;
}
.menu-item svg {
	width: 100%;
	height: 100%;
	fill: currentColor;
}
.menu-item.is-active,
.menu-item:hover {
	background-color: #efefef;
}
</style>
