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

router.post('/', (req, res) => {
    //mom's spaghetti
    let json = JSON.parse(Object.keys(req.body)[0]);
    //mess with JSON here
    res.send("200")
});

module.exports = router;
