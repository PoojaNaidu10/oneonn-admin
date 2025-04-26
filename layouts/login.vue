<template>
	<v-app class="primary-font" id="nf-shop-admin">
		<CommonHeader login />
		<Nuxt />
		<v-snackbar right v-model="state" :color="snackbar.color" timeout="5000">
			{{ snackbar.msg }}
			<template v-slot:action="{ attrs }">
				<v-btn color="white" text v-bind="attrs" @click="state = false"> Close </v-btn>
			</template>
		</v-snackbar>
		<CommonFooter login />
	</v-app>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import login from '@/utils/api/loginApi'

export default {
	computed: { ...mapFields(['snackbar', 'snackbar.state']) },
	mounted() {
		this.$nextTick(() => {
			if (login.isUserLoggedIn()) {
				this.$router.push('/product')
			}
		})
	},
}
</script>

<style scoped>
.primary-font {
	font-family: 'Lexend Deca', sans-serif !important;
}
</style>
