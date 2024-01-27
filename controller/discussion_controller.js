const mongoose = require('mongoose');
// const Post = require('../models/post');
// const Comment = require('../models/comment');

// const Channel = require('../models/admin');

// module.exports.home = function(req, res){
//     res.render('home.ejs');
// }

const Post = require('../models/post');
const User =  require('../models/user');

module.exports.discussion = async function(req, res){

    try{
        //populate the user of each post
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        },
        
    }).populate('likes');

    let users = await User.find({});

    return res.render('discussion', {
        title: "Discussion",
        posts: posts,
        all_users: users 
    });

    }catch(err){
         console.log('Error', err);
         return;
    } 
}