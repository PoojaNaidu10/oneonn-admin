import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllShopUserSubAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSHOPUSERSUBADMIN, data)
}
function addShopUserSubAdmin(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDALLSHOPUSERSUBADMIN, data)
}
function updateShopUserSubAdmin(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEALLSHOPUSERSUBADMIN, data)
}
function deleteShopUserSubAdminById(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEALLSHOPUSERSUBADMINBYID, data)
}
function getShopUserSubAdminById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSHOPUSERSUBADMINBYID, data)
}
function getMobileNoIsExistForShopUserSubAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETMOBILENOISEXISTFORSHOPUSERSUBADMIN, data)
}
function getEmailIsExistForShopUserSubAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETEMAILNOISEXISTFORSHOPUSERSUBADMIN, data)
}

export default {
	getAllShopUserSubAdmin,
	addShopUserSubAdmin,
	updateShopUserSubAdmin,
	deleteShopUserSubAdminById,
	getShopUserSubAdminById,
	getMobileNoIsExistForShopUserSubAdmin,
	getEmailIsExistForShopUserSubAdmin,
}
