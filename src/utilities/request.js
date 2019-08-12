
/**
 * Wrapper for ajax post request
 * @param  {String} url             request url
 * @param  {object} headers         request headers
 * @param  {object} data            data to be sent
 * @param  {function} successCallback function to be executed on request success
 * @param  {function} failCallback    function to be executed on request fail
 * @param  {boolean} processData     set this to true when passing data as an object
 * @param  {boolean} async           set this to true when making synchronous request
 * @param  {object} scopeTest       reference object if any to be accessed in the callback
 */
var postRequest = function(url,headers,data,successCallback,completeCallback,beforeSendCallback,failCallback,processData,async,scopeTest,contentType){
    $.ajax({
        method: "POST",
        url: url,
        headers: headers,
        data: data,
        scopeTest: scopeTest,
        processData:processData,
        success: successCallback,
        complete: completeCallback,
        beforeSend: beforeSendCallback,
        async: async,
        contentType: contentType
    });
};

// var postRequest = function(url,headers,data,processData,async,scopeTest) {
//     return new Promise(function(resolve,reject) {
//      $.ajax({
//         method: "POST",
//         url: url,
//         headers: {
//             appID: null,
//             version: null,
//             empID: null,
//             token: null
//         },
//         data: data,
//         scopeTest: scopeTest,
//         processData: processData,
//         success: resolve,
//         error: reject,
//         async: async
//     });
//  });
//}

/**
 * Wrapper for ajax get request
 * @param  {String}   url                  request url
 * @param  {object}   parameters           request parameters
 * @param  {Function} callback             function to be invoked on request success
 * @param  {object}   additionalParameters reference object if any to be accessed in the callback
 */
var getRequest = function(url,parameters,headers,beforeSendCallback,successCallback,errorCallback,completeCallback,additionalParameters,showError){
      $.ajax({
        method: "GET",
        url: url,
        data: parameters,
        headers: headers,
        additionalParameters: additionalParameters,
        success: successCallback,
        complete: completeCallback,
        beforeSend: beforeSendCallback
        //error: showError
    });
}