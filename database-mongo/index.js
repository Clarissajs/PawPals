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
  username: String
});

const User = mongoose.model('User', userSchema);

const saveNewUser = (userData, callback) => {
  var newUser = new User({
    _id: userData['email'],
    email: userData['email'],
    firstName: userData['firstName'],
    lastName: userData['lastName'],
    phoneNumber: userData['phoneNumber'],
    hashPass: userData['hashPass'],
    salt: userData['salt']
  });
  newUser.save((err) => {
    console.log('err is', err);
    if (err) { callback(err); }
    else { callback(null); }
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
const Session = mongoose.model('Session', userSchema);

const saveNewCookie = (cookie, username) => {
  var newSession = new Session({cookie, username}).save((err) => {
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

// const userSchema = mongoose.Schema({
//   _id: String,
//   firstName: String,
//   lastName: String,
//   email: String,
//   hashPass: String,
//   salt: String,
//   phoneNumber: String,
//   bio: String,
// 	state: String,
// 	zip: Number,
// 	street: String,
// 	city: String,
//   lat: Number,
//   longi: Number,
//   provider: Boolean,
// 	// pets: { cats: aNumber, dogs: aNumber, birds: aNumber, reptiles: aNumber, other: aNumber },
//   pets: mongoose.Schema.Types.Mixed,
//   profileImage: {data: Buffer, contentType: String}, //image
// });
//
// // const petSchema = mongoose.Schema({
// //   _id: String,
// //   name: String,
// //   type: String,
// //   image: {data: Buffer, contentType: String}
// // });
//
// const sessionSchema = mongoose.Schema({
//   _id: String,
//   cookie: String,
//   email: String
// });
//
// const User = mongoose.model('User', userSchema);
//
// const saveNewUser = (userData, callback) => {
//     var newUser = new User({
//       _id: userData['email'],
//       email: userData['email'],
//       firstName: userData['firstName'],
//       lastName: userData['lastName'],
//       phoneNumber: userData['phoneNumber'],
//       hashPass: userData['hashPass'],
//       salt: userData['salt']
//     });
//     newUser.save(function (err) {
//       if (err) { console.log('database save failed', err) }
//       else { console.log('database saved!'); }
//       });
//     callback();
// }
//
// const userExists = (email, callback) => {
//   User.findOne({"email": email}, (err, person) => {
//     if (err) {
//       callback(err);
//     }
//     else if (!person) {
//       callback(err, false);
//     } else {
//       callback(err, true);
//     }
//   })
// }
//
// const updateUser = (email, info, callback) => {
//   User.findOneAndUpdate({ "_id": email }, {
//     $set: {
//       "bio": info["bio"],
//       "state": info["state"],
//       "zip": info["zip"],
//       "street": info["street"],
//       "city": info["city"],
//       "lat": info["lat"],
//       "longi": info["longi"],
//       "provider": info["provider"]
//     }
//   }, {upsert: true, "new": true}).exec((err, doc) => {
//     if(err) {
//       callback(err);
//     } else {
//       callback(err, doc);
//     }
//   })
// }
//
// const retrieveAllProviders = (callback) => {
//   User.find({"provider": true}, (err, provider) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, provider);
//     }
//   })
// }
//
// // NOT WORKING CORRECTLY NOW
//
// const retrieveProvidersByZipCodes = (zipCodes, callback) => {
//   var array = [];
//   for (var i = 0; i < zipCodes.length; i++) {
//     console.log('zipCodes[i] is', zipCodes[i]);
//     User.find({"zip": zipCodes[i], "provider": true}, (err, userInfo) => {
//       if (err) {
//         console.log('err is', err);
//       } else {
//         console.log('userInfo is', userInfo);
//         array.concat(userInfo);
//         console.log('array is', array);
//       }
//     });
//     callback(array);
//   }
// }
//
// const retrieveAllUsers = (callback) => {
//   User.find((err, user) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, user);
//     }
//   })
// }
//
// const grabUserData = (email, callback) => { //single user data: will return null if not found
//   User.findOne({"email": email}, (err, person) => {
//     if(err) {
//       console.log('grab user data error', err);
//     } else {
//       callback(err, person);
//     }
//   });
// }
//
// const Session = mongoose.model('Session', sessionSchema);
//
// const saveNewSession = (sessionData, callback) => {
//     var newSession = new Session({
//       _id: sessionData['email'],
//       email: sessionData['email'],
//       cookie: sessionData['cookie']
//     });
//     newSession.save(function (err) {
//       if (err) {
//         console.log('err is', err);
//         callback(err)
//       }
//       else {
//         console.log('saved session successfully');
//         callback(err);
//       }
//     });
// }
//
// const userSessionExists = (cookie, callback) => {
//   Session.findOne({"cookie": cookie}, (err, cookieID) => {
//     if (err) {
//       callback(err);
//     }
//     else if (!cookieID) {
//       callback(err, null);
//     } else {
//       callback(err, cookieID['email']);
//     }
//   })
// }
//
//
// module.exports.grabUserData = grabUserData;
// module.exports.saveNewUser = saveNewUser;
// module.exports.userExists = userExists;
// module.exports.retrieveAllUsers = retrieveAllUsers;
// module.exports.userSessionExists = userSessionExists;
// module.exports.saveNewSession = saveNewSession;
// module.exports.updateUser = updateUser;
// module.exports.retrieveAllProviders = retrieveAllProviders;
// module.exports.retrieveProvidersByZipCodes = retrieveProvidersByZipCodes;
