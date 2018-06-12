"use strict";
// Express packages
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
app.use(cors()); // Allow cross-origin-referneces

// Database packages
const mongoose = require('mongoose');

// Authentication packages
const passport = require('passport');
const expressSession = require('express-session');

// Configure express (body-parser)
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

// Configure express (sessions)
app.use(expressSession({
    secret: 'mySecretKey',
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: false
    }  
}))

// Configure database
mongoose.connect('mongodb://admin:password1@ds053156.mlab.com:53156/random-sundry');

// Configure passport
require('./passport')(passport); // pass passport to config/passport.js
app.use(passport.initialize());
app.use(passport.session());

// listen
app.listen(port);
console.log('Listening on port ' + port);





// API - GET - Random Weapon
app.get('/api/random-weapon', (req, res) => {
    const weapon = require('./weapons/weaponGen')();
    res.send(weapon);
})

// API - GET - Random Ruins
app.get('/api/random-ruin', (req, res) => {
    const ruins = require('./ruins/ruinsGen')();
    res.send(ruins);
})




// AUTH - POST - Signup / Register
app.post('/auth/register', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        console.log('info:')
        console.log(info);
      if (err) { return next(err); }
      if (!user) { return res.json(info); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success: 'You have successfully signed up.', username: user.local.username});
      });
    })(req, res, next);
  });


// AUTH - POST - Signup / Register
app.post('/auth/login', function(req, res, next) {
    console.log('Logging user in...')
    passport.authenticate('local-login', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json(info); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success: 'You have successfully logged in.', username: user.local.username});
      });
    })(req, res, next);
  });

// // AUTH - GET - Login
// app.get('/auth/login', (req, res) => {
//     console.log('Logging user in...')
//     if (!req.user){
//         // If not valid user, return failure message
//         res.send({ message: 'Invalid username/password.'});
//     }
//     req.login(user, (err) => {
//         // Else, log in
//         if (err) { return next(err); }
//         res.send({isLoggedIn = true, username});
//     })
// })

// AUTH - GET - Log Out
app.get('/auth/logout', (req, res) => {
    console.log('Logging user out...');
    req.session.destroy();
    res.send('Session ended.')
})

// AUTH - GET - Validates cookies
app.get('/auth/validate', (req, res) => {
    console.log('Validating cookies...')
    const isLoggedIn = req.isAuthenticated();
    const username = req.user ? req.user.local.username : '';
    if (!isLoggedIn){
        console.log('No cookies found!');
    }
    res.send({isLoggedIn, username});
})




// Direct all other routes to index.html

app.get('*', function (req, res){
    console.log('Loaded page. User is' + req.user);
    console.log(req.isAuthenticated())
    res.sendFile(path.resolve(__dirname +'/../..', 'public', 'index.html'))
})




