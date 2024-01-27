const mongoose = require('mongoose');
const path = require('path')
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment')


module.exports.area = async function(req, res){
    let posts = await Post.find({})
 
    return res.render('area', {
        title: "Area",
        // posts: posts,
    
    });
}

