/**
 * Created by SUDDUTT1 on 3/18/2016.
 */

var express = require('express');
var router = express.Router();

router.get("/",function(request,response){


    var user = {};
    request.session.user = user;
    response.render('login/login' ,{ errorMsg: null});
});
router.post("/authenticate",function(request,response){

    response.send("Perform login action");
});


module.exports = router;