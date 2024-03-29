const mongoose = require('../config/mongoose');
// const fs = require('fs');
const path = require('path');
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')

// render the sign up page
module.exports.signUp = function(req, res){
    res.render('sign_up.ejs')
}


// render the sign in page
module.exports.signIn = function(req, res){
    res.render('sign_in.ejs')
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    return res.redirect('/users/sign-in');
}