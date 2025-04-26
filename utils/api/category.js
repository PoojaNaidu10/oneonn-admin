import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllCategory(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETCATEGORY, data)
}
function getAllCategoryById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETCATEGORYBYID, data)
}
function addCategory(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDCATEGORY, data)
}
function updateCategory(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATECATEGORY, data)
}
function deleteCategoryById(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECATEGORY, params)
}
function uploadCategoryBannerImage(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADCATEGORYBANNERIMAGE, data)
}
function deleteCategoryBannerImage(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECATEGORYBANNERIMAGE + '?url=' + url)
}
function uploadCategoryThumbnailImage(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADCATEGORYTHUMBNAILIMAGE, data)
}
function deleteCategoryThumbnailImage(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECATEGORYTHUMBNAILIMAGE + '?url=' + url)
}

export default {
	getAllCategory,
	getAllCategoryById,
	addCategory,
	updateCategory,
	deleteCategoryById,
	deleteCategoryBannerImage,
	deleteCategoryThumbnailImage,
	uploadCategoryBannerImage,
	uploadCategoryThumbnailImage,
}
