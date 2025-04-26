import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getDoctorCoupon(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETDOCTORCOUPON, data)
}

function addDoctorCoupon(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDDOCTORCOUPON, data)
}

function deleteDoctorCoupon(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETEDOCTORCOUPON, data)
}
function getDoctorCouponById(objectId) {
	console.log('fnc', objectId)
	return APIBuilder.buildGetRequest(URLConstant.GETDOCTORCOUPONBYID + '?coupon_id=' + objectId)
}

function updateCoupon(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEDOCTORCOUPON, data)
}
function getCouponIsAvailable(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORISCOUPONAVAILABLE, data)
}
function getAllShopTherapistCategories(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLDOCTORCATEGORY, data)
}
function getAllProductForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLPRODUCTLISTTHERAPISTFORDOCTOR, data)
}
function getBrandByCategoryForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORALLBRANDBYCATEGORY, data)
}
function getAllTherapistCategories(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORCATEGORY, data)
}

export default {
	getDoctorCouponById,
	getDoctorCoupon,
	addDoctorCoupon,
	deleteDoctorCoupon,
	updateCoupon,
	getCouponIsAvailable,
	getAllShopTherapistCategories,
	getAllProductForDoctor,
	getBrandByCategoryForDoctor,
	getAllTherapistCategories,
}
