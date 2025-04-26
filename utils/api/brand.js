import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

// upload_logo() used for upload single file(png,jpg)
function upload_logo(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBRANDLOGO, data)
}
// delete brand logo function
function deleteBrandLogo(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEBRANDLOGO, data)
}
// uploadThumbnail() used for upload single file(png,jpg)
function uploadBrandThumbnail(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBRANDTHUMBNAIL, data)
}
// delete brand Thumbnail function
function deleteBrandThumbnail(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEBRANDTHUMBNAIL, data)
}
// upload_logo() used for upload multiple files(png,jpg)
function upload_banner(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADBANNERIMAGES, data)
}
// delete banner images function
function deleteBannerImg(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEBANNERIMAGES, data)
}

// add brand
function addBrand(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDBRAND, data)
}

// update brand
function updateBrand(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEBRAND, data)
}

// Get all brand list
function getAllBrand(data) {
	// Providing default is important for URLConstant
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLBRANDLIST, data)
}
// Get all brand list
function getBrandById(data) {
	// Providing default is important for URLConstant
	return APIBuilder.buildGetRequestWithData(URLConstant.GETBRANDDETAILSBYID, data)
}
function getBrandByCategoryID(data) {
	// Providing default is important for URLConstant
	return APIBuilder.buildGetRequestWithData(URLConstant.GETBRANDBYCATEGORYID, data)
}
function getCategoryByBrandID(data) {
	// Providing default is important for URLConstant
	return APIBuilder.buildGetRequestWithData(URLConstant.GETCATEGORYBYBRANDID, data)
}

export default {
	upload_logo,
	deleteBrandLogo,
	uploadBrandThumbnail,
	deleteBrandThumbnail,
	upload_banner,
	deleteBannerImg,
	addBrand,
	updateBrand,
	getAllBrand,
	getBrandById,
	getBrandByCategoryID,
	getCategoryByBrandID,
}
