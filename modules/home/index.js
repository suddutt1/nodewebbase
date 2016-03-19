/**
 * Created by SUDDUTT1 on 3/18/2016.
 */



var express = require('express');
var router = express.Router();

router.get("/",function(request,response){

    response.send("From Home");
});
router.get("/notification",function(request,response){

    response.send("From Home Notification");
});
module.exports = router;