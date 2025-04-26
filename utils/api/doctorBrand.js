import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

// upload_logo() used for upload single file(png,jpg)
function upload_logoForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBRANDLOGOFORDOCTOR, data)
}
// delete brand logo function
function deleteBrandLogoForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEBRANDLOGOFORDOCTOR, data)
}
// uploadThumbnail() used for upload single file(png,jpg)
function uploadBrandThumbnailForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBRANDTHUMBNAILFORDOCTOR, data)
}
// delete brand Thumbnail function
function deleteBrandThumbnailForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEBRANDTHUMBNAILFORDOCTOR, data)
}
// upload_logo() used for upload multiple files(png,jpg)
function upload_bannerForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBANNERIMAGESFORDOCTOR, data)
}
// delete banner images function
function deleteBannerImgForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEBANNERIMAGESFORDOCTOR, data)
}

// add brand
function addBrandForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDBRANDFORDOCTOR, data)
}

// update brand
function updateBrandForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEBRANDFORDOCTOR, data)
}

// Get all brand list
function getAllBrandForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLBRANDLISTFORDOCTOR, data)
}
function getAllShopBrandForDoctor(data) {
	// Providing default is important for URLConstant
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLBRANDFROMDOCTOR + '?category==ayurveda', data)
}

// Get all brand list
function getBrandByIdForDoctor(data) {
	// Providing default is important for URLConstant
	return APIBuilder.buildGetRequestWithData(URLConstant.GETBRANDDETAILSBYIDFORDOCTOR, data)
}
function getCategoryByBrandID(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLCATEGORYBYBRAND, data)
}
export default {
	upload_logoForDoctor,
	deleteBrandLogoForDoctor,
	uploadBrandThumbnailForDoctor,
	deleteBrandThumbnailForDoctor,
	upload_bannerForDoctor,
	deleteBannerImgForDoctor,
	addBrandForDoctor,
	updateBrandForDoctor,
	getAllBrandForDoctor,
	getBrandByIdForDoctor,
	getAllShopBrandForDoctor,
	getCategoryByBrandID,
}
