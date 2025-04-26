//Production
// const BASE_URL = 'https://nfapi.naturefit.in/api'

//UAT
// const BASE_URL = 'https://uatnfapi.naturefit.in/api'

//Development
// const BASE_URL = 'https://devnfapi.naturefit.in/api'
const BASE_URL = 'https://oneonnn-1.onrender.com/api'

// const BASE_URL = process.env.API_BASE_URL
const LOGINDATA = `${BASE_URL}/admin/adminLogin`
const CREATEPASSWORD = `${BASE_URL}/companyUser/setPasswordOfCompanyUser`

/* ------------ Seller APIs ------------------- */
const ADDSELLER = `${BASE_URL}/shop/seller/addSeller`
const UPDATESELLER = `${BASE_URL}/shop/seller/updateShopSeller`
const GETSELLERBYID = `${BASE_URL}/shop/seller/getShopSellerById`
const GETCITYSTATE = `${BASE_URL}/get/allstatesandcity`
const GETALLSELLERLIST = `${BASE_URL}/shop/seller/getAllShopSeller`
const CHECKEMAIL = `${BASE_URL}/shop/seller/getSellerEmailExist`
const CHECKPHONE = `${BASE_URL}/shop/seller/getSellerMobileExist`
const UPLOADAGREEMENT = `${BASE_URL}/shop/seller/agreement/upload/image`
const DELETEAGREEMENT = `${BASE_URL}/shop/seller/agreement/delete/image`
const UPLOADCANCELCHECK = `${BASE_URL}/shop/seller/cancelcheck/upload/image`
const DELETECANCELCHECK = `${BASE_URL}/shop/seller/cancelcheck/delete/image`
const UPLOADGSTCERTIFICATE = `${BASE_URL}/shop/seller/gstCertificate/upload/image`
const DELETEGSTCERTIFICATE = `${BASE_URL}/shop/seller/gstCertificate/delete/image`

/* ------------ Brand APIs ------------------- */
const UPLOADBRANDLOGO = `${BASE_URL}/shop/brand/upload/image`
const DELETEBRANDLOGO = `${BASE_URL}/shop/brand/delete/image`
const UPLOADBRANDTHUMBNAIL = `${BASE_URL}/shop/brand/pageThumbnail/upload/image`
const DELETEBRANDTHUMBNAIL = `${BASE_URL}/shop/brand/pageThumbnail/delete/image`
const UPLOADBANNERIMAGES = `${BASE_URL}/shop/brand/branner/upload/image`
const DELETEBANNERIMAGES = `${BASE_URL}/shop/brand/banner/delete/image`
const ADDBRAND = `${BASE_URL}/shop/brand/addBrand`
const UPDATEBRAND = `${BASE_URL}/shop/brand/updateShopBrand`
const GETALLBRANDLIST = `${BASE_URL}/shop/brand/getAllShopBrand`
const GETBRANDDETAILSBYID = `${BASE_URL}/shop/brand/getBrandById`
const GETBRANDBYCATEGORYID = `${BASE_URL}/shop/brand/getAllBrandByCategory`
const GETCATEGORYBYBRANDID = `${BASE_URL}/shop/brand/getAllCategoryByBrand`

/* ------------ Product APIs ------------------- */
const UPLOADPRODUCTIMAGE = `${BASE_URL}/shop/product/upload/image`
const UPLOADPRODUCTEXCEL = `${BASE_URL}/shop/product/addProductByxls`
const ADDPRODUCT = `${BASE_URL}/product/addProduct`
const DELETEALLPRODUCTBYID = `${BASE_URL}/product/deleteProduct`

const GETALLPRODUCTLIST = `${BASE_URL}/shop/product/searchProduct`
const GETALLPRODUCTLISTPATIENT = `${BASE_URL}/product/getAllProductList`
const GETALLPRODUCTLISTDOCTOR = `${BASE_URL}/shop/product/therapist/searchProduct`
const GETPRODUCTBYID = `${BASE_URL}/shop/product/getProductById`
const GETALLCATEGORY = `${BASE_URL}/shop/master/category/getAllCategories`
const GETALLSUBCATEGORY = `${BASE_URL}/shop/master/subCategory/getAllSubCategories`
const DELETEPRODUCTIMAGE = `${BASE_URL}/naturefitshop/product/delete/image`
const UPDATEPRODUCT = `${BASE_URL}/product/updateProduct`
const GETALLTAGLIST = `${BASE_URL}/shop/master/tag/getAllTags`
const GETALLLABELLIST = `${BASE_URL}/shop/master/label/getAllLabel`
// HSN API's
const GETALLHSNLIST = `${BASE_URL}/shop/master/hsn/getAllHsnCode`
const GETHSNEXIST = `${BASE_URL}/shop/master/hsn/getHsnIsExist`
const ADDHSNCODE = `${BASE_URL}/shop/master/hsn/addHsn`
const UPDATEHSNCODE = `${BASE_URL}/shop/master/hsn/updateHsn`
const DELETEHSNCODE = `${BASE_URL}/shop/master/hsncode/deleteHsncode`
const GETALLSHOPDOCTORHSN = `${BASE_URL}/shop/master/therapist/hsn/getAllShopTherapistHsnCode`

