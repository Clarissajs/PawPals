const express = require('express');
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const db = Promise.promisify(require('../database-mongo'));
const sha256 = require('sha256');
const crypto = require('crypto');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  let cookie = crypto.randomBytes(32).toString('hex');
  res.send(cookie);
});

app.get('/login', (req, res) => {
  var username = req.param('username');
  var password = req.param('password');
  db.userExistsAsync(username)
    .then((exists) => {
      if(!exists){
        throw new Error ('Useranme does not exist');
      }
    })
    .then(() => {
      return db.grabUserDataAsync(username)
    })
    .then(userData => {
      if(sha256(userData.salt + password) === userData.hashPass){
        console.log('we are logged in');
        alert('you have logged in');
        // add username to Session schema to have user enter logged in status
      } else{
        console.log("that isn't the correct Password ");
        res.redirect('/login');
      }
    })
    .catch(e => {
      console.log(e);
      res.send(400);
    });
});

app.post('/signup', (req, res) => {
  var username = req.query.username;
  var pass = req.query.password;
  var email = req.query.email;
  db.userExistsAsync(username)
    .then((exists) => {
      if(exists){
        throw new Error ('Useranme already taken');
      }
    })
    .then(() => {
        let salt = crypto.randomBytes(32).toString('hex');
        let hashPass = sha256(salt+pass);
        db.saveNewUserAsync({username, email, hashPass, salt}) // make sure this lines up with claiassas entry function
      })
    .then(() => {
      res.send(201);
    })
    .catch((e) =>{
        console.log(e); // Holy Errors Batman
        res.send(400);
    })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
