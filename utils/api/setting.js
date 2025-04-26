import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function updateCashOnDelivery(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATECASHONDELIVERYBYBRAND, data)
}

function updateCashOnDeliveryForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATECASHONDELIVERYBYBRANDFORDOCTOR, data)
}
// Shipping Charges
function addShippingCharges(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSHIPPINGCHARGES, data)
}
function updateShippingCharges(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESHIPPINGCHARGES, data)
}
function getShippingCharges(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETSHIPPINGCHARGES, data)
}
// Prepaid Discount
function addPrepaidDiscount(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDPREPAIDDISCOUNT, data)
}
function updatePrepaidDiscount(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEPREPAIDDISCOUNT, data)
}
function getPrepaidDiscount(data) {
	return APIBuilder.buildGetRequest(URLConstant.GETPREPAIDDISCOUNT, data)
}
export default {
	updateCashOnDelivery,
	updateCashOnDeliveryForDoctor,
	// shipping charges
	addShippingCharges,
	updateShippingCharges,
	getShippingCharges,
	// Prepaid Discount
	addPrepaidDiscount,
	updatePrepaidDiscount,
	getPrepaidDiscount,
}