// Wish List API's
const GETALLUSERSHAVINGCARTLIST = `${BASE_URL}/user/getAllUserHavingCartList`
const GETALLUSERSWISHLIST = `${BASE_URL}/user/getAllUserHavingWishList`
const GETUSERDETAILSBYID = `${BASE_URL}/get/userdetailsbyid`
// Review's API
const ADDREVIEW = `${BASE_URL}/shop/product/addRatingAndReviewByAdminOfProduct`
const UPDATEREVIEW = `${BASE_URL}/shop/product/updateRatingAndReviewByAdminOfProduct`
const DELETEREVIEW = `${BASE_URL}/shop/product/deleteRatingAndReviewByAdminOfProduct`
const UPLOADREVIEWIMAGE = `${BASE_URL}/shop/product/review/upload/image`
// Health Concern API's
const ADDHEALTHCONCERN = `${BASE_URL}/shop/master/healthConcern/addShopHealthConcern`
const UPDATEHEALTHCONCERN = `${BASE_URL}/shop/master/healthConcern/updateShopHealthConcern`
const DELETEHEALTHCONCERN = `${BASE_URL}/shop/master/healthConcern/deleteHealthConcernById`
const GETHEALTHCONCERN = `${BASE_URL}/shop/master/healthConcern/getAllHealthConcern`
const GETHEALTHCONCERNBYID = `${BASE_URL}/shop/master/healthConcern/getHealthConcernById`
// Category
const GETCATEGORY = `${BASE_URL}/shop/master/category/getAllCategories`
const GETCATEGORYBYID = `${BASE_URL}/shop/master/category/getCategoryById`
const ADDCATEGORY = `${BASE_URL}/shop/master/category/addShopCategory`
const UPDATECATEGORY = `${BASE_URL}/shop/master/category/updateShopCategory`
const DELETECATEGORY = `${BASE_URL}/shop/master/category/deleteCategoryById`
const UPLOADCATEGORYBANNERIMAGE = `${BASE_URL}/shop/category/banner/upload/image`
const DELETECATEGORYBANNERIMAGE = `${BASE_URL}/shop/category/banner/delete/image`
const UPLOADCATEGORYTHUMBNAILIMAGE = `${BASE_URL}/shop/category/thumbnail/upload/image`
const DELETECATEGORYTHUMBNAILIMAGE = `${BASE_URL}/shop/category/thumbnail/delete/image`
// sub category
const GETSUBCATEGORYBYID = `${BASE_URL}/shop/master/subCategory/getSubCategoryById`
const GETSUBCATEGORY = `${BASE_URL}/blog/getAllBlog`
const ADDSUBCATEGORY = `${BASE_URL}/blog/addBlog`
const DELETESUBCATEGORY = `${BASE_URL}/blog/deleteBlog`
const UPDATESUBCATEGORY = `${BASE_URL}/blog/updateBlog`
const UPLOADSUBCATEGORYBANNERIMAGE = `${BASE_URL}/shop/subcategory/banner/upload/image`
const DELETESUBCATEGORYBANNERIMAGE = `${BASE_URL}/shop/subcategory/banner/delete/image`
const UPLOADSUBCATEGORYTHUMBNAILIMAGE = `${BASE_URL}/shop/subcategory/thumbnail/upload/image`
const DELETESUBCATEGORYTHUMBNAILIMAGE = `${BASE_URL}/shop/subcategory/thumbnail/delete/image`
const GETALLDOCTORSUBCATEGORYLIST = `${BASE_URL}/shop/master/therapist/subCategory/getAllTherapistSubCategories`
// Tag
const ADDTAG = `${BASE_URL}/shop/master/tag/addShopTag`
const UPDATETAG = `${BASE_URL}/shop/master/tag/updateShopTag`
const DELETETAG = `${BASE_URL}/shop/master/tag/deleteTagById`
const GETALLTAG = `${BASE_URL}/shop/master/tag/getAllTags`
const GETTAGBYID = `${BASE_URL}/shop/master/tag/getTagById`
// Coupon
const ADDCOUPON = `${BASE_URL}/shopCoupon/addShopCoupon`
const UPDATECOUPON = `${BASE_URL}/shopCoupon/updateShopCoupon`
const DELETECOUPON = `${BASE_URL}/shopCoupon/deleteShopCoupon`
const GETALLCOUPON = `${BASE_URL}/shopCoupon/searchCoupon`
const GETCOUPONBYID = `${BASE_URL}/shopCoupon/getCouponCodeById`
const GETISCOUPONAVAILABLE = `${BASE_URL}/shopCoupon/isCouponAvailable`
const GETDOCTORISCOUPONAVAILABLE = `${BASE_URL}/shopCoupon/admin/isTherapistCouponAvailable`
// ORDER Abandoned
const GETALLABANDONEDORDER = `${BASE_URL}/shopUserOrder/getAllAbondendOrder`
const GETUSERORDER = `${BASE_URL}/shopUserOrder/searchUserOrders`
const GETPARENTORDERBYID = `${BASE_URL}/shopUserOrder/getParentOrderById`
const GETPARENTORDERBYIDTOADMIN = `${BASE_URL}/shopUserOrder/getOrderByIdToAdmin`

// Order Courier
const GETCOURIERSERVICE = `${BASE_URL}/shopUserOrder/admin/getCheckCourierServiceAbility`
const SHIPMENTREQUEST = `${BASE_URL}/shopUserOrder/admin/requestForShipmentPickup`
const GENERATEMANIFEST = `${BASE_URL}/shopUserOrder/admin/generateOrderManifest`
const GENERATELABELORDER = `${BASE_URL}/shopUserOrder/admin/generateLabelOfOrder`
const GETSHIPMENTSTATUSCHILDORDER = `${BASE_URL}/shopUserOrder/admin/getShipmentStatusOfChildOrder`
const ORDERCANCEL = `${BASE_URL}/shopUserOrder/admin/cancelOrderByAdmin`
const GETALLRETURNPRODUCTS = `${BASE_URL}/shopUserOrder/admin/getAllReturnProductRequestToAdmin`
const ACCEPTRETURNREQUEST = `${BASE_URL}/shopUserOrder/admin/acceptRequestOfProduct`
const REJECTRETURNREQUEST = `${BASE_URL}/shopUserOrder/admin/rejectRequestOfProductReturn`

// Doctor

/* ------------ Banner APIs ------------------- */
//fetch banner Doctor
const FETCHBANNERIMAGEFORDOCTOR = `${BASE_URL}/homeScreenBanner/therapist/getAllShopTherapistHomeScreenBanner`
// Delete banner image
const DELETEBANNERIMAGEFORDOCTOR = `${BASE_URL}/homeScreenBanner/therapist/deleteShopTherapistHomeScreenBanner`
// upload banner image
const UPLOADBANNERIMAGEFORDOCTOR = `${BASE_URL}/homeScreenBanner/therapist/banner/upload/image`
const ADDSHOPBANNERIMAGEFORDOCTOR = `${BASE_URL}/homeScreenBanner/therapist/addShopTherapistHomeScreenBanner`

//banner image seller
const FETCHSELLERBANNERIMAGEFORDOCTOR = `${BASE_URL}/shop/seller/getBannerListByShopTherapistSellerId`
const ADDSELLERBANNERIMAGEFORDOCTOR = `${BASE_URL}//shop/seller/therapist/addBannerToTherapistSeller`
const UPLOADSELLERBANNERIMAGEFORDOCTOR = `${BASE_URL}//shop/seller/therapistSeller/upload/bannerImage`
const DELETESELLERBANNERIMAGEFORDOCTOR = `${BASE_URL}//shop/seller/therapist/deleteTherapistSellerBnnner`
const DELETESELLERBANNERFORDOCTOR = `${BASE_URL}//shop/seller/therapist/deleteTherapistSellerBanner`
const GETALLBRANDFROMDOCTOR = `${BASE_URL}/shop/brand/therapist/getAllShopBrandForTherapistForAdmin`

