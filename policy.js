'use strict';

const fs = require('fs')

var pa_readAny   = {action:"read",   records:"any", fields:"*", limit:{amount:-1, rule:""}};
var pa_createAny = {action:"create", records:"any", fields:"*", limit:{amount:-1, rule:""}};
var pa_updateAny = {action:"update", records:"any", fields:"*", limit:{amount:-1, rule:""}};
var pa_deleteAny = {action:"delete", records:"any", fields:"*", limit:{amount:-1, rule:""}};

var admin_activity = {resource:"Activity", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_app = {resource:"App", policies:[
        pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_appRating = {resource:"AppRating", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_award = {resource:"Award", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_device = {resource:"Device", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_favApp = {resource:"FavouriteApp", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_login = {resource:"Login", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_mentor = {resource:"Mentor", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_passwordHint = {resource:"PasswordHint", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_payment = {resource:"Payment", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_profileAward = {resource:"ProfileAward", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_score = {resource:"Score", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_subscription = {resource:"Subscription", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_assignment = {resource:"Assignment", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_pupilTask = {resource:"PupilTask", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_theme = {resource:"Theme", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_user = {resource:"User", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_voucher = {resource:"Voucher", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_activityTargetTable = {resource:"ActivityTargetTable", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_activityType = {resource:"ActivityType", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_appSettings = {resource:"AppSettings", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_country = {resource:"Country", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_currency = {resource:"Currency", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_datatype = {resource:"DataType", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_deviceType = {resource:"DeviceType", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_language = {resource:"Language", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_os = {resource:"OS", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_paymentMethod = {resource:"PaymentMethod", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_translation = {resource:"Translation", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_userTitle = {resource:"UserTitle", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_group = {resource:"Group", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_pupilGroup = {resource:"PupilGroup", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_announcement = {resource:"Announcement", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_appComments = {resource:"AppComments", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_forumCategory = {resource:"ForumCategory", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_forumThread = {resource:"ForumThread", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

var admin_forumReply = {resource:"ForumReply", policies:[
    pa_readAny, pa_createAny, pa_updateAny, pa_deleteAny]};

//********* Roles ***************//

//Admin role		
var admin_role = {role:"Admin", inherits:"", grant:[
    admin_activity, admin_activityType, admin_activityTargetTable. admin_activityType, admin_announcement, admin_app, admin_appComments,
    admin_appRating, admin_appSettings, admin_assignment, admin_award, admin_country, admin_currency, 
    admin_datatype, admin_device, admin_deviceType, admin_favApp, admin_forumCategory, admin_forumReply,
    admin_forumThread, admin_group, admin_language, admin_login, admin_mentor, admin_os, admin_passwordHint, 
    admin_payment, admin_paymentMethod, admin_profileAward, admin_pupilGroup, admin_pupilTask, admin_role, 
    admin_score, admin_subscription, admin_theme, admin_translation, admin_user, admin_userTitle, admin_voucher
]};  
        
var schema = {accesscontrol:[admin_role]};

fs.writeFile("semsem_rbac.json", JSON.stringify(schema), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("schema was saved!");
}); 
