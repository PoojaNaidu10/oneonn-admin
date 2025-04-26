import Vue from 'vue'
import { Bar, Pie, mixins } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Vue.component('BarChart', {
	extends: Bar,
	props: {
		data: {
			type: Object,
			required: true,
		},
		options: {
			type: Object,
			required: false,
			default: () => ({
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false,
					position: 'bottom',
					labels: {
						usePointStyle: true,
					},
				},
				plugins: {
					datalabels: {
						anchor: 'end',
						align: 'top',
						color: 'red', // Color of the labels
						formatter: (value, context) => {
							return value
						},
					},
				},
			}),
		},
	},
	watch: {
		data() {
			this.renderChart(this.data, this.options)
		},
	},
	mounted() {
		this.addPlugin(ChartDataLabels)
		this.renderChart(this.data, this.options)
	},
})

// Vue.component('PieChart', {
// 	extends: Pie,
// 	props: {
// 		data: {
// 			type: Object,
// 			required: true,
// 		},
// 		options: {
// 			type: Object,
// 			required: false,
// 			default: () => ({
// 				responsive: true,
// 				maintainAspectRatio: false,
// 				legend: {
// 					display: false,
// 					align: 'start',
// 					labels: {
// 						fontSize: 20,
// 					},
// 					position: 'bottom',
// 					labels: {
// 						usePointStyle: true,
// 					},
// 				},
// 				plugins: {
// 					datalabels: {
// 						color: '#fff', // Color of the labels
// 						formatter: (value, context) => {
// 							return `${value}%` // Display percentage value
// 						},
// 					},
// 				},
// 			}),
// 		},
// 	},
// 	watch: {
// 		data() {
// 			this.renderChart(this.data, this.options)
// 		},
// 	},
// 	mounted() {
// 		// this.addPlugin(ChartDataLabels)
// 		this.renderChart(this.data, this.options)
// 	},
// })
