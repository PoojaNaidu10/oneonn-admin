import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

// Prepaid Discount
function addPrepaidDiscountForDoctor(data) {
	// return APIBuilder.buildPostRequest(URLConstant.ADDPREPAIDDISCOUNTFORDOCTOR, data)
}
function updatePrepaidDiscountForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEPREPAIDDISCOUNTDOCTOR, data)
}
function getPrepaidDiscountForDoctor(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETPREPAIDDISCOUNTFORDOCTOR, data)
}
//COD DISCOUNT
function getCODForDoctor(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETCODFORDOCTOR, data)
}

function updateCODForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATECODDOCTOR, data)
}
export default {
	// Prepaid Discount
	addPrepaidDiscountForDoctor,
	updatePrepaidDiscountForDoctor,
	getPrepaidDiscountForDoctor,
	//Cod Discount
	getCODForDoctor,
	updateCODForDoctor,
}
