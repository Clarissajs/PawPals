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

app.post('/listings', (req,res) => {
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

app.post('/login', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  db.userExists(email, (err, exists) => {
    if(!exists){
      res.status(404);
      res.send('Username does not exist');
    } else {
      db.grabUserData(email, (err, person) => {
        if(sha256(person.salt + password) === person.hashPass){
          var cookie = helper.setCookieSession(person.email);
          res.cookie('session',cookie, { maxAge: 900000, httpOnly: true });
          res.status(201);
          var sanitizedPerson = person;
          console.log('hash and salt in client response set to ""');
          sanitizedPerson['hashPass'] = '';
          sanitizedPerson['salt'] = '';
          res.send(sanitizedPerson);
        } else{
          res.status(401);
          res.send('Invalid password');
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
  var createCookie = (err) => {
    if (err !== null) {
      console.log('err is', err);
    } else {
      var cookie = helper.setCookieSession(email);
      res.cookie('session',cookie, { maxAge: 900000, httpOnly: true });
    }
    res.status(201);
    res.send({
      email: email,
      firstName: firstName,
      lastName: lastName
    });
  }
  db.userExists(email, (err, exists) => {
    if(exists){
      console.log('Username already taken');
      res.send(302);
    } else {
      let salt = crypto.randomBytes(32).toString('hex');
      let hashPass = sha256(salt+pass);
      db.saveNewUser({
        '_id': email,
        email: email,
        firstName: firstName,
        lastName: lastName,
        hashPass: hashPass,
        salt:salt,
        provider: false,
        cats: 0,
        dogs: 0,
        birds: 0,
        reptiles: 0,
        otherPets: 0
      }, createCookie);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
