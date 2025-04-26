import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getTotalOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETTOTALORDER, data)
}
function getProcessingOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPROCESSINGORDER, data)
}
function getIntransitOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETINTRANSITORDER, data)
}
function getCancelledOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETCANCELLEDORDER, data)
}
function getDeliverdOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDELIVERDORDER, data)
}
function getReturnOrder(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETRETURNORDER, data)
}
function getActiveProduct() {
	return APIBuilder.buildGetRequest(URLConstant.GETACTIVEPRODUCT)
}
function getDeactiveProduct() {
	return APIBuilder.buildGetRequest(URLConstant.GETINACTIVEPRODUCT)
}
function getTotalOrderGraph(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETTOTALORDERGRAPH, data)
}

export default {
	getTotalOrder,
	getProcessingOrder,
	getIntransitOrder,
	getCancelledOrder,
	getDeliverdOrder,
	getReturnOrder,
	getActiveProduct,
	getDeactiveProduct,
	getTotalOrderGraph,
}
