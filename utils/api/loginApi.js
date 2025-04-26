import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

// Login
function add(data) {
	return APIBuilder.buildPostRequest(URLConstant.LOGINDATA, data)
}

// Register
function register(data) {
	return APIBuilder.buildPostRequest(URLConstant.REGISTERCOMPANY, data)
}

function updateregister(data, params) {
	return APIBuilder.buildPutRequestWithDataAndParams(URLConstant.UPDATEREGISTERCOMPANY, data, params)
}

function create_password(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.CREATEPASSWORD, data)
}

function createSession() {
	vue.setUser(user)
	vue.setToken(token)
}

function closeSession() {
	vue.logout()
}

function setUserSession(user) {
	vue.setUser(user)
}

function getUserSession() {
	return vue.getUser()
}

function setTokenSession(token) {
	vue.setToken(token)
}

function getTokenSession() {
	vue.getToken()
}

function isUserLoggedIn() {
	return vue.isUserLoggedIn()
}

export default {
	add,
	register,
	closeSession,
	createSession,
	updateregister,
	setUserSession,
	getUserSession,
	isUserLoggedIn,
	create_password,
	setTokenSession,
	getTokenSession,
}
