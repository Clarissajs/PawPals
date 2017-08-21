const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const sha256 = require('sha256');
const crypto = require('crypto');
const helper = require('./helper.js');

var app = express();
app.use(express.static(__dirname + '/../client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let cookieExample = {
  session: crypto.randomBytes(32).toString('hex'),
  timeOut: 444

}



app.get('/', (req, res) => {
  // if cookie check database
  if(req.cookies.session !== undefined){
    var email = db.userSessionExists(reg.cookies.session);
  }
    // if cookie matches login have user have session
    // it not remove session from database and assign new cookie and session
  // if no cookie assign one and create session
});

app.get('/listings', (req,res) => {

  db.grabUserData(req.body.email, (err, person) => {
    helper.getNearbyZips(person.zipcode, req.body.searchRadius)
    .then((zipcodes) => {
      db.retrieveUsersByZipcodes(zipcodes, (users => {
        users.sort(function(a, b) {
          return helper.distanceBetween(person, a) - helper.distanceBetween(person, b);
        });
        res.send(users);
      }))
    })
    .catch((error) => {console.log(error);})
  })
});


app.get('/login', (req, res) => {
  var email = req.body.email.toUpperCase(); //make sure unique users
  var password = req.body.password;
  db.userExists(email, (err, exists) => {

    if(!exists){
      console.log('Useranme does not exist');
    } else {
      db.grabUserData(email, (err, person) => {
        if(sha256(person.salt + password) === person.hashPass){
          console.log('we are logged in');
          var cookie = helper.setCookieSession(person.email);
          console.log(cookie);
          res.cookie('session',cookie, { maxAge: 900000, httpOnly: true });
          console.log('cookie created successfully');
        } else{
          console.log("that isn't the correct Password ");
          res.send(person);
        }
      });
    }
  });
});

app.post('/signup', (req, res) => {
  var email = req.body.email;
  var pass = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  db.userExists(email, (err, exists) => {
    if(exists){
      console.log('Username already taken');
      res.send(302);
    } else {
      let salt = crypto.randomBytes(32).toString('hex');
      let hashPass = sha256(salt+pass);
      db.saveNewUser(JSON.stringify({
        email: email,
        firstName: firstName,
        lastName: lastName,
        hashPass: hashPass,
        salt:salt
      })); // make sure this lines up with clarissa's entry function
      var cookie = helper.setCookieSession(email);
      res.cookie('session',cookie, { maxAge: 900000, httpOnly: true });
      console.log('cookie created successfully');
    }

  });
    res.send(201);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
