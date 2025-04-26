<template>
	<div class="p-2 border border-gray-500 mt-4">
		<client-only>
			<PieChart :data="piechartData" ref="piechart" />
		</client-only>

		<!-- <v-container> -->
		<v-row class="mt-4 mb-2 mx-4">
			<v-col class="py-1 px-2" cols="6" v-for="(item, index) in piechartData.labels" :key="index">
				<v-row>
					<v-col cols="6" align-self="start" class="text-caption">
						<v-badge dot :color="piechartData.datasets[0].backgroundColor[index]" class="mr-3" />
						{{ item }}
					</v-col>
					<v-col cols="2" class="text-caption text-center">
						{{ CalculatePercentage(index, piechartData.datasets[0].data) }}%
					</v-col>
					<v-col cols="4" class="text-caption text-right">
						{{ norupee ? '' : '₹' }} {{ piechartData.datasets[0].data[index].toLocaleString('en-IN') }}
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<!-- </v-container> -->
	</div>
</template>

<script>
import { sum, round } from 'lodash'

export default {
	data: () => ({
		piechartOptions: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				datalabels: {
					color: '#fff',
					font: { weight: 600, size: 17 },
					formatter: (value, context) => {
						const total = context.dataset.data.reduce((v, n) => v + n)
						const percentage = (value / total) * 100
						return percentage ? `${percentage.toFixed(2)}%` : ''
					},
				},
			},
			legend: {
				align: 'start',
				display: false,
				position: 'bottom',
				labels: { usePointStyle: true },
				labels: { fontSize: 20, fontColor: 'red' },
			},
			tooltips: {
				enabled: true,
				xPadding: 10,
				yPadding: 10,
				bodyFontSize: 14,
				bodySpacing: 10,
				callbacks: {
					label: function (tooltipItem, data) {
						const label_name = data.labels[tooltipItem.index]
						const pie_value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
						const total = data.datasets[tooltipItem.datasetIndex].data.reduce((v, n) => v + n)
						const percentage = (pie_value / total) * 100
						const label = `  ${label_name} (${percentage.toFixed(2)}%)`
						return label
					},
					// afterLabel: function (tooltipItem, data) {
					// 	const pie_value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
					// 	const label = `₹ ${pie_value.toLocaleString('en-IN')}`
					// 	return label
					// },
				},
			},
		},
		piechartData: {
			labels: [],
			datasets: [
				{
					data: [],
					label: 'Title',
					pointStyle: 'circle',
					backgroundColor: [
						'#00B050',
						'#00B0F0',
						'#0D0D0D',
						'#7030A0',
						'#843C0C',
						'#92D050',
						'#B8B5AC',
						'#E523BB',
						'#FD7D35',
						'#FF0000',
					],
				},
			],
		},
	}),
	props: {
		norupee: { type: Boolean, default: false },
		chartData: { type: Object, required: true, default: () => ({ labels: [], data: [] }) },
	},
	methods: {
		AfterLabel(tooltipItem, data) {
			const pie_value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
			const label = `${this.norupee ? '' : '₹'} ${pie_value.toLocaleString('en-IN')}`
			return label
		},
		SetChartData() {
			if (this.chartData.labels.length && this.chartData.data.length) {
				this.piechartData.labels = this.chartData.labels
				this.piechartData.datasets[0].data = this.chartData.data
				this.piechartOptions.tooltips.callbacks.afterLabel = this.AfterLabel
				this.$refs.piechart.renderChart(this.piechartData, this.piechartOptions)
			}
		},
		CalculatePercentage(index, dataset) {
			const total = sum(dataset)
			const percentage = (dataset[index] / total) * 100
			return percentage.toFixed(2)
		},
	},
	watch: {
		chartData: {
			handler(newVal, oldVal) {
				this.SetChartData()
			},
			deep: true,
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.SetChartData()
		})
	},
}
</script>
