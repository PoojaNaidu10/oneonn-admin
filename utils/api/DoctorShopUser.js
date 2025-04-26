import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllShopTherapistSubAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSHOPTHERAPISTSUBADMIN, data)
}
function addShopTherapistSubAdmin(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSHOPTHERAPISTSUBADMIN, data)
}
function updateShopTherapistSubAdmin(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESHOPTHERAPISTSUBADMIN, data)
}
function deleteShopTherapistSubAdminById(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETESHOPTHERAPISTSUBADMINBYID, data)
}
function getShopTherapistSubAdminById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSHOPTHERAPISTSUBADMINBYID, data)
}
function getMobileNoIsExistForShopTherapistSubAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETMOBILENOISEXISTFORSHOPTHERPISTUSERSUBADMIN, data)
}
function getEmailIsExistForShopTherapistSubAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETEMAILNOISEXISTFORSHOPTHERPISTUSERSUBADMIN, data)
}

export default {
	getAllShopTherapistSubAdmin,
	addShopTherapistSubAdmin,
	updateShopTherapistSubAdmin,
	deleteShopTherapistSubAdminById,
	getShopTherapistSubAdminById,
	getMobileNoIsExistForShopTherapistSubAdmin,
	getEmailIsExistForShopTherapistSubAdmin,
}
