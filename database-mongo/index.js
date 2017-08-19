const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pawpals');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

// all the fields we'd like
// const userSchema = mongoose.Schema({
//   _id: Number,
//   username: String,
//   name: String,
//   firstName: String,
//   lastName: String,
//   email: String,
//   hashPass: String,
//   salt: String
//   userType: String,
//   image: {data: Buffer, contentType: String},
//   pets: Array,
//   address: String,
//   zipcode: Number, //could be string
//   servicesOffered: Array,
//   preferences: Array
// });

// MVP version
const userSchema = mongoose.Schema({
  _id: Number,
  username: String,
  name: String,
  firstName: String,
  lastName: String,
  email: String,
  hashPass: String,
  salt: String
});

const petSchema = mongoose.Schema({
  name: String,
  type: String,
  image: {data: Buffer, contentType: String}
})

const sessionSchema = mongoose.Schema({
  cookie: String,
  username: String // defaults to null
});

const User = mongoose.model('User', userSchema);

const saveNewUser = (userData, callback) => {
  for (var i = 0; i < userData.length; i++) {
    var newUser = new User({
      _id: userData[i]['id'], // get mongodb to pass one in for us
      username: userData[i]['username'],
      firstName: userData[i]['firstName'],
      lastName: userData[i]['lastName'],
      email: userData[i]['email'],
      hashPass: userData[i]['hashPass'],
      salt: userData[i]['salt'],
    });
    newUser.save(function (err) {
      if (err) { console.log('database save failed', err) }
      else { console.log('database saved!'); }
      });
    callback(err);
  }
}

const userExists = (username, callback) => {
  User.findOne({"username": username}, (err, person) => {
    if (err) {
      callback(err);
    }
    else if (!person) {
      callback(err, false);
    } else {
      callback(err, true);
    }
  })
}

const retrieveAllUsers = (callback) => {
  User.find((err, user) => {
    if (err) {
      callback(err);
    } else {
      callback(err, user);
    }
  })
}

const grabUserData = (username, callback) => { //single user data: will return null if not found
  User.findOne({"username": username}, (err, person) => {
    if(err) {
      console.log('grab user data error', err);
    } else {
      callback(err, person);
    }
  });
}

module.exports.grabUserData = grabUserData;
module.exports.saveNewUser = saveNewUser;
module.exports.userExists = userExists;
module.exports.retrieveAllUsers = retrieveAllUsers;
