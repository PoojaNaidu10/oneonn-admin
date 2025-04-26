import Vue from '../sessionManager'
import APIBuilder from '../APIBuilder'
import URLConstant from '../urlConstant'

const vue = new Vue()

function getTicket(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.GETALLTICKET, data)
}

function updateTicketStatus(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.UPDATETICKETSTATUS, data)
}

export default {
	getTicket,
	updateTicketStatus,
}
