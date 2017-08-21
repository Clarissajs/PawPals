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
  firstName: String,
  lastName: String,
  email: String,
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
  profileImage: Number, // <-- Image ?
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

const Session = mongoose.model('Session', userSchema);

const saveNewUser = (userData) => {
  console.log('data in helper: ', userData)
  var newUser = new User(userData);
  newUser.save(function (err) {

    if (err) { console.log('Database save failed: ', err) }
    else { console.log('Database saved successfully'); }
  });
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

const saveNewCookie = (cookie, username) => {
  var newSession = new Session({cookie, username}).save(() => {
    if (err) {
      console.log('Database save failed: ', err);
    } else {
      console.log('Database saved successfully')
    }
  });

}

module.exports.grabUserData = grabUserData;
module.exports.saveNewUser = saveNewUser;
module.exports.userExists = userExists;
module.exports.retrieveAllUsers = retrieveAllUsers;
module.exports.saveNewCookie = saveNewCookie;
