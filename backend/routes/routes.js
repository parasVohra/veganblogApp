const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Comment = require('../models/comment')

const fs = require('fs');

const axios = require('axios');

const PostApi = 'https://jsonplaceholder.typicode.com';

var showTimeStamp = function (timeStamp){
    var date = new Date();
    var fixDate = Date.now();
    var secondSpend = Math.floor((Date.now() - timeStamp)/1000)
    var minSpend = Math.floor((Date.now() - timeStamp)/60000);
    var hourSpend = Math.floor((Date.now() - timeStamp)/(60*60*1000));
    var days =  Math.floor(hourSpend / 24) ;
    var months =  Math.floor(days / 30);
    var years =  Math.floor(months / 12);    
     if (years > 0){
         timePast = years > 1 ? years + " years": years + " year";
     }
     else if(months > 0){
         timePast = months > 1 ? months + " months":  months + " month";
     }
     else if(days > 0 ){
         
         timePast = days > 1 ? days + " days": days + " day";
     }
     else if(hourSpend > 0){
         timePast = hourSpend > 1 ? hourSpend + " hours": hourSpend + " hour";
     }
     else if(minSpend > 0){
         timePast = minSpend + " min"
     }
     else{
         timePast = secondSpend + " sec"
     }

     return timePast;
}

// Get Post

router.get('/',(req, res) => {
   axios.get(`${PostApi}/posts`).then(posts =>{
       res.status(200).json(posts.data);
   })
   .catch(error =>{
       res.status(500).send(error);
   })
})


router.post('/fuck', (req, res) => {
    
    var obj = JSON.parse(fs.readFileSync('./backend/appData/blogData.json', 'utf8'));
    console.log(req.body);
    res.send(obj)
})

router.post('/comment',(req,res) =>{
    var data = req.body;
    var date = new Date();

    var newComment = new Comment({
        name: data.name,
        type: data.type,
        timeStamp: date.toDateString(),
        typeID: data.typeID,
        content: data.content
    })

    newComment.save()
        .then(Comment.findOne({name: data.name}))
        .then(Comment.find({},function(err, comments){
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log('res data' + comments )
                res.send(comments)
    
                return;
            }
        }))
})


router.post('/Comments',(req, res) =>{
    console.log("got request at server")
    var data = req.body
    
    console.log(data);
    Comment.find({type : data.pageType , typeID : data.pageId}, function(err, comments){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log('res data' + comments )
            res.send({comments})
            return;
        }
    })
   
})

router.post('/deleteAll',(req,res)=>{
    Comment.remove({}, function(err, msg){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log(msg);
            return;
        }
    })
})

router.post('/deleteOne',(req,res)=>{

    var data = req.body
    console.log(data.name);

    Comment.deleteOne({name: data}, function(err, msg){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log(msg);
            res.send({msgs:'deleted'})
            return;
        }
    })
    
})




module.exports = router;



