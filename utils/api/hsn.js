import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getHsnExist(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETHSNEXIST, data)
}

function addHsnCode(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDHSNCODE, data)
}

function updateHsnCode(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEHSNCODE, data)
}
function deleteHSNCode(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEHSNCODE + '?hsncode_id=' + data)
}

export default {
	getHsnExist,
	addHsnCode,
	updateHsnCode,
	deleteHSNCode,
}
