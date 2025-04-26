import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function add_homescreen_data(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADD_HOMESCREEN_DATA, data)
}

function get_homescreen_data() {
	return APIBuilder.buildGetRequest(URLConstant.GET_HOMESCREEN)
}

function add_homescreen_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOAD_HOMESCREEN_IMAGE, data)
}

function delete_homescreen_image(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_HOMESCREEN_IMAGE, data)
}

function get_products() {
	return APIBuilder.buildGetRequest(URLConstant.GETALLPRODUCTS)
}

function get_therapy() {
	return APIBuilder.buildGetRequest(URLConstant.GETALLTHERAPY)
}

function get_labtest(params) {
	return APIBuilder.buildGetRequest(URLConstant.GETALLLABTEST, params)
}

//limied time deal
function delete_top_deal_brand_list(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_TOP_DEAL_BRAND_LIST, params)
}
function delete_top_brand(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_TOP_BRAND, params)
}
function delete_brand(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_BRAND, params)
}
function delete_shop_by_concern(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_SHOP_BY_CONCERN, params)
}
function delete_limited_time_deal(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_LIMITED_TIME_DEAL, params)
}
function delete_banner_list(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_BANNER_LIST, params)
}
function delete_consult_therpy(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_CONSULT_THERPY, params)
}
function delete_article_list(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_ARTICLE_LIST, params)
}
function delete_lab_test_list(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_LAB_TEST_LIST, params)
}
function delete_trending(params) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_TRENDING, params)
}
function update_shop_concern(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_SHOP_BY_CONCERN, data)
}
function update_article_list(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_ARTICLE_LIST, data)
}
function update_article_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPDATE_ARTICLE_IMAGE, data)
}
function update_discount_banner(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPDATE_DISCOUNT_BANNER, data)
}
function update_banner_list(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_BANNER_LIST, data)
}
function update_consult_therpy(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_CONSULT_THERPY, data)
}
function update_limited_deal(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_TIME_LIMITED, data)
}
function update_trending(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_TRENDING, data)
}
function delete_article_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_ARTICLE_IMAGE + '?url=' + url)
}
function upload_shop_by_concern(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOAD_SHOP_BY_CONCERN_IMAGE, data)
}
//banner List
function update_banner_desktop_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOAD_BANNER_DESKTOP_IMAGE, data)
}
function update_banner_mobile_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOAD_BANNER_MOBILE_IMAGE, data)
}

function delete_banner_desktop_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_BANNER_DESKTOP_IMAGE + '?url=' + url)
}
function delete_banner_mobile_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_BANNER_MOBILE_IMAGE + '?url=' + url)
}
//consult therpy
function update_consult_therpy_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPDATE_CONSULT_THERPY_IMAGE, data)
}

function delete_consult_therpy_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_CONSULT_THERPY_IMAGE + '?url=' + url)
}

//shop by concer
function update_shop_by_concern_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPDATE_SHOP_BY_CONCERN_IMAGE, data)
}
function delete_shop_by_concern_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_SHOP_BY_CONCERN_IMAGE + '?url=' + url)
}
//brands
function update_brands_desktop_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOAD_BRANDS_DESKTOP_IMAGES, data)
}
function update_brands_mobile_image(data) {
	return APIBuilder.buildFilePostRequest(URLConstant.UPLOAD_BRANDS_MOBILE_IMAGES, data)
}

function delete_brands_desktop_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_BRANDS_DESKTOP_IMAGES + '?url=' + url)
}
function delete_brands_mobile_image(url) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETE_BRANDS_MOBILE_IMAGES + '?url=' + url)
}

function update_top_brand(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_TOP_BRANDS, data)
}
function update_brand(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_BRANDS, data)
}
function update_lab_test_list(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_LAB_TEST_LIST, data)
}

function update_top_deal_brand_list(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATE_TOP_DEAL_LIST, data)
}

function checkBannerPositionExistence( params) {
	return APIBuilder.buildGetRequestWithData(URLConstant.CHECKBANNERPOSITIONEXSIT,  params)
}
function checkPositionExistence(data) {
	return APIBuilder.buildPostRequest(URLConstant.CHECKPOSITIONEXSIT, data)
}

function addAndUpdateTopPractitionerList(data) {
	return APIBuilder.buildPostRequest(URLConstant.ADDANDUPDATETOPPRACTITIONER, data)
}
function deleteTopPractitioner(data) {
	return APIBuilder.buildDeleteRequest(URLConstant.DELETETOPPRACTITIONER, data)
}

function getTherpistList() {
	return APIBuilder.buildGetRequest(URLConstant.ALLTHERPISTLIST)
}

export default {
	add_homescreen_data,
	get_homescreen_data,
	add_homescreen_image,
	delete_homescreen_image,
	get_products,
	get_therapy,
	get_labtest,
	update_discount_banner,

	delete_top_deal_brand_list,
	delete_top_brand,
	delete_shop_by_concern,
	delete_brand,
	delete_banner_list,

	// Article list
	update_article_list,
	delete_article_list,
	update_article_image,
	delete_article_image,

	//banner list
	update_banner_list,
	update_banner_desktop_image,
	update_banner_mobile_image,
	delete_banner_desktop_image,
	delete_banner_mobile_image,

	// consult therpy
	delete_consult_therpy,
	update_consult_therpy,
	update_consult_therpy_image,
	delete_consult_therpy_image,

	// limited time deal
	delete_limited_time_deal,
	update_limited_deal,
	update_trending,
	//shop by concern
	update_shop_concern,
	upload_shop_by_concern,
	delete_shop_by_concern_image,
	update_shop_by_concern_image,

	update_brands_desktop_image,
	update_brands_mobile_image,
	delete_brands_desktop_image,
	delete_brands_mobile_image,
	update_top_brand,
	update_brand,
	update_lab_test_list,
	//top deal brand
	update_top_deal_brand_list,
	delete_lab_test_list,
	//TRENDING
	delete_trending,
	//Top practionior
	checkPositionExistence,
	addAndUpdateTopPractitionerList,
	deleteTopPractitioner,
	getTherpistList,
	checkBannerPositionExistence,
}