/* ------------ Brand APIs ------------------- */
// upload logo image
const UPLOADBRANDLOGOFORDOCTOR = `${BASE_URL}/shop/brand/therapist/upload/image`
// delete brand logo
const DELETEBRANDLOGOFORDOCTOR = `${BASE_URL}/shop/brand/therapist/delete/image`
// upload pageThumbnail image
const UPLOADBRANDTHUMBNAILFORDOCTOR = `${BASE_URL}/shop/brand/therapist/pageThumbnail/upload/image`
// delete brand pageThumbnail
const DELETEBRANDTHUMBNAILFORDOCTOR = `${BASE_URL}/shop/brand/therapist/pageThumbnail/delete/image`
// upload banner images
const UPLOADBANNERIMAGESFORDOCTOR = `${BASE_URL}/shop/brand/therapist/branner/upload/image`
// delete banner images
const DELETEBANNERIMAGESFORDOCTOR = `${BASE_URL}/shop/brand/therapist/banner/delete/image`
// Create a new Brand API URL
const ADDBRANDFORDOCTOR = `${BASE_URL}/shop/brand/therapist/addBrand`
// Update the existing brand API URL
const UPDATEBRANDFORDOCTOR = `${BASE_URL}/shop/brand/therapist/updateShopBrand`
// Get all brands which is added in naturefitshop
// const GETALLBRANDLISTFORDOCTOR = `${BASE_URL}/shop/brand/therapist/getAllShopBrand`
const GETALLBRANDLISTFORDOCTOR = `${BASE_URL}/shop/brand/therapist/getAllShopBrandForTherapistForAdmin`
const GETALLCATEGORYBYBRAND = `${BASE_URL}/shop/brand/therapist/getAllCategoryByBrandToTherapist`

// Get brands Details by id
const GETBRANDDETAILSBYIDFORDOCTOR = `${BASE_URL}/shop/brand/therapist/getBrandById`

/* ------------ Product APIs ------------------- */
const UPLOADPRODUCTIMAGEFORDOCTOR = `${BASE_URL}/shop/product/therapist/upload/image`
const UPLOADPRODUCTEXCELFORDOCTOR = `${BASE_URL}/shop/product/therapist/addProductByxls`
const ADDPRODUCTFORDOCTOR = `${BASE_URL}/shop/product/therapist/addProduct`
const GETALLPRODUCTLISTTHERAPISTFORDOCTOR = `${BASE_URL}/shop/product/therapist/searchProduct`
const GETALLPRODUCTLISTFORDOCTOR = `${BASE_URL}/shop/product/admin/searchProduct`
const GETPRODUCTBYIDFORDOCTOR = `${BASE_URL}/shop/product/therapist/getProductById`
const GETALLCATEGORYFORDOCTOR = `${BASE_URL}/shop/master/therapist/category/getAllCategories`
const GETALLSUBCATEGORYFORDOCTOR = `${BASE_URL}/shop/master/therapist/subCategory/getAllSubCategories`
const DELETEPRODUCTIMAGEFORDOCTOR = `${BASE_URL}/naturefitshop/product/therapist/delete/image`
const UPDATEPRODUCTFORDOCTOR = `${BASE_URL}/shop/product/therapist/updateProduct`
const GETALLTAGLISTFORDOCTOR = `${BASE_URL}/shop/master/therapist/tag/getAllTags`
const GETALLLABELLISTFORDOCTOR = `${BASE_URL}/shop/master/therapist/label/getAllLabel`

/* ------------ Seller APIs ------------------- */
// Create a new seller API URL
const ADDSELLERFORDOCTOR = `${BASE_URL}/shop/seller/therapist/addSeller`
// Update the existing seller API URL
const UPDATESELLERFORDOCTOR = `${BASE_URL}/shop/seller/therapist/updateShopSeller`
//localhost:3000/api/shop/seller/therapist/updateShopSeller
const GETSELLERBYIDFORDOCTOR = `${BASE_URL}/shop/seller/therapist/getShopSellerByIdForTherapist`
// Get all sellers which is added in naturefitshop
const GETALLSELLERLISTFORDOCTOR = `${BASE_URL}/shop/seller/therapist/getAllShopSeller`
const CHECKEMAILFORDOCTOR = `${BASE_URL}/shop/seller/therapist/getSellerEmailExist`
const CHECKPHONEFORDOCTOR = `${BASE_URL}/shop/seller/therapist/getSellerMobileExist`
const UPLOADAGREEMENTFORDOCTOR = `${BASE_URL}/shop/seller/therapist/agreement/upload/image`
const DELETEAGREEMENTFORDOCTOR = `${BASE_URL}/shop/seller/therapist/agreement/delete/image`
const UPLOADCANCELCHECKFORDOCTOR = `${BASE_URL}/shop/seller/therapist/cancelcheck/upload/image`
const DELETECANCELCHECKFORDOCTOR = `${BASE_URL}/shop/seller/therapist/cancelcheck/delete/image`
const UPLOADGSTCERTIFICATEFORDOCTOR = `${BASE_URL}/shop/seller/therapist/gstCertificate/upload/image`
const DELETEGSTCERTIFICATEFORDOCTOR = `${BASE_URL}/shop/seller/therapist/gstCertificate/delete/image`

// Order
// ORDER Abandoned
const GETALLABANDONEDORDERFORDOCTOR = `${BASE_URL}/shopUserOrder/getAllAbondendOrder`
const GETUSERORDERFORDOCTOR = `${BASE_URL}/shopUserOrder/searchUserOrders`
const GETPARENTORDERBYIDFORDOCTOR = `${BASE_URL}/shopUserOrder/getParentOrderById`
// Order Courier
const GETCOURIERSERVICEFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/getCheckCourierServiceAbility`
const SHIPMENTREQUESTFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/requestForShipmentPickup`
const GENERATEMANIFESTFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/generateOrderManifest`
const GENERATELABELORDERFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/generateLabelOfOrder`
const GETSHIPMENTSTATUSCHILDORDERFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/getShipmentStatusOfChildOrder`
const ORDERCANCELFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/cancelOrderByAdmin`
const GETALLRETURNPRODUCTSFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/getAllReturnProductRequestToAdmin`
const ACCEPTRETURNREQUESTFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/acceptRequestOfProduct`
const REJECTRETURNREQUESTFORDOCTOR = `${BASE_URL}/shopUserOrder/admin/rejectRequestOfProductReturn`
const UPDATESHOWTOSELLER = `${BASE_URL}/shopUserOrder/updateShowToSellerStatus`

