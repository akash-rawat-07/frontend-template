import {hostname, botScriptHostname, genAIBEHostname} from "./Backend"

const endpoint = {
    login: `${hostname}/user_profile/login/`,
    fetchAllTenders: `${hostname}/tenders/all_tenders/`,
    tenderCount: `${hostname}/tenders/tender_count/`,
    manualCreateTender: `${hostname}/tenders/create_tender/`,
    addPqr: `${hostname}/tenders/add_pqrs/`,
    fetchPQRList: `${hostname}/tenders/tender_pqr`,
    editPQR: `${hostname}/tenders/edit_pqrs/`,
    triggerStatus: `${hostname}/tenders/trigger_status/`,
    triggerGenAI: (docID) => `${genAIBEHostname}/process_tender/${docID}/`,  // Gen AI Backend Trigger
    tenderStat: (docID) => `${hostname}/tenders/tenders/${docID}`,
    tenderInfo: (docID) => `${hostname}/tenders/tender_info/${docID}`,
    bidderDetail: (docID) => `${hostname}/tenders/bidders/${docID}`,
    uploadTenderDocument: (docID) => `${hostname}/tenders/${docID}/upload/`,
    uploadNewBidderDocument: (docID) => `${hostname}/tenders/${docID}/create_bidder/`,
    uploadExistingBidderDocument: (docID) => `${hostname}/tenders/${docID}/update_bidder/`,
    tenderDetails: (status) => `${hostname}/tenders/tenders_by_status/?status=${status}`,
    downloadFolder: (url) => `${hostname}/tenders/download-folder/?url=${url}`,
    triggerBot: `${hostname}/tenders/trigger-bot/`,
    pqrList: `${hostname}/tenders/pqr_list/`,
    botScript: `${botScriptHostname}/bot_script`,
    acceptPqr: (docID) => `${hostname}/tenders/accept_bidder_pqr/${docID}/`,
    declinePqr: (docID) => `${hostname}/tenders/decline_bidder_pqr/${docID}/`,
    editPqr: (docID) => `${hostname}/tenders/edit_bidder_pqr/${docID}/`,
    accept_bidder_all_pqrs: (docID) => `${hostname}/tenders/accept_all_pqrs/${docID}/`,
    decline_bidder_all_pqrs: (docID) => `${hostname}/tenders/decline_all_pqrs/${docID}/`,
    accept_all_bidders_all_pqrs: (docID) => `${hostname}/tenders/accept_all_bidder_pqrs/${docID}/`,
    decline_all_bidders_all_pqrs: (docID) => `${hostname}/tenders/decline_all_bidder_pqrs/${docID}/`,
    generate_tqs: (docID) => `${hostname}/tenders/generate_tqs/${docID}/`,
    generate_cs: (docID) => `${hostname}/tenders/generate_comparative_statement/${docID}/`,
    send_bidder_tqs_email: (docID) => `${hostname}/tenders/send_bidder_tqs_email/${docID}/`,
    createTenderV2: `${hostname}/tenders/create_tender_v2/`,
    addFirestoreData: `${hostname}/tenders/add_firestore/`,
}

export default endpoint