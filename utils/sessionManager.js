class SessionManager {
	install(vue, options) {
		// Authentication related
		Vue.logout = this.logout
		Vue.setUser = this.setUser
		Vue.getUser = this.getUser
		Vue.setToken = this.setToken
		Vue.getToken = this.getToken
		Vue.isUserLoggedIn = this.isUserLoggedIn

		// Company related
		Vue.getRequestedCompany = this.getRequestedCompany
		Vue.setRequestedCompany = this.setRequestedCompany
		Vue.getRequestedCompanyUsers = this.getRequestedCompanyUsers
		Vue.setRequestedCompanyUsers = this.setRequestedCompanyUsers
	}

	setUser(user) {
		localStorage.setItem('user', JSON.stringify(user))
	}

	getUser() {
		return JSON.parse(localStorage.getItem('user'))
	}

	setToken(token) {
		localStorage.setItem('token', token)
	}

	getToken() {
		return localStorage.getItem('token')
	}

	isUserLoggedIn() {
		return localStorage.getItem('token') !== null
	}

	logout() {
		localStorage.removeItem('token')
		localStorage.removeItem('user')
	}

	// setRequestedCompany(company) {
	// 	localStorage.setItem('company', JSON.stringify(company))
	// }

	// getRequestedCompany() {
	// 	return JSON.parse(localStorage.getItem('company'))
	// }

	// setRequestedCompanyUsers(company_users) {
	// 	localStorage.setItem('company_users', JSON.stringify(company_users))
	// }

	// getRequestedCompanyUsers() {
	// 	return JSON.parse(localStorage.getItem('company_users'))
	// }
}

export default SessionManager
