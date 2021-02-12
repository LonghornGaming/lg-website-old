var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let collection = req.query.collection;
    // For PlayerCard stuff that we aren't doing anymore maybe
    // req.app.locals.db.collection(collection).findOne({"name" : search}).then(result => {
    //     res.send(result);
    // });
    req.app.locals.db.collection(collection).find().toArray().then(result => {
        console.log(result)
        res.send(result)
    })
});

router.post('/', (req, res) => {
    //mom's spaghetti
    let json = JSON.parse(Object.keys(req.body)[0]);
    //check if form is an email
    if('email' in json){
        //store email in mongo
        let email = {
            email: json.email
        }
        req.app.locals.db.collection('emails').insertOne(email);
    }
    //mess with JSON here
    res.send("200")
});

module.exports = router;
