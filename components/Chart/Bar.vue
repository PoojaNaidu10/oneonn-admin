<template>
	<div class="p-2 border border-gray-500 mt-4">
		<client-only>
			<BarChart :data="barchartData" ref="barchart" />
		</client-only>
	</div>
</template>

<script>
import { max } from 'lodash'

export default {
	data: () => ({
		barchartOptions: {
			responsive: true,
			plugins: {
				datalabels: {
					anchor: 'end',
					align: 'top',
					color: '#007CB8',
					font: { weight: 600, size: 17 },
					formatter: (value, context) => {
						return value ? `${value.toLocaleString('en-IN')}` : ''
					},
				},
			},
			maintainAspectRatio: false,
			legend: {
				display: false,
				position: 'bottom',
				labels: { usePointStyle: true },
			},
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							suggestedMax: '',
						},
					},
				],
			},
			tooltips: {
				enabled: true,
				xPadding: 10,
				yPadding: 10,
				bodyFontSize: 14,
				bodySpacing: 10,
				callbacks: {
					title: function (tooltipItem, data) {
						return ''
					},
					label: function (tooltipItem, data) {
						const label_name = data.labels[tooltipItem.index]
						const pie_value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
						const label = `  ${label_name}: ${pie_value.toLocaleString('en-IN')}`
						return label
					},
				},
			},
		},
		barchartData: {
			labels: [],
			datasets: [
				{
					data: [],
					label: '',
					borderWidth: 2,
					// borderRadius: 50,
					pointStyle: 'circle',
					// borderColor: '#007CB8',
					backgroundColor: '#00B0F0',
					// borderSkipped: 'bottom',
				},
			],
		},
	}),
	props: { chartData: { type: Object, required: true, default: () => ({ labels: [], data: [] }) } },
	methods: {
		SetChartData() {
			if (this.chartData.labels.length && this.chartData.data.length) {
				this.barchartData.labels = this.chartData.labels
				this.barchartData.datasets[0].data = this.chartData.data
				this.barchartOptions.scales.yAxes[0].ticks.suggestedMax = max(this.chartData.data) + 100
				this.$refs.barchart.renderChart(this.barchartData, this.barchartOptions)
			}
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
