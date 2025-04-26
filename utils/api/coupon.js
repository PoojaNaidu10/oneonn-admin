import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getCoupon(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETALLCOUPON, data)
}

function getCouponById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETCOUPONBYID, data)
}

function getCouponIsAvailable(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETISCOUPONAVAILABLE, data)
}

function addCoupon(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDCOUPON, data)
}

function updateCoupon(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATECOUPON, data)
}

function deleteCoupon(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETECOUPON, data)
}

export default {
	getCoupon,
	getCouponById,
	getCouponIsAvailable,
	addCoupon,
	updateCoupon,
	deleteCoupon,
}
