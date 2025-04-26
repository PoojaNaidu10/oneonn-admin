import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getCheckout(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLABANDONEDORDER, data)
}
function sendNotification(data) {
	return APIBuilder.buildPostRequest(URLConstant.SENDCHECKOUTNOTIFICATION, data)
}
export default {
	getCheckout,
	sendNotification,
}
