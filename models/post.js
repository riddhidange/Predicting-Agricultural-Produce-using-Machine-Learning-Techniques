const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Posts_PATH = path.join('/uploads/posts');




const postSchema = new mongoose.Schema({
    content:{
        type : String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    //include the array of id's of all comments in thsi post schema
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Comment'  
        }
    ],
    image : {
        type : String
    }
},{
    timestamps : true
});

console.log("here");
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', Posts_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  })


postSchema.statics.uploadedPost = multer({storage: storage}).single('image');
postSchema.statics.postsPath = Posts_PATH;

const Post = mongoose.model('Post', postSchema);
module.exports = Post;