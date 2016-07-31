console.log('>> loaded "./server/models/user.js"')

// make the code available
var mongoose = require('mongoose'), 
  bcrypt = require('bcrypt-nodejs')

// define new schema with validations
var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minlength: 2, maxlength: 256 },
  last_name: { type: String, required: true, minlength: 2, maxlength: 256 },
  email: { type: String, required: true, unique: true, minlength: 6, maxlenght: 256 },
  password: { type: String, required: true, minlength: 8, maxlength: 256 }
}, {timestamps: true})

// add a new method to userschema 
UserSchema.methods.validPassword = function(enteredPassword) {
  bcrypt.compareSync(enteredPassword, this.password)
}

// pre-save hook - generate hash prior to save
UserSchema.pre('save', function (next) {
  var user = this 
  bcrypt.genSalt(10, function(err,salt) {
    if (err) { console.log(">> error during generateSalt")}
    else { 
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        user.password = hash
        next()
      })
    }
  })
})

// register the schema as a model that can be used in the code
mongoose.model('User', UserSchema)