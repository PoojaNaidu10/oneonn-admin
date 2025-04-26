import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllProduct(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLPRODUCTLIST, data)
}

function getAllProductAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLPRODUCTLISTPATIENT, data)
}

function getProductById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPRODUCTBYPRODUCTID, data)
}

function getAllCategory(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLCATEGORY, data)
}

function deleteProductImage(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEPRODUCTIMAGE, data)
}

function getAllSubcategory(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSUBCATEGORY, data)
}

function uploadProductImage(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADPRODUCTIMAGE, data)
}

function uploadExcel(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADPRODUCTEXCEL, data)
}

function updateProduct(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEPRODUCT, data)
}
function deleteProduct(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEALLPRODUCTBYID, data)
}

function addProduct(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDPRODUCT, data)
}

function getAllTagList(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLTAGLIST, data)
}

function getAllHsnList(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLHSNLIST, data)
}

function getAllLabelList(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLLABELLIST, data)
}

function get_patient_product_count(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPATIENTPRODUCTCOUNTTOADMIN, data)
}

export default {
	addProduct,
	uploadExcel,
	updateProduct,
	getAllProduct,
	getProductById,
	getAllCategory,
	getAllSubcategory,
	uploadProductImage,
	deleteProductImage,
	getAllTagList,
	getAllHsnList,
	getAllLabelList,
	getAllProductAdmin,
	get_patient_product_count,
	deleteProduct,
}