// order for doctor
const GETALLORDERFORDOCTOR = `${BASE_URL}/shopDoctorOrder/getAllOrderToAdmin`
const GETORDERBYIDFORDOCTOR = `${BASE_URL}/shopDoctorOrder/getOrderByIdOfTherapist`

// Homescreen API
const ADD_HOMESCREEN_DATA = `${BASE_URL}/banner/addHomeScreenBanner`

const GET_HOMESCREEN = `${BASE_URL}/banner/getAllHomeScreenList`
const UPLOAD_HOMESCREEN_IMAGE = `${BASE_URL}/image/uploadImage`
const DELETE_HOMESCREEN_IMAGE = `${BASE_URL}/homeScreenTwo/banner/deleteBannerDesktopImageFilePath`
const GETALLPRODUCTS = `${BASE_URL}/shop/product/searchProduct`
const GETPRODUCTBYPRODUCTID = `${BASE_URL}/shop/master/getProductById`

const GETALLTHERAPY = `${BASE_URL}/get/alltherapiesforadmin`
const GETALLLABTEST = `${BASE_URL}/labTest/getAllLabTest`

//Article List
const UPDATE_ARTICLE_LIST = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoTopArticleList`
const UPDATE_ARTICLE_IMAGE = `${BASE_URL}/homeScreenTwo/uploadArticleImageFilePath`
const DELETE_ARTICLE_LIST = `${BASE_URL}/homeScreenTwo/deleteArticleList`
const DELETE_ARTICLE_IMAGE = `${BASE_URL}/homeScreenTwo/deleteArticleImageFilePath`
const UPDATE_DISCOUNT_BANNER = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoDiscountBanner`

// const UPLOADBANNERIMAGEFORDOCTOR = `${BASE_URL}/homeScreenBanner/therapist/banner/upload/image`
const UPLOAD_SHOP_BY_CONCERN_IMAGE = `${BASE_URL}/homeScreenBanner/therapist/banner/upload/image`
// const UPDATE_SHOP_BY_CONCERN = `${BASE_URL}/homeScreenTwo/uploadShopConcernImageFilePath`
const UPDATE_SHOP_BY_CONCERN = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoShopByConcern`

const UPDATE_TOP_DEAL_LIST = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoTopDealBrandList`

//lab tset
const UPDATE_LAB_TEST_LIST = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoLabTestList`
const DELETE_LAB_TEST_LIST = `${BASE_URL}/homeScreenTwo/deleteLabTestList`

//brands
const UPLOAD_BRANDS_DESKTOP_IMAGES = `${BASE_URL}/homeScreenBanner/brand/uploadBrandDesktopImageFilePath`
const UPLOAD_BRANDS_MOBILE_IMAGES = `${BASE_URL}/homeScreenBanner/brand/uploadBrandMobileImageFilePath`
const DELETE_BRANDS_DESKTOP_IMAGES = `${BASE_URL}/homeScreenBanner/brand/deleteBrandDesktopImageFilePath`
const DELETE_BRANDS_MOBILE_IMAGES = `${BASE_URL}/homeScreenBanner/brand/deleteBrandMobileImageFilePath`
//limited time deal
const UPDATE_TIME_LIMITED = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoLimitedTimeDeal`
const UPDATE_BRANDS = `${BASE_URL}/homeScreenTwo/updateHomeScreenBrands`
//Top brands
const UPDATE_TOP_BRANDS = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoTopBrands`
//consult therpy
const UPDATE_CONSULT_THERPY = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoConsultByTherapy`
const DELETE_CONSULT_THERPY = `${BASE_URL}/homeScreenTwo/deleteConsultByTherapy`
const UPDATE_CONSULT_THERPY_IMAGE = `${BASE_URL}/homeScreenTwo/uploadConsultByTherapyImageFilePath`
const DELETE_CONSULT_THERPY_IMAGE = `${BASE_URL}/homeScreenTwo/deleteConsultByTherapyImageFilePath`
//shop By Con
const DELETE_SHOP_BY_CONCERN_IMAGE = `${BASE_URL}/homeScreenTwo/deleteShopConcernImageFilePath`
const UPDATE_SHOP_BY_CONCERN_IMAGE = `${BASE_URL}/homeScreenTwo/uploadShopConcernImageFilePath`

//Banner List
const UPDATE_BANNER_LIST = `${BASE_URL}/banner/updateHomescreen`
const UPLOAD_BANNER_DESKTOP_IMAGE = `${BASE_URL}/homeScreenTwo/banner/uploadBannerDesktopImageFilePath`
const UPLOAD_BANNER_MOBILE_IMAGE = `${BASE_URL}/homeScreenTwo/banner/uploadBannerMobileImageFilePath`
const DELETE_BANNER_DESKTOP_IMAGE = `${BASE_URL}/homeScreenTwo/banner/deleteBannerDesktopImageFilePath`
const DELETE_BANNER_MOBILE_IMAGE = `${BASE_URL}/homeScreenTwo/banner/deleteBannerMobileImageFilePath`
const UPDATE_TRENDING = `${BASE_URL}/homeScreenTwo/updateHomeScreenTwoTrending`

//Limited Time Deal
const DELETE_LIMITED_TIME_DEAL = `${BASE_URL}/homeScreenTwo/deleteLimitedTimeDeal`
const DELETE_TRENDING = `${BASE_URL}/homeScreenTwo/deleteTrending`
//Top Deal Brand Delete
const DELETE_TOP_DEAL_BRAND_LIST = `${BASE_URL}/homeScreenTwo/deleteTopDealBrandList`
const DELETE_TOP_BRAND = `${BASE_URL}/homeScreenTwo/deleteTopBrands`
const DELETE_SHOP_BY_CONCERN = `${BASE_URL}/homeScreenTwo/deleteShopByConcern`
const DELETE_BRAND = `${BASE_URL}/homeScreenTwo/deleteBrands`
const DELETE_BANNER_LIST = `${BASE_URL}/banner/deleteHomeScreenBanner`

// Upload Brand Product Images
const GETPRODUCTIMAGESBYBRAND = `${BASE_URL}/shop/product/user/getUserBrandImagesByBrandId`
const ADDPRODUCTIMAGES = `${BASE_URL}/shop/product/user/addShopUserProductImage`

