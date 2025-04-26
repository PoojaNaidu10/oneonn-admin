import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getHealthConcern(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETHEALTHCONCERN, data)
}

function getHealthConcernById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETHEALTHCONCERNBYID, data)
}

function addHealthConcern(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDHEALTHCONCERN, data)
}

function updateHealthConcern(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEHEALTHCONCERN, data)
}

function deleteHealthConcern(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEHEALTHCONCERN, params)
}

export default {
	getHealthConcern,
	getHealthConcernById,
	addHealthConcern,
	updateHealthConcern,
	deleteHealthConcern,
}
