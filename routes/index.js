var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if('collection' in req.query){
        let collection = req.query.collection;
        if('id' in req.query){
            let id = require('mongodb').ObjectID(req.query.id);
            req.app.locals.db.collection(collection).findOne({_id : id}).then(result => {
                res.send(result)
            });
        } else {
            req.app.locals.db.collection(collection).find().toArray().then(result => {
                res.send(result)
            });
        }
    }
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
