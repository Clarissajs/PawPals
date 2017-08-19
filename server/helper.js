const crypto = require('crypto');
const db = Promise.promisifyAll(require('../database-mongo'));


var setCookieSession = function(username) {
  let cookie = crypto.randomBytes(32).toString('hex');
  // db.saveNewCookie(cookie, username);
  return cookie;
}

module.exports.setCookieSession = setCookieSession;