// Upload Doctor Brand Product Images
const GETPRODUCTIMAGESBYBRANDFORDOCTOR = `${BASE_URL}/shop/product/therapist/getTherapistBrandImagesByBrandId`
const ADDPRODUCTIMAGESFORDOCTOR = `${BASE_URL}/shop/product/therapist/addShopTherapistProductImage`

// Cash on delivery for user
const UPDATECASHONDELIVERYBYBRAND = `${BASE_URL}/shop/brand/user/updateShopBrandCashOnDelivery`
// cash on delivery for doctor
const UPDATECASHONDELIVERYBYBRANDFORDOCTOR = `${BASE_URL}/shop/brand/therapist/updateShopTherapistBrandCashOnDelivery`
// Shipping Charges
const GETSHIPPINGCHARGES = `${BASE_URL}/shop/shipping/admin/getShippingCharges`
const ADDSHIPPINGCHARGES = `${BASE_URL}/shop/shippingCharges/addShippingCharges`
const UPDATESHIPPINGCHARGES = `${BASE_URL}/shop/shippingCharges/updateShippingCharges`

// Prepaid discount
const GETPREPAIDDISCOUNT = `${BASE_URL}/shop/prepaidDiscount/admin/getPrepaidDiscount`
const ADDPREPAIDDISCOUNT = `${BASE_URL}/shop/shippingCharges/addShippingCharges`
const UPDATEPREPAIDDISCOUNT = `${BASE_URL}/shop/prepaidDiscount/updatePrepaidDiscount`
//prepaid discount  doctor
const GETPREPAIDDISCOUNTFORDOCTOR = `${BASE_URL}/shop/prepaidDiscount/admin/getShopTherapistPrepaidDiscount`
const ADDPREPAIDDISCOUNTFORDOCTOR = `${BASE_URL}/shop/prepaidDiscount/therapist/addPrepaidDiscount`
const UPDATEPREPAIDDISCOUNTDOCTOR = `${BASE_URL}/shop/prepaidDiscount/therapist/updatePrepaidDiscount`

const GETCODFORDOCTOR = `${BASE_URL}/shopDoctorOrder/doctor/getLastestCodDiscount`
const UPDATECODDOCTOR = `${BASE_URL}/shopDoctorOrder/updateCodDiscount`

// Ticket
const GETALLTICKET = `${BASE_URL}/shop/ticket/getAllTicket`
const UPDATETICKETSTATUS = `${BASE_URL}/shop/ticket/updateTicketStatus`

// Dashboard
const GETTOTALORDER = `${BASE_URL}/shop/dashboard/getTotalOrder`
const GETPROCESSINGORDER = `${BASE_URL}/shop/dashboard/getProcessingOrder`
const GETINTRANSITORDER = `${BASE_URL}/shop/dashboard/getIntransitOrder`
const GETCANCELLEDORDER = `${BASE_URL}/shop/dashboard/getCancelledOrder`
const GETDELIVERDORDER = `${BASE_URL}/shop/dashboard/getDeliverdOrder`
const GETRETURNORDER = `${BASE_URL}/shop/dashboard/getReturnOrder`
const GETACTIVEPRODUCT = `${BASE_URL}/shop/dashboard/getActiveProduct`
const GETINACTIVEPRODUCT = `${BASE_URL}/shop/dashboard/getInactiveProduct`
const GETCREDITPINCODE = `${BASE_URL}/shopDoctorOrder/admin/getAllPincode`
const ADDCREDITPINCODE = `${BASE_URL}/shopDoctorOrder/admin/addPincode`
const DELETECREDITPINCODE = `${BASE_URL}/shopDoctorOrder/admin/deletePincodeById`
const GETTOTALORDERGRAPH = `${BASE_URL}/shop/dashboard/getTotalOrderGraph`

//Doctor Seller Doctor
const ADDDOCTORSELLERDOCTOR = `${BASE_URL}/shop/seller/therapist/addTherapistSellerToTherapist`
const DELETEDOCTORSELLERDOCTOR = `${BASE_URL}/shop/seller/therapist/removeTherapistSellerFromSellerList`
const GETDOCTORSELLERLIST = `${BASE_URL}/therapist/getAllActiveTherapist`
const GETDOCTORSELLERDOCTOR = `${BASE_URL}/shop/seller/getAllTherapistUnderParticularTherapistSeller`

//doctor Coupon
const GETDOCTORCOUPON = `${BASE_URL}/shopCoupon/doctor/getAllCoupon`
const ADDDOCTORCOUPON = `${BASE_URL}/shopCoupon/admin/addShopTherapistCoupon`
const DELETEDOCTORCOUPON = `${BASE_URL}/shopCoupon/admin/deleteShopTherapistCoupon`
const GETDOCTORCOUPONBYID = `${BASE_URL}/shopCoupon/admin/getTherapistCouponCodeById`
const UPDATEDOCTORCOUPON = `${BASE_URL}/shopCoupon/admin/updateShopTherapistCoupon`
const GETALLDOCTORCATEGORY = `${BASE_URL}/shop/master/therapist/category/getAllShopTherapistCategories`
const GETHEALTHCONCERNDOCTOR = `${BASE_URL}/shop/master/therapist/health/getAllShopTherapistHealthConcern`
const GETDOCTORLABEL = `${BASE_URL}/shop/master/therapist/label/getAllShopTherapistLabel`
const GETALLSHOPTAG = `${BASE_URL}/shop/master/therapist/tag/getShopTherapistAllTags`
const GETDOCTORALLBRANDBYCATEGORY = `${BASE_URL}/shop/brand/therapist/getAllBrandByCategory`

//Shop user Api
const ADDALLSHOPUSERSUBADMIN = `${BASE_URL}/subAdmin/addSubAdminWithPrivilages`
const GETALLSHOPUSERSUBADMIN = `${BASE_URL}/subAdmin/getAllSubAdmin`
const UPDATEALLSHOPUSERSUBADMIN = `${BASE_URL}/subAdmin/updateSubAdmin`
const DELETEALLSHOPUSERSUBADMINBYID = `${BASE_URL}/subAdmin/deleteSubAdmin`

//shopUser
// const GETALLSHOPUSERSUBADMIN = `${BASE_URL}/shopUserSubAdmin/getAllShopUserSubAdmin`
// const ADDALLSHOPUSERSUBADMIN = `${BASE_URL}/shopUserSubAdmin/addShopUserSubAdmin`
// const UPDATEALLSHOPUSERSUBADMIN = `${BASE_URL}/shopUserSubAdmin/updateShopUserSubAdmin`
// const DELETEALLSHOPUSERSUBADMINBYID = `${BASE_URL}/shopUserSubAdmin/deleteShopUserSubAdminById`
const GETSHOPUSERSUBADMINBYID = `${BASE_URL}/shopUserSubAdmin/getShopUserSubAdminById`

