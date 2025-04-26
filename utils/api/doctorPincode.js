import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getCreditPincode(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETCREDITPINCODE + '?limit=' + 0 + '&skip=' + 0, data)
}
function addCreditPinCode(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDCREDITPINCODE, data)
}
function deleteCreditPincode(objectId) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECREDITPINCODE, objectId)
}

//COD DISCOUNT
// function getCODForDoctor(data) {
// 	return APIBuilder.buildGetRequest(URLConstant.GETCODFORDOCTOR, data)
// }

// function updateCODForDoctor(data) {
// 	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATECODDOCTOR, data)
// }
export default {
	// // Prepaid Discount
	// addPrepaidDiscountForDoctor,
	// updatePrepaidDiscountForDoctor,
	// //Cod Discount
	// getCODForDoctor,
	// updateCODForDoctor,
	getCreditPincode,
	deleteCreditPincode,
	addCreditPinCode,
}
