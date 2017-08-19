
var setCookie(username){
  let cookie = crypto.randomBytes(32).toString('hex');
  db.saveNewCookie(cookie, username);
  console.log('cookie created successfully');
  return cookie;
}

modules.export.setCookie
