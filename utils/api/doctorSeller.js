import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllSellerForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSELLERLISTFORDOCTOR, data)
}

function checkEmailForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.CHECKEMAILFORDOCTOR, data)
}

function checkPhoneForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.CHECKPHONEFORDOCTOR, data)
}

function addSellerForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSELLERFORDOCTOR, data)
}

function updateSellerForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESELLERFORDOCTOR, data)
}

function getSellerByIdForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSELLERBYIDFORDOCTOR, data)
}

function upload_agreementForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADAGREEMENTFORDOCTOR, data)
}
function deleteAgreementForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEAGREEMENTFORDOCTOR, data)
}
function upload_cancel_checkForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADCANCELCHECKFORDOCTOR, data)
}
function deleteCancelCheckForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECANCELCHECKFORDOCTOR, data)
}
function upload_gst_certificateForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADGSTCERTIFICATEFORDOCTOR, data)
}
function deleteGstCertificateForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEGSTCERTIFICATEFORDOCTOR, data)
}
//doctr seller banner APIs
function getAllBannerSeller(sellerId) {
	return APIBuilder.buildGetRequest(
		URLConstant.FETCHSELLERBANNERIMAGEFORDOCTOR + '?shop_therapist_seller_id=' + sellerId,
	)
}
// function getAllBannerSeller(data) {
// 	return APIBuilder.buildGetRequestWithData(URLConstant.FETCHSELLERBANNERIMAGEFORDOCTOR, data)
// }

// upload_logo() used for upload single file(png,jpg)
function delete_SellerBannerForDoctorImg(data, itemsId) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETESELLERBANNERIMAGEFORDOCTOR, data, itemsId)
}
function delete_SellerBannerForDoctor(data) {
	console.log('datadoctor', data)
	return APIBuilder.buildPutRequestWithData(URLConstant.DELETESELLERBANNERFORDOCTOR, data)
}

function add_SellerBannerForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADSELLERBANNERIMAGEFORDOCTOR, data)
}

function save_SellerBannerForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.ADDSELLERBANNERIMAGEFORDOCTOR, data)
}

export default {
	addSellerForDoctor,
	checkEmailForDoctor,
	checkPhoneForDoctor,
	getAllSellerForDoctor,
	updateSellerForDoctor,
	getSellerByIdForDoctor,
	upload_agreementForDoctor,
	deleteAgreementForDoctor,
	upload_cancel_checkForDoctor,
	deleteCancelCheckForDoctor,
	upload_gst_certificateForDoctor,
	deleteGstCertificateForDoctor,
	//doctor seller banner
	getAllBannerSeller,
	delete_SellerBannerForDoctor,
	add_SellerBannerForDoctor,
	save_SellerBannerForDoctor,
}
