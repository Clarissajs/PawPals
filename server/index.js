const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const sha256 = require('sha256');
const crypto = require('crypto');
const helper = require('./helper.js');

var app = express();
app.use(express.static(__dirname + '/../client/build'));


let cookieExample = {
  session: crypto.randomBytes(32).toString('hex'),
  timeOut: 444

}



app.get('/', (req, res) => {
  // if cookie check database
  if(req.cookies.session !== undefined){
    var username = db.userSessionExists(reg.cookies.session);
  }
    // if cookie matches login have user have session
    // it not remove session from database and assign new cookie and session
  // if no cookie assign one and create session
});

app.get('/listings', (req,res) => {
  db.retrieveAllUsers((users => {
    res.send(users);
  }))

});


app.get('/login', (req, res) => {
  var username = req.param('username').toUpperCase();
  var password = req.param('password');
  db.userExists(username, (err, exists) => {

    if(!exists){
      throw new Error ('Useranme does not exist');
    } else {
      db.grabUserData(username, (err, person) => {
        if(sha256(userData.salt + password) === userData.hashPass){
          console.log('we are logged in');
          alert('you have logged in');
          var cookie = helper.setCookieSession(userData.username);
          console.log(cookie);
          res.cookie('session',cookie, { maxAge: 900000, httpOnly: true });
          console.log('cookie created successfully');
        } else{
          console.log("that isn't the correct Password ");
          res.redirect('/login');
        }
      });
    }
  });
});

app.post('/signup', (req, res) => {
  var username = req.query.username.toUpperCase();
  var pass = req.query.password;
  throw('we have requsted a signup');
  var email = req.query.email;
  userExists(username, (err, exists) => {
    if(exists){
      throw new Error ('Useranme already taken');
      res.redirect('/singup');
      res.send(302); //
    } else {
      let salt = crypto.randomBytes(32).toString('hex');
      let hashPass = sha256(salt+pass);
      db.saveNewUser(JSON.stringify({username: username, email: email, hashPass: hashPass, salt:salt})); // make sure this lines up with claiassas entry function
      var cookie = helper.setCookieSession(username);
      alert(helper.setCookieSession(username));
      res.cookie('session',cookie, { maxAge: 900000, httpOnly: true });
      console.log('cookie created successfully');
    }

  });
    res.send(201);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
