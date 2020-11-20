var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Made it")
  res.send({ result: "Got a result"});
  // req.app.locals.db.collection('listingAndReviews').findOne('').then(result => {
  //
  // });
});

module.exports = router;
