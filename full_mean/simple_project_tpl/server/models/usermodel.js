// Create schema and register it as a model
// Using mongoose to enfore a schema on top of mongoDB which doesn't realy
// offer it natively.
console.log('>> Loading: "server/models/usermodel.js"')

// require the mongoose module
var mongoose = require('mongoose')

// to make a model, you can first define a schema, which is just the BLUEPRINT for a model

// var UserSchema = new mongoose.Schema({
//   first_name: { type: String, required: true, minlength: 6, required: true },
//   last_name: { type: String, required: true, maxlength: 20, required: true },
//   age: { type: Number, min: 1, max: 150 },
//   email: { type: String, required: true }
// }, {timestamps: true })

// register schema as a model
// var User = mongoose.model('User', UserSchema)
