exports.render = function(req, res) {

  // if (req.session.clickCount) {
  //   console.log(">> Last visit: ", req.session.lastVisit);
  // }
  // req.session.lastVisit = new Date();

  res.render('index', {
    title: 'Cats vs. Dogs Great Button Game'
  });
};
