import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getProductImgByBrand(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPRODUCTIMAGESBYBRAND, data)
}

function addBrandProductImg(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDPRODUCTIMAGES, data)
}
// For Doctor
function getProductImgByBrandDoctor(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETPRODUCTIMAGESBYBRANDFORDOCTOR, data)
}

function addBrandProductImgDoctor(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDPRODUCTIMAGESFORDOCTOR, data)
}

export default {
	getProductImgByBrand,
	addBrandProductImg,
	getProductImgByBrandDoctor,
	addBrandProductImgDoctor,
}
