const crypto = require('crypto');
const db = require('../database-mongo');
const key = require('../config/api_keys');
const express = require('express');
const axios = require('axios');


var setCookieSession = function(email) {
  let cookie = crypto.randomBytes(32).toString('hex');
  db.saveNewCookie({cookie, email});
  return cookie;
}

var distanceBetween = function(user1, user2){
  return (user1.lat-user2.lat)*(user1.lat-user2.lat) +
         (user1.longi-user2.longi) * (user1.longi-user2.longi);
}

var getNearbyZips = function(zipcode, radius){
  return axios.get(`https://www.zipcodeapi.com/rest/${key.ZIP_CODE_API}/radius.json/${zipcode}/${radius}/mi`)
  .then(function (response) {
    var zipArr = [];
    let zips = response.data.zip_codes;
    for(let i = 0; i < zips.length; i++){
      zipArr.push(zips[i].zip_code);
    }
    return zipArr;
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports.setCookieSession = setCookieSession;
module.exports.distanceBetween = distanceBetween;
module.exports.getNearbyZips = getNearbyZips;
