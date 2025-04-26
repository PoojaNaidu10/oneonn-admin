<template>
	<v-app-bar clipped-left fixed app color="#fc822c "  :height="login ? 90 : undefined">
		<img src="@/assets/logo/oneonn-logo.png" alt="pmeonn-logo" :height="login ? '50px' : '40px'" />
		<v-spacer />
		<v-btn outlined rounded color="design" class="px-6" v-if="!login_status && !login" to="/"> Login </v-btn>
		<div class="d-flex flex-column justify-center mr-2 text-center" v-if="login_status">
			<div class="company-name">
				<v-icon small color="#fff">mdi-account</v-icon>
				<span color="#fff">{{ user?.name || '' }}</span>
			</div>
		</div>
		<v-btn icon class="mr-1" @click="Logout" v-if="login_status">
			<img width="25" height="25" alt="Logout" src="@/assets/icons/logout_icon.png" />
		</v-btn>
	</v-app-bar>
</template>

<script>
import LoginAPI from '@/utils/api/loginApi'
import { mapFields } from 'vuex-map-fields'

export default {
	data: () => ({
		login_status: false,
	}),
	props: { login: { default: false, type: Boolean } },
	computed: {
		...mapFields(['user', 'user_type']),
	},
	methods: {
		Logout() {
			LoginAPI.closeSession()
			this.$router.push('/')
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.login_status = LoginAPI.isUserLoggedIn()
		})
	},
}
</script>

<style scoped>
.company-name {
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #fff;
}
</style>
