import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllAbandonedOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLABANDONEDORDER, data)
}
function getParentOrderById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPARENTORDERBYID, data)
}
function getParentOrderByIdToAdmin(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPARENTORDERBYIDTOADMIN, data)
}

function getUserOrderById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETUSERORDER, data)
}
function getCheckCourierServiceAbility(data) {
	return APIBuilder.buildPostRequest(URLConstant.GETCOURIERSERVICE, data)
}
function requestForShipmentPickup(data) {
	return APIBuilder.buildPostRequest(URLConstant.SHIPMENTREQUEST, data)
}
function generateManifest(data) {
	return APIBuilder.buildPostRequest(URLConstant.GENERATEMANIFEST, data)
}
function generateOrderLabel(data) {
	return APIBuilder.buildPostRequest(URLConstant.GENERATELABELORDER, data)
}
function getShipmentStatusChildOrder(data) {
	return APIBuilder.buildPostRequest(URLConstant.GETSHIPMENTSTATUSCHILDORDER, data)
}
function cancelOrder(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.ORDERCANCEL, data)
}
function getAllReturnProducts(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLRETURNPRODUCTS, data)
}
function acceptReturnRequest(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.ACCEPTRETURNREQUEST, data)
}
function rejectReturnRequest(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.REJECTRETURNREQUEST, data)
}
function get_patient_order_count(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPATIENTORDERCOUNTTOADMIN, data)
}
function getInvoice(data) {
	return APIBuilder.buildPostRequest(URLConstant.GET_PATIENT_INVOICE, data)
}

function updateShowToSellerStatus(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESHOWTOSELLER, data)
}

export default {
	getAllAbandonedOrder,
	getParentOrderById,
	getParentOrderByIdToAdmin,
	getUserOrderById,
	getCheckCourierServiceAbility,
	requestForShipmentPickup,
	generateManifest,
	generateOrderLabel,
	getShipmentStatusChildOrder,
	cancelOrder,
	getAllReturnProducts,
	acceptReturnRequest,
	rejectReturnRequest,
	get_patient_order_count,
	getInvoice,
	updateShowToSellerStatus,
}
