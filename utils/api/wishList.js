import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getAllUsersCart(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLUSERSHAVINGCARTLIST, data)
}

function getAllUsersWishList(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLUSERSWISHLIST, data)
}

function getUsersDetails(id) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETUSERDETAILSBYID + '/' + id)
}

function sendNotification(data) {
	return APIBuilder.buildPostRequest(URLConstant.SENDCARTNOTIFICATION, data)
}

export default {
	getAllUsersCart,
	getAllUsersWishList,
	getUsersDetails,
	sendNotification,
}
