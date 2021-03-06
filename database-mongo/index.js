const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pawpals');

const db = mongoose.connection;


db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  _id: String,
  firstName: String,
  lastName: String,
  email: String,
  hashPass: String,
  salt: String,
  phoneNumber: String,
  bio: String,
  state: String,
  zip: Number,
  street: String,
  city: String,
  lat: Number,
  longi: Number,
  provider: Boolean,
  cats: Number,
  dogs: Number,
  birds: Number,
  reptiles: Number,
  otherPets: Number,
  //pets: mongoose.Schema.Types.Mixed, //if pets should be an object
  profileImage: {data: Buffer, contentType: String}
});

const petSchema = mongoose.Schema({
  name: String,
  type: String,
  image: {data: Buffer, contentType: String}
})

const sessionSchema = mongoose.Schema({
  _id: String,
  cookie: String,
  email: String
});

const User = mongoose.model('User', userSchema);

const saveNewUser = (userData, callback) => {
  var newUser = new User({
    '_id': userData['email'],
    email: userData['email'],
    firstName: userData['firstName'],
    lastName: userData['lastName'],
    hashPass: userData['hashPass'],
    salt: userData['salt'],
    provider: userData['provider'],
    cats: userData['cats'],
    dogs: userData['dogs'],
    birds: userData['birds'],
    reptiles: userData['reptiles'],
    otherPets: userData['otherPets']
  });
  newUser.save((err) => {
    // console.log('err is', err);
    if (err) { callback(err); }
    else { callback(null); }
  });
}

const userExists = (email, callback) => {
  User.findOne({"email": email}, (err, person) => {
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

const grabUserData = (email, callback) => { //single user data: will return null if not found
  User.findOne({"email": email}, (err, person) => {
    if(err) {
      console.log('DB: grab user data error', err);
    } else {
      callback(err, person);
    }
  });
}
const Session = mongoose.model('Session', sessionSchema);

const saveNewCookie = (sessionData) => {
    var newSession = new Session({
      _id: sessionData['cookie'],
      cookie: sessionData['cookie'],
      email: sessionData['email']
    });
    newSession.save(function (err) {
      if (err) {
        console.log('DB saveNewCookie err is', err);
      }
      else {
        console.log('DB: saved new cookie successfully');
      }
    });
}

const userSessionExists = (cookie, callback) => {
  Session.findOne({"cookie": cookie}, (err, cookieID) => {
    if (err) {
      callback(err);
    }
    else if (!cookieID) {
      callback(err, null);
    } else {
      callback(err, cookieID['email']);
    }
  })
}

const removeSession = (session) => {
  Session.find({"cookie": session}).remove().exec();
}

const retrieveUsersByZipcodes = (zipArr, callback) => {
  let usersArr = [];
  User.find({zip: {$in: zipArr }, provider: true}, (err, users) => {
    if(err){
      console.log('retrive users by zipcode error', err);
    } else {
      callback(err, users);
    }
  });
}

module.exports.grabUserData = grabUserData;
module.exports.saveNewUser = saveNewUser;
module.exports.userExists = userExists;
module.exports.retrieveAllUsers = retrieveAllUsers;
module.exports.saveNewCookie = saveNewCookie;
module.exports.userSessionExists = userSessionExists;
module.exports.removeSession = removeSession;
module.exports.retrieveUsersByZipcodes = retrieveUsersByZipcodes;
