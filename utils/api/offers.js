import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()
function addShopTherapistBrandOffer(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDSHOPBRANDOFFER, data)
}
function updateShopTherapistBrandOffer(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATESHOPBRANDOFFER, data)
}
function deleteShopTherapistBrandOffer(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETESHOPBRANDOFFER, data)
}
function getTherapistBrandOfferById(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETBRANDOFFERBYID, data)
}
function getAllTherapistBrandOffer(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLBRANDOFFER, data)
}
function getTherapistAllOfferByTherapistId(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETDOCTORALLBRANDOFFER, data)
}

export default {
	getAllTherapistBrandOffer,
	addShopTherapistBrandOffer,
	getTherapistBrandOfferById,
	updateShopTherapistBrandOffer,
	deleteShopTherapistBrandOffer,
	getTherapistAllOfferByTherapistId,
}
