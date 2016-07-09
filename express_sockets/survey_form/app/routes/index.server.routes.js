module.exports = function(app) {
  var index = require('../controllers/index.server.controller');

  // -- root route --
  app.get('/', index.render);

  app.route('/index').get(function(req,res) {
     res.render("index");
  });

  // -- create --
  app.post('/surveys', function(req, res) {
    console.log("POST DATA", req.body);
    return res.render('show', { data: req.body});

      // name: req.body.name,
      // location: req.body.location,
      // language: req.body.language,
      // comment: req.body.comment,});
   });

};
