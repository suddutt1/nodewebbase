/**
 * Created by SUDDUTT1 on 3/18/2016.
 */
// Main entry file for Portfolio Web application
const express = require('express') ;
const router = express.router;
const bodyParser = require('body-parser');
const session = require('express-session');
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
var port = 3000;

const home  = require('./modules/home/index.js');
const login  = require('./modules/login/index.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret'
}));

app.use('/login',login);

app.all('*',checkLogin);
function checkLogin(req,res,next){

    //Check if session data exists 
    //if not redirect user to login page
    var ss  = req.session;
    if(ss.user)
    {
        next();
    }
    else
    {

        res.redirect('/login');
    }
}
app.use(express.static(__dirname + '/public'));


app.use('/home',home);
app.use(function( req, res, next) {
    //console.error(err.stack);
    res.status(500).send('Something broke!');
});

//Start the server
if(appEnv && appEnv.port)
{
    port = appEnv.port;
}

app.listen(port, function () {
    console.log('server starting on ' + appEnv.url);
});



