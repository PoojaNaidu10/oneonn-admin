import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

// Prepaid Discount
function addDoctorSellerDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.ADDDOCTORSELLERDOCTOR, data)
}

function deleteDoctorSellerDoctor(data) {
	return APIBuilder.buildPutRequest(URLConstant.DELETEDOCTORSELLERDOCTOR, data)
}
function getDoctorSellerList(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETDOCTORSELLERLIST, data)
}

function getDoctorSellerDoctor(objectId, data) {
	return APIBuilder.buildGetRequest(URLConstant.GETDOCTORSELLERDOCTOR + '?seller_id=' + objectId, data)
}

export default {
	// Prepaid Discount
	deleteDoctorSellerDoctor,
	addDoctorSellerDoctor,
	getDoctorSellerList,
	getDoctorSellerDoctor,
}
