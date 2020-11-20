var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let collection = req.query.collection;
  let search = req.query.search;
   req.app.locals.db.collection(collection).findOne({"name" : search}).then(result => {
       res.send(result);
   });
});

module.exports = router;
