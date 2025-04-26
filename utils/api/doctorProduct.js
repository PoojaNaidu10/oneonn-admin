import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllProductForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLPRODUCTLISTFORDOCTOR, data)
}

function getProductByIdForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPRODUCTBYIDFORDOCTOR, data)
}

function getAllCategoryForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLCATEGORYFORDOCTOR, data)
}

function deleteProductImageForDoctor(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEPRODUCTIMAGEFORDOCTOR, data)
}

function getAllSubcategoryForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLSUBCATEGORYFORDOCTOR, data)
}

function uploadProductImageForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADPRODUCTIMAGEFORDOCTOR, data)
}

function uploadExcelForDoctor(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADPRODUCTEXCELFORDOCTOR, data)
}

function updateProductForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEPRODUCTFORDOCTOR, data)
}

function addProductForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDPRODUCTFORDOCTOR, data)
}

function getAllHsnListForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLHSNLISTFORDOCTOR, data)
}
function get_doctor_product_count(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORPRODUCTCOUNTTOADMIN, data)
}

export default {
	addProductForDoctor,
	uploadExcelForDoctor,
	updateProductForDoctor,
	getAllProductForDoctor,
	getProductByIdForDoctor,
	getAllCategoryForDoctor,
	getAllSubcategoryForDoctor,
	uploadProductImageForDoctor,
	deleteProductImageForDoctor,

	getAllHsnListForDoctor,
	get_doctor_product_count,
}
