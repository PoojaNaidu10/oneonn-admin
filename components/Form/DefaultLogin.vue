<template>
	<v-container class="mt-10" >
		<v-form v-model="isValid" ref="form">
			<span class="text-h6">Name/ Email<sup class="red--text">*</sup></span>
			<v-text-field
				outlined
				class="mt-2"
				v-model="d_payload.email_id"
				:rules="[rules.required, rules.phoneemail_id]"
				placeholder="Enter your own Mobile No./ Email"
			/>
			<span class="text-h6">Password<sup class="red--text">*</sup></span>
			<v-text-field
				outlined
				password
				class="mt-2"
				@keydown.enter="Login"
				:rules="[rules.required]"
				v-model="d_payload.password"
				placeholder="Enter your Password"
				:type="show_password ? 'text' : 'password'"
				@click:append="show_password = !show_password"
				:append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
			/>
		</v-form>
		<h5 class="text-center blue--text forgot-text text-subtitle-1 mt-n3">Forgot Password?</h5>
		<div class="text-center">
			<div class="mx-16">
				<v-btn rounded block color="design" dark x-large class="mt-4 mb-2" @click="Login"> Login </v-btn>
			</div>
		</div>
	</v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import login from '@/utils/api/loginApi'

export default {
	data: () => ({
		isValid: true,
		d_payload: {
			email_id: '',
			password: '',
		},
		show_password: false,
		rules: {
			required: (value) => !!value || 'This field is required',
			phoneemail: (input) => {
				if (/^\d+$/.test(input)) {
					return input.length >= 10 || 'Min 10 characters'
				} else {
					return (
						/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input) ||
						'Please enter correct email'
					)
				}
			},
		},
	}),
	computed: {
		...mapFields(['login_state.user_id', 'login_state.password', 'user']),
	},
	methods: {
		async Login() {
			this.$refs.form.validate()
			if (this.isValid) {
				try {
					const response = await login.add(this.d_payload)
					if (!response.data.status.status_code) {
						// Storing the user information in the store
						this.user = response.data.payload.user
						// Storing the token in localstorage
						login.setTokenSession(response.data.payload.token)
						// Storing the user information in localstorage
						login.setUserSession(response.data.payload.user)
						if (this.user.role == 'sub_admin') {
							if (this.user.privilage_list.includes('OPERATION')) {
								this.$router.push('/product')
							} else if (this.user.privilage_list.includes('MARKETING')) {
								this.$router.push('/setting/cod')
							} else if (this.user.privilage_list.includes('BRAND')) {
								this.$router.push('/patient/brand')
							} else if (this.user.privilage_list.includes('DOCTOR')) {
								this.$router.push('/doctor/brand')
							} else if (this.user.privilage_list.includes('UPLOADER')) {
								this.$router.push('/patient/uploadimage')
							}
						} else {
							this.$router.push('/product')
						}
						this.$store.dispatch('ActivateSnackBar', {
							state: true,
							color: 'green darken-4',
							msg: 'Logged in successfully',
						})
					} else {
						this.$store.dispatch('ActivateSnackBar', {
							state: true,
							color: 'red darken-4',
							msg: response.data.status.message,
						})
					}
				} catch (err) {
					console.log(err)
				}
			}
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.container{
padding: 30px;
}

@media (min-width: 1264px) {
   
}
</style>