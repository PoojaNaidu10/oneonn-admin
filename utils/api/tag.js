import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function addTag(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDTAG, data)
}

function updateTag(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATETAG, data)
}

function deleteTag(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETETAG, params)
}

function getAllTag(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLTAG, data)
}

function getTagById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETTAGBYID, data)
}

export default {
	addTag,
	updateTag,
	deleteTag,
	getAllTag,
	getTagById,
}
