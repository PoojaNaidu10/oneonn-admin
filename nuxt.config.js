import pkg from './package.json'
import colors from 'vuetify/es5/util/colors'
import path from 'path';


export default {
	ssr: false,
	head: {
		title: 'Oneonnn Admin',
		htmlAttrs: {
			lang: 'en',
		},



		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		// link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},
	components: true,
	axios: { baseURL: process.env.BASE_URL },
	server: { port: 3002, host: 'localhost' },
	publicRuntimeConfig: { clientVersion: pkg.version },
	dayjs: { plugins: ['relativeTime', 'isSameOrAfter', 'duration'] },
	modules: ['@nuxtjs/axios', '@nuxtjs/google-fonts', '@nuxtjs/dayjs'],
	css: ['animate.css/animate.min.css', '@/assets/fonts/css/fonts.css', 'static/css/styles.css'],
	buildModules: ['@nuxtjs/vuetify', ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }]],
	plugins: [
		'@/plugins/plugin-mask',
		'@/plugins/plugin-xls',
		'@/plugins/plugin-barchart',
		'@/plugins/plugin-clipboard',
	],
	vuetify: {
		theme: {
			dark: false,
			themes: {
				light: {
					design: '#fc822c',
					design2: '#fc822c',
					design_light: '#fc822c',
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					accent: colors.grey.darken3,
					primary: colors.blue.darken2,
					success: colors.green.accent4,
					secondary: colors.amber.darken3,
					error: colors.deepOrange.accent4,
				},
			},
		},
	},
	build: {
		extend(config) {
			config.resolve.alias['@utils'] = path.resolve(__dirname, 'utils');
		  },
		postcss: {
			plugins: {
				autoprefixer: {},
			},
		},
	
	},

	googleFonts: {
		preload: true,
		prefetch: true,
		download: true,
		display: 'swap',
		preconnect: true,
		overwriting: false,
		outputDir: '@/assets/fonts',
		families: {
			'Lexend+Deca': ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
		},
	},
}