//Doctor shop User roles
const ADDSHOPTHERAPISTSUBADMIN = `${BASE_URL}/shopTherapistSubAdmin/addShopTherapistSubAdmin`
const UPDATESHOPTHERAPISTSUBADMIN = `${BASE_URL}/shopTherapistSubAdmin/updateShopTherapistSubAdmin`
const GETALLSHOPTHERAPISTSUBADMIN = `${BASE_URL}/shopTherapistSubAdmin/getAllShopTherapistSubAdmin`
const GETSHOPTHERAPISTSUBADMINBYID = `${BASE_URL}/shopTherapistSubAdmin/getShopTherapistSubAdminById`
const DELETESHOPTHERAPISTSUBADMINBYID = `${BASE_URL}/shopTherapistSubAdmin/deleteShopTherapistSubAdminById`

//validation of mobile and email
const GETMOBILENOISEXISTFORSHOPUSERSUBADMIN = `${BASE_URL}/shopUserSubAdmin/getMobileNoIsExistForShopUserSubAdmin`
const GETEMAILNOISEXISTFORSHOPUSERSUBADMIN = `${BASE_URL}/shopUserSubAdmin/getEmailIsExistForShopUserSubAdmin`
const GETMOBILENOISEXISTFORSHOPTHERPISTUSERSUBADMIN = `${BASE_URL}/shopTherapistSubAdmin/getMobileNoIsExistForShopTherapistSubAdmin`
const GETEMAILNOISEXISTFORSHOPTHERPISTUSERSUBADMIN = `${BASE_URL}/shopTherapistSubAdmin/getEmailIsExistForShopTherapistSubAdmin`

// Doctor Brand Offer
const ADDSHOPBRANDOFFER = `${BASE_URL}/shop/offers/addShopTherapistBrandOffer`
const UPDATESHOPBRANDOFFER = `${BASE_URL}/shop/offers/updateShopTherapistBrandOffer`
const DELETESHOPBRANDOFFER = `${BASE_URL}/shop/offers/deleteShopTherapistBrandOffer`
const GETBRANDOFFERBYID = `${BASE_URL}/shop/offers/getTherapistBrandOfferById`
const GETALLBRANDOFFER = `${BASE_URL}/shop/offers/getAllTherapistBrandOffer`
const GETDOCTORALLBRANDOFFER = `${BASE_URL}/shop/offers/getTherapistAllOfferByTherapistId`

const GETPATIENTORDERCOUNTTOADMIN = `${BASE_URL}/shopUserOrder/searchUserOrdersCount`
const GETDOCTORORDERCOUNTTOADMIN = `${BASE_URL}/shopDoctorOrder/getAllOrderCountOfTherapistToAdmin`
const GETDOCTORPRODUCTCOUNTTOADMIN = `${BASE_URL}/shop/product/therapist/searchProductForTherapistCount`
const GETPATIENTPRODUCTCOUNTTOADMIN = `${BASE_URL}/shop/product/searchProductCountToAdmin`
const GET_DOCTOR_INVOICE = `${BASE_URL}/shopDoctorOrder/admin/downloadInvoice`
const GET_PATIENT_INVOICE = `${BASE_URL}/shopUserOrder/admin/downloadInvoice`
const GETSELLERHISTORY = `${BASE_URL}/shopSeller/product/getSellerProductHistoryToAdmin`
const GETHISTORYSELLERLIST = `${BASE_URL}/shopSeller/product/getProductHistorySellerList`
const SENDCHECKOUTNOTIFICATION = `${BASE_URL}/shopUserOrder/admin/sendCheckoutNotification`
const SENDCARTNOTIFICATION = `${BASE_URL}/shopUserOrder/admin/sendCartNotification`
const GETDOCTORCATEGORY = `${BASE_URL}/shop/therapistProduct/getAllTherapistProductExistCategories`
//Top Practicnior
const CHECKPOSITIONEXSIT = `${BASE_URL}/homeScreenTwo/checkPositionExistence`
const ADDANDUPDATETOPPRACTITIONER = `${BASE_URL}/homeScreenTwo/addAndUpdateTopPractitionerList`
const DELETETOPPRACTITIONER = `${BASE_URL}/homeScreenTwo/deleteTherapistFromTopPractitionerList`
const ALLTHERPISTLIST = `${BASE_URL}/allTherapist`
const CHECKBANNERPOSITIONEXSIT = `${BASE_URL}/banner/isPositionExist`

