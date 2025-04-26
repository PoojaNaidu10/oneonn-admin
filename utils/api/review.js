import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function addReview(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDREVIEW, data)
}

function updateReview(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATEREVIEW, data)
}

function deleteReview(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.DELETEREVIEW, data)
}

function upload_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOADREVIEWIMAGE, data)
}

export default {
	addReview,
	upload_image,
	updateReview,
	deleteReview,
}
