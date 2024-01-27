const express = require('express');
const port = 8000;
const path = require('path');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const multer = require('multer')
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const app = express();

// const fs = require('fs'),
//     RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;
 
    
  
// app.use(express.static(__dirname + '/uploads'));

const db= require('./config/mongoose');



app.use(express.urlencoded());
app.use(express.static(__dirname + '/assets'));
app.set('view engine','ejs');
app.set('views','./views');

app.use(cookieParser());




//mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
        mongooseConnection : db,
        autoRemove : 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok')
        }
    )  
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`Error ${err}`)

    }
    console.log("Server is ruuning on port:", port)
})

// const data = require('./assets/Crop_recommendation.json');
 
// var testdata = [{
//     "N": 90,
//     "P": 42,
//     "K": 43,
//     "temperature": "20.87974371",
//     "humidity": "82.00274423",
//     "ph": "6.502985292000001",
//     "rainfall": "202.9355362",
//     "label": "rice"
//   }
// ];
 
// var rf = new RandomForestClassifier({
//     n_estimators: 20,
//     random_state : 0
// });
 
// rf.fit(data, null, "species", function(err, trees){
//   //console.log(JSON.stringify(trees, null, 4));
//   var pred = rf.predict(testdata, trees);
 
//   console.log(pred);
 
//   // pred = ["virginica", "setosa"]
// });
