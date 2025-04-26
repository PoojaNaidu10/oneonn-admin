import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getCityState(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETCITYSTATE, data)
}

function getAllSeller(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSELLERLIST, data)
}

function checkEmail(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.CHECKEMAIL, data)
}

function checkPhone(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.CHECKPHONE, data)
}

function addSeller(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSELLER, data)
}

function updateSeller(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESELLER, data)
}

function getSellerById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSELLERBYID, data)
}

function upload_agreement(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADAGREEMENT, data)
}
function deleteAgreement(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEAGREEMENT, data)
}
function upload_cancel_check(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADCANCELCHECK, data)
}
function deleteCancelCheck(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECANCELCHECK, data)
}
function upload_gst_certificate(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADGSTCERTIFICATE, data)
}
function deleteGstCertificate(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEGSTCERTIFICATE, data)
}
function getSellerProductHistory(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSELLERHISTORY, data)
}
function getProductHistorySellerList(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETHISTORYSELLERLIST, data)
}

export default {
	getCityState,
	addSeller,
	checkEmail,
	checkPhone,
	getAllSeller,
	updateSeller,
	getSellerById,
	upload_agreement,
	deleteAgreement,
	upload_cancel_check,
	deleteCancelCheck,
	upload_gst_certificate,
	deleteGstCertificate,
	getSellerProductHistory,
	getProductHistorySellerList,
}
