import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllAbandonedOrderForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLABANDONEDORDERFORDOCTOR, data)
}
function getParentOrderByIdForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPARENTORDERBYIDFORDOCTOR, data)
}
function getUserOrderByIdForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETUSERORDERFORDOCTOR, data)
}
function getCheckCourierServiceAbilityForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.GETCOURIERSERVICEFORDOCTOR, data)
}
function requestForShipmentPickupForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.SHIPMENTREQUESTFORDOCTOR, data)
}
function generateManifestForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.GENERATEMANIFESTFORDOCTOR, data)
}
function generateOrderLabelForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.GENERATELABELORDERFORDOCTOR, data)
}
function getShipmentStatusChildOrderForDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.GETSHIPMENTSTATUSCHILDORDERFORDOCTOR, data)
}
function cancelOrderForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.ORDERCANCELFORDOCTOR, data)
}
function getAllReturnProductsForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLRETURNPRODUCTSFORDOCTOR, data)
}
function acceptReturnRequestForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.ACCEPTRETURNREQUESTFORDOCTOR, data)
}
function rejectReturnRequestForDoctor(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.REJECTRETURNREQUESTFORDOCTOR, data)
}

// Doctor Order
function getAllOrderForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLORDERFORDOCTOR, data)
}
function getOrderByIdForDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETORDERBYIDFORDOCTOR, data)
}

function get_doctor_order_count(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORORDERCOUNTTOADMIN, data)
}
function getInvoice(data) {
	return APIBuilder.buildPostRequest(URLConstant.GET_DOCTOR_INVOICE, data)
}

export default {
	getAllAbandonedOrderForDoctor,
	getParentOrderByIdForDoctor,
	getUserOrderByIdForDoctor,
	getCheckCourierServiceAbilityForDoctor,
	requestForShipmentPickupForDoctor,
	generateManifestForDoctor,
	generateOrderLabelForDoctor,
	getShipmentStatusChildOrderForDoctor,
	cancelOrderForDoctor,
	getAllReturnProductsForDoctor,
	acceptReturnRequestForDoctor,
	rejectReturnRequestForDoctor,
	// doctor order
	getAllOrderForDoctor,
	getOrderByIdForDoctor,
	get_doctor_order_count,
	getInvoice,
}
