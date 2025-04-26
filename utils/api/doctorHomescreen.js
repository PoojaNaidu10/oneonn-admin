import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function fetch_bannerForDoctor(data) {
	return APIBuilder.buildGetRequest(URLConstant.FETCHBANNERIMAGEFORDOCTOR, data)
}

// upload_logo() used for upload single file(png,jpg)
// function delete_bannerForDoctor(data) {
// 	return APIBuilder.buildPutRequestWithData(URLConstant.DELETEBANNERIMAGEFORDOCTOR, data)
// }
function delete_bannerForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.DELETEBANNERIMAGEFORDOCTOR, data)
}

function add_bannerForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBANNERIMAGEFORDOCTOR, data)
}

function save_bannerForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSHOPBANNERIMAGEFORDOCTOR, data)
}

function getAllDoctorHealthConcern(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETHEALTHCONCERNDOCTOR, data)
}
function getAllTagListForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLTAGLISTFORDOCTOR, data)
}
function getAllDoctorSubcegoryList(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLDOCTORSUBCATEGORYLIST + '?sub_category=', data)
}
function getAllLabelListForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLLABELLISTFORDOCTOR, data)
}

function getAllHSNForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSHOPDOCTORHSN + '?hsn=', data)
}
function getDoctorLabel(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORLABEL + '?label=ski', data)
}
function getAllTagForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSHOPTAG, data)
}

export default {
	delete_bannerForDoctor,
	save_bannerForDoctor,
	add_bannerForDoctor,
	fetch_bannerForDoctor,

	getAllDoctorSubcegoryList,
	getAllTagListForDoctor,
	getAllDoctorHealthConcern,
	getAllLabelListForDoctor,
	getAllHSNForDoctor,
	getDoctorLabel,
	getAllTagForDoctor,
}
