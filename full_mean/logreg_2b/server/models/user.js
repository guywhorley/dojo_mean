console.log('>> loaded "./server/models/user.js"')

// make the code available
var mongoose = require('mongoose'), 
  bcrypt = require('bcrypt-nodejs')

// define new schema with validations
var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minlength: 2, maxlength: 256, trim: true },
  last_name: { type: String, required: true, minlength: 2, maxlength: 256, trim: true },
  email: { type: String, required: true, unique: true, minlength: 6, maxlenght: 256, trim: true },
  password: { type: String, required: true, minlength: 8, maxlength: 256, trim: true }
}, { timestamps: { // ALIASES
      createdAt: 'created_at', 
      updatedAt: 'updated_at' 
   }
 });

// BCRYPT Check Password Match
// add a new method to userschema 
UserSchema.methods.validPassword = function(enteredPassword) {
  // you must save the results of the comparison 
  var same = bcrypt.compareSync(enteredPassword, this.password)
  return same;
}

// Mongoose Pre/Post methods --- allows you to define custom code to run before and after save 

// pre-save hook - generate hash prior to save
UserSchema.pre('save', function (next) {
  var user = this 
  bcrypt.genSalt(10, function(err,salt) {
    if (err) { console.log(">> error during generateSalt")}
    else { // bcrypt-node.js syntax
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        user.password = hash
        next()
      })
    }
  })
})

// register the schema as a model that can be used in the code
mongoose.model('User', UserSchema)