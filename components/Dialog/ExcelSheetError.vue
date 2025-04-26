<template>
	<v-card>
		<v-toolbar dark flat>
			<v-toolbar-title>
				<v-icon color="red" large>mdi-alert-circle</v-icon> There is some problem in your data
			</v-toolbar-title>

			<v-spacer />

			<v-btn icon @click="$emit('close')">
				<v-icon>mdi-close</v-icon>
			</v-btn>

			<template v-slot:extension>
				<v-tabs v-model="tab" align-with-title>
					<v-tabs-slider color="yellow"></v-tabs-slider>
					<v-tab v-for="(IssueProduct, IssueName) in excelIssue" :key="IssueName">
						{{ IssueName }} ({{ IssueProduct?.length }})
					</v-tab>
				</v-tabs>
			</template>
		</v-toolbar>

		<v-tabs-items v-model="tab">
			<v-tab-item v-for="(IssueProduct, IssueName) in excelIssue" :key="IssueName">
				<v-card flat>
					<v-data-table
						:headers="table.headers"
						:items-per-page="5"
						class="elevation-1"
						:items="IssueProduct"
					/>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		tab: null,
		table: {
			headers: [
				{ text: 'SKU', value: 'SKU', sortable: false },
				{
					text: 'MRP',
					align: 'start',
					sortable: false,
					value: 'MRP',
				},
				{ text: 'SALE PRICE', value: 'SALE PRICE', sortable: false },
				{ text: 'STATUS', value: 'STATUS', sortable: false },
				{ text: 'STOCK', value: 'STOCK', sortable: false },
			],
		},
	}),
	props: {
		excelIssue: { type: Object, default: false },
	},
}
</script>