export default {
	LOGINDATA,
	CREATEPASSWORD,
	// Seller API
	GETCITYSTATE,
	UPDATEDOCTORCOUPON,
	ADDSELLER,
	CHECKEMAIL,
	CHECKPHONE,
	UPLOADAGREEMENT,
	DELETEAGREEMENT,
	UPLOADCANCELCHECK,
	DELETECANCELCHECK,
	UPLOADGSTCERTIFICATE,
	DELETEGSTCERTIFICATE,
	UPDATESELLER,
	GETSELLERBYID,
	GETALLSELLERLIST,
	// Brand API
	UPLOADBRANDLOGO,
	DELETEBRANDLOGO,
	UPLOADBRANDTHUMBNAIL,
	DELETEBRANDTHUMBNAIL,
	UPLOADBANNERIMAGES,
	DELETEBANNERIMAGES,
	ADDBRAND,
	UPDATEBRAND,
	GETALLBRANDLIST,
	GETBRANDDETAILSBYID,
	GETALLBRANDFROMDOCTOR,
	GETBRANDBYCATEGORYID,
	GETCATEGORYBYBRANDID,
	// Product API
	ADDPRODUCT,
	UPDATEPRODUCT,
	DELETEALLPRODUCTBYID,
	GETPRODUCTBYID,
	GETPRODUCTBYPRODUCTID,
	GETALLCATEGORY,
	GETALLSUBCATEGORY,
	GETALLPRODUCTLIST,
	UPLOADPRODUCTEXCEL,
	UPLOADPRODUCTIMAGE,
	DELETEPRODUCTIMAGE,
	GETALLTAGLIST,
	GETALLLABELLIST,
	GETALLUSERSHAVINGCARTLIST,
	GETALLUSERSWISHLIST,
	GETUSERDETAILSBYID,
	ADDREVIEW,
	UPDATEREVIEW,
	DELETEREVIEW,
	UPLOADREVIEWIMAGE,
	ADDHEALTHCONCERN,
	UPDATEHEALTHCONCERN,
	DELETEHEALTHCONCERN,
	GETHEALTHCONCERN,
	GETHEALTHCONCERNBYID,
	GETHEALTHCONCERNDOCTOR,
	UPDATE_TRENDING,
	// HSN
	GETALLHSNLIST,
	GETHSNEXIST,
	ADDHSNCODE,
	UPDATEHSNCODE,
	DELETEHSNCODE,
	GETALLSHOPDOCTORHSN,
	// category
	GETCATEGORY,
	GETCATEGORYBYID,
	ADDCATEGORY,
	UPDATECATEGORY,
	DELETECATEGORY,
	UPLOADCATEGORYBANNERIMAGE,
	DELETECATEGORYBANNERIMAGE,
	UPLOADCATEGORYTHUMBNAILIMAGE,
	DELETECATEGORYTHUMBNAILIMAGE,
	// sub Category
	GETSUBCATEGORY,
	GETSUBCATEGORYBYID,
	ADDSUBCATEGORY,
	DELETESUBCATEGORY,
	UPDATESUBCATEGORY,
	UPLOADSUBCATEGORYBANNERIMAGE,
	DELETESUBCATEGORYBANNERIMAGE,
	UPLOADSUBCATEGORYTHUMBNAILIMAGE,
	DELETESUBCATEGORYTHUMBNAILIMAGE,
	GETALLDOCTORSUBCATEGORYLIST,
	// tag
	ADDTAG,
	UPDATETAG,
	DELETETAG,
	GETALLTAG,
	GETTAGBYID,
	// Coupon
	ADDCOUPON,
	UPDATECOUPON,
	DELETECOUPON,
	GETALLCOUPON,
	GETCOUPONBYID,
	GETISCOUPONAVAILABLE,
	GETDOCTORISCOUPONAVAILABLE,

	// Order
	GETALLABANDONEDORDER,
	GETUSERORDER,
	GETPARENTORDERBYID,
	GETPARENTORDERBYIDTOADMIN,
	GETCOURIERSERVICE,
	SHIPMENTREQUEST,
	GENERATEMANIFEST,
	GENERATELABELORDER,
	GETSHIPMENTSTATUSCHILDORDER,
	ORDERCANCEL,
	GETALLRETURNPRODUCTS,
	ACCEPTRETURNREQUEST,
	REJECTRETURNREQUEST,
	// doctor

	//doctor coupon
	//fetch banner
	FETCHBANNERIMAGEFORDOCTOR,

	//counsult therpy
	DELETE_CONSULT_THERPY,
	UPDATE_CONSULT_THERPY_IMAGE,
	//delete banner
	DELETEBANNERIMAGEFORDOCTOR,
	//Doctor banner
	UPLOADBANNERIMAGEFORDOCTOR,
	ADDSHOPBANNERIMAGEFORDOCTOR,

	// doctor brand
	UPLOADBRANDLOGOFORDOCTOR,
	DELETEBRANDLOGOFORDOCTOR,
	UPLOADBRANDTHUMBNAILFORDOCTOR,
	DELETEBRANDTHUMBNAILFORDOCTOR,
	UPLOADBANNERIMAGESFORDOCTOR,
	DELETEBANNERIMAGESFORDOCTOR,
	ADDBRANDFORDOCTOR,
	UPDATEBRANDFORDOCTOR,
	GETALLBRANDLISTFORDOCTOR,
	GETBRANDDETAILSBYIDFORDOCTOR,
	// doctor product
	UPLOADPRODUCTIMAGEFORDOCTOR,
	UPLOADPRODUCTEXCELFORDOCTOR,
	ADDPRODUCTFORDOCTOR,
	GETALLPRODUCTLISTFORDOCTOR,
	GETPRODUCTBYIDFORDOCTOR,
	GETALLCATEGORYFORDOCTOR,
	GETALLSUBCATEGORYFORDOCTOR,
	DELETEPRODUCTIMAGEFORDOCTOR,
	UPDATEPRODUCTFORDOCTOR,
	GETALLTAGLISTFORDOCTOR,
	GETALLLABELLISTFORDOCTOR,
	// doctor Seller
	ADDSELLERFORDOCTOR,
	UPDATESELLERFORDOCTOR,
	GETSELLERBYIDFORDOCTOR,
	GETALLSELLERLISTFORDOCTOR,
	CHECKEMAILFORDOCTOR,
	CHECKPHONEFORDOCTOR,
	UPLOADAGREEMENTFORDOCTOR,
	DELETEAGREEMENTFORDOCTOR,
	UPLOADCANCELCHECKFORDOCTOR,
	DELETECANCELCHECKFORDOCTOR,
	UPLOADGSTCERTIFICATEFORDOCTOR,
	DELETEGSTCERTIFICATEFORDOCTOR,
	//category
	GETALLDOCTORCATEGORY,
	//banner seller dctor
	DELETESELLERBANNERIMAGEFORDOCTOR,
	ADDSELLERBANNERIMAGEFORDOCTOR,
	UPLOADSELLERBANNERIMAGEFORDOCTOR,
	FETCHSELLERBANNERIMAGEFORDOCTOR,
	DELETESELLERBANNERFORDOCTOR,
	// Doctor Order
	GETALLABANDONEDORDERFORDOCTOR,
	GETUSERORDERFORDOCTOR,
	GETPARENTORDERBYIDFORDOCTOR,
	GETCOURIERSERVICEFORDOCTOR,
	SHIPMENTREQUESTFORDOCTOR,
	GENERATEMANIFESTFORDOCTOR,
	GENERATELABELORDERFORDOCTOR,
	GETSHIPMENTSTATUSCHILDORDERFORDOCTOR,
	ORDERCANCELFORDOCTOR,
	GETALLRETURNPRODUCTSFORDOCTOR,
	ACCEPTRETURNREQUESTFORDOCTOR,
	REJECTRETURNREQUESTFORDOCTOR,
	// Order doctor
	GETALLORDERFORDOCTOR,
	GETORDERBYIDFORDOCTOR,

	// HOMESCREEN
	ADD_HOMESCREEN_DATA,
	GET_HOMESCREEN,
	UPLOAD_HOMESCREEN_IMAGE,
	DELETE_HOMESCREEN_IMAGE,
	GETALLPRODUCTS,
	GETALLTHERAPY,
	GETALLLABTEST,

	//ARTICLE
	UPDATE_ARTICLE_LIST,
	UPDATE_ARTICLE_IMAGE,
	DELETE_ARTICLE_LIST,
	DELETE_ARTICLE_IMAGE,
	UPDATE_SHOP_BY_CONCERN,
	UPLOAD_SHOP_BY_CONCERN_IMAGE,

	//top deal List
	UPDATE_TOP_DEAL_LIST,
	//time limit
	UPDATE_TIME_LIMITED,
	//consult
	UPDATE_CONSULT_THERPY,
	DELETE_CONSULT_THERPY_IMAGE,

	//shop By concern
	DELETE_SHOP_BY_CONCERN_IMAGE,
	UPDATE_SHOP_BY_CONCERN_IMAGE,
	//LAB test
	UPDATE_LAB_TEST_LIST,
	DELETE_LAB_TEST_LIST,
	//banne List
	UPDATE_BANNER_LIST,
	UPLOAD_BANNER_DESKTOP_IMAGE,
	UPLOAD_BANNER_MOBILE_IMAGE,
	DELETE_BANNER_DESKTOP_IMAGE,
	DELETE_BANNER_MOBILE_IMAGE,

	//discount banner
	UPDATE_DISCOUNT_BANNER,

	//LIMITED TIME DEAL
	DELETE_LIMITED_TIME_DEAL,
	DELETE_TRENDING,

	//bradns
	UPDATE_BRANDS,
	UPDATE_TOP_BRANDS,
	UPLOAD_BRANDS_DESKTOP_IMAGES,
	UPLOAD_BRANDS_MOBILE_IMAGES,
	DELETE_BRANDS_DESKTOP_IMAGES,
	DELETE_BRANDS_MOBILE_IMAGES,

	//Top Deal Brand Delete
	DELETE_TOP_DEAL_BRAND_LIST,
	DELETE_TOP_BRAND,
	DELETE_SHOP_BY_CONCERN,
	DELETE_BRAND,
	DELETE_BANNER_LIST,

	// Upload images
	GETPRODUCTIMAGESBYBRAND,
	ADDPRODUCTIMAGES,
	//add credit code
	ADDCREDITPINCODE,

	// Upload Doctor images
	GETPRODUCTIMAGESBYBRANDFORDOCTOR,
	ADDPRODUCTIMAGESFORDOCTOR,
	UPDATECASHONDELIVERYBYBRAND,
	UPDATECASHONDELIVERYBYBRANDFORDOCTOR,
	GETSHIPPINGCHARGES,
	ADDSHIPPINGCHARGES,
	UPDATESHIPPINGCHARGES,
	GETPREPAIDDISCOUNT,
	ADDPREPAIDDISCOUNT,
	UPDATEPREPAIDDISCOUNT,

	//prepaid Discont Banner
	GETPREPAIDDISCOUNTFORDOCTOR,
	UPDATEPREPAIDDISCOUNTDOCTOR,
	ADDPREPAIDDISCOUNTFORDOCTOR,

	//COD Doctor
	GETCODFORDOCTOR,
	UPDATECODDOCTOR,

	//GET credit pincode
	GETCREDITPINCODE,
	DELETECREDITPINCODE,

	//doctor seller doctor
	ADDDOCTORSELLERDOCTOR,
	DELETEDOCTORSELLERDOCTOR,

	// ticket
	GETALLTICKET,
	UPDATETICKETSTATUS,
	// dashboard
	GETTOTALORDER,
	GETPROCESSINGORDER,
	GETINTRANSITORDER,
	GETCANCELLEDORDER,
	GETDELIVERDORDER,
	GETRETURNORDER,
	GETACTIVEPRODUCT,
	GETINACTIVEPRODUCT,
	GETTOTALORDERGRAPH,

	//doctor coupon
	GETDOCTORCOUPON,
	GETDOCTORSELLERLIST,
	GETDOCTORSELLERDOCTOR,
	ADDDOCTORCOUPON,
	DELETEDOCTORCOUPON,
	GETDOCTORCOUPONBYID,
	GETDOCTORLABEL,
	GETALLSHOPTAG,
	//shop user
	GETALLSHOPUSERSUBADMIN,
	ADDALLSHOPUSERSUBADMIN,
	UPDATEALLSHOPUSERSUBADMIN,
	DELETEALLSHOPUSERSUBADMINBYID,
	GETSHOPUSERSUBADMINBYID,
	//doctor shop user
	ADDSHOPTHERAPISTSUBADMIN,
	UPDATESHOPTHERAPISTSUBADMIN,
	GETALLSHOPTHERAPISTSUBADMIN,
	GETSHOPTHERAPISTSUBADMINBYID,
	DELETESHOPTHERAPISTSUBADMINBYID,
	//doctor shop validatin
	GETMOBILENOISEXISTFORSHOPUSERSUBADMIN,
	GETEMAILNOISEXISTFORSHOPUSERSUBADMIN,
	GETMOBILENOISEXISTFORSHOPTHERPISTUSERSUBADMIN,
	GETEMAILNOISEXISTFORSHOPTHERPISTUSERSUBADMIN,
	//doctor Product
	GETALLPRODUCTLISTTHERAPISTFORDOCTOR,
	GETALLPRODUCTLISTPATIENT,
	GETALLPRODUCTLISTDOCTOR,
	GETDOCTORCATEGORY,

	// Doctor Brand Offer
	ADDSHOPBRANDOFFER,
	UPDATESHOPBRANDOFFER,
	DELETESHOPBRANDOFFER,
	GETBRANDOFFERBYID,
	GETALLBRANDOFFER,
	GETDOCTORALLBRANDOFFER,
	GETALLCATEGORYBYBRAND,

	// Count Orders and Patient
	GETPATIENTORDERCOUNTTOADMIN,
	GETDOCTORORDERCOUNTTOADMIN,
	GETDOCTORPRODUCTCOUNTTOADMIN,
	GETPATIENTPRODUCTCOUNTTOADMIN,
	GET_DOCTOR_INVOICE,
	GET_PATIENT_INVOICE,
	GETDOCTORALLBRANDBYCATEGORY,
	GETSELLERHISTORY,
	GETHISTORYSELLERLIST,
	SENDCHECKOUTNOTIFICATION,
	SENDCARTNOTIFICATION,
	UPDATESHOWTOSELLER,

	CHECKPOSITIONEXSIT,
	ADDANDUPDATETOPPRACTITIONER,
	DELETETOPPRACTITIONER,
	ALLTHERPISTLIST,
	CHECKBANNERPOSITIONEXSIT,
}
