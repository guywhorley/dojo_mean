console.log('>> loaded "./server/config/routes.js"')

// a route requires a controller to route TO ... thus you must require the controller
var user = require('../controllers/users.js')

module.exports = function (app) {
  app.post('/register', user.register)
  app.post('/login', user.login)
  app.post('/logout', user.logout)
  app.get('/session', user.session)
}