const express = require('express');
const bodyParser = require('body-parser');
const db = Promise.promisify(require('../database'));
const sha256 = require('sha256');
const crypto = require('crypto');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {

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
        db.creatEntryAsync(username, email, hashPass, salt) // make sure this lines up with claiassas entry function
      })
    .then(() => {
      res.send(201);
    })
    .catch((e) =>{
        console.log(e); // Holy Errors Batman
    })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
