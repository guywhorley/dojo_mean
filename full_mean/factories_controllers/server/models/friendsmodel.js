// Create schema and register it as a model
// Using mongoose to enfore a schema on top of mongoDB which doesn't realy offer it natively.
console.log('>> Loading: "server/models/friendsmodel.js"')
// require the mongoose module
var mongoose = require('mongoose')

// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var FriendSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 4 }
}, { // set up attribute aliases as follows:
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

// register schema as a model
// creation IF schema passed in otherwise is a getter
mongoose.model('Friend', FriendSchema)
