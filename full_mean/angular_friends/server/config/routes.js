// Routes configuration
console.log('>> Loading: "server/config/routes.js"')

// interacting with controller
var friendsController = require('./../controllers/friendscontroller')

module.exports = function (app) {
  app.get('/friends', friendsController.index)
  app.get('/friends/:id', friendsController.show)
  app.post('/friends', friendsController.create)
  app.put('/friends/:id', friendsController.update)
  app.delete('/friends/:id', friendsController.delete)
}
