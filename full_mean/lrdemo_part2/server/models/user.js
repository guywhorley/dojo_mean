console.log('>> Loaded "server/models/user.js"')

// 1. create schema for user
var mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs') // the windows-friendly bcrypt

// 2. define schema
var UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minlength: 2, maxlenght: 256},
  last_name: {type: String, required: true, minlength: 2, maxlength: 256},
  email: {type: String, required: true, minlength: 6, maxlength: 256, unique: true},
  password: {type: String, required: true, minlength: 8, maxlength: 256}
}, {timestamps: true})

// 2.5 Pre-save and compare password to hash
UserSchema.methods.validPassword = function (enteredPassword) {
  bcrypt.compareSync(enteredPassword, this.password)
}

UserSchema.pre('save', function (next) {
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      console.log('>> Error during password password encrypt!')
    } else {
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        user.password = hash
        next()
      })
    }
  })
})

// 3. register schema as a model
mongoose.model('User', UserSchema)
