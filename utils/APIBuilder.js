import axios from 'axios'
import Vue from './sessionManager'

const vue = new Vue()

function buildGetRequest(url) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.get(url, { headers: headers })
}

function buildGetRequestWithData(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios({
		url: url,
		method: 'get',
		headers: headers,
		params: data,
	})
}

function buildGetRequestWithBody(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios({
		url: url,
		method: 'get',
		headers: headers,
		// params: data,
		data: data,
	})
}

function buildGetRequestWithResponseType(url, responseType) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios({
		method: 'get',
		url: url,
		responseType: responseType,
	})
}

function buildPostRequest(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.post(url, data, { headers: headers })
}

function buildFilePostRequest(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	headers['Content-Type'] = 'multipart/form-data'

	return axios.post(url, data, { headers: headers })
}

function buildPutRequest(url, params) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}

	return axios.put(url, {}, { headers: headers, params: params })
}

function buildPutRequestWithData(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}

	return axios.put(url, data, { headers: headers })
}

function buildPutRequestWithDataAndParams(url, data, params) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}

	return axios.put(url, data, { headers: headers, params: params })
}

function buildDeleteRequest(url, params) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.delete(url, { headers: headers, params: params })
}
function buildDeleteRequestWithData(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.delete(url, data, { headers: headers })
}

export default {
	buildGetRequest,
	buildPutRequest,
	buildPostRequest,
	buildDeleteRequest,
	buildFilePostRequest,
	buildGetRequestWithData,
	buildGetRequestWithBody,
	buildPutRequestWithData,
	buildGetRequestWithResponseType,
	buildPutRequestWithDataAndParams,
	buildDeleteRequestWithData,
}
