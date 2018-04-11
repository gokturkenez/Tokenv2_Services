/*
Author: Gokturk Enez
Mail: hi@gokturkenez.com.tr
Description: PayU Turkey Token v2 Services - Get Token Information
*/
Merchant =  "OPU_TEST";
SecretKey = "SECRET_KEY";
Token = "ae7200bf363a8ae7059e25fcf714e9b0";
var TimeStamp = Math.floor(Date.now() / 1000);

HashString = Merchant + TimeStamp;
var crypto = require('crypto')
    , data = HashString
    , secretkey = SecretKey

Signature = crypto.createHmac('sha256', secretkey).update(data).digest('hex')


EndPointURL = 'https://secure.payu.com.tr/order/token/v2/merchantToken/'+Token+"?merchant="+Merchant+"&timestamp="+TimeStamp+"&signature="+Signature

var request = require('request');
// Set the headers
var headers = {
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: EndPointURL,
    method: 'GET',
    headers: headers,
}

// Start the request
request(options, function (error, response, body) {
        console.log(body)
    }
)
