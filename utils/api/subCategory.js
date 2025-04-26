import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getSubCategory(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSUBCATEGORY, data)
}

function getSubCategoryById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETSUBCATEGORYBYID, data)
}

function addSubCategory(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSUBCATEGORY, data)
}

function updateSubCategory(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESUBCATEGORY, data)
}

function deleteSubCategoryById(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETESUBCATEGORY, params)
}
function uploadSubCategoryBannerImage(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADSUBCATEGORYBANNERIMAGE, data)
}
function deleteSubCategoryBannerImage(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETESUBCATEGORYBANNERIMAGE + '?url=' + url)
}
function uploadSubCategoryThumbnailImage(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADSUBCATEGORYTHUMBNAILIMAGE, data)
}
function deleteSubCategoryThumbnailImage(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETESUBCATEGORYTHUMBNAILIMAGE + '?url=' + url)
}

export default {
	getSubCategoryById,
	getSubCategory,
	addSubCategory,
	updateSubCategory,
	deleteSubCategoryById,
	deleteSubCategoryBannerImage,
	deleteSubCategoryThumbnailImage,
	uploadSubCategoryBannerImage,
	uploadSubCategoryThumbnailImage,
}
