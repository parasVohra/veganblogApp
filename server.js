const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
const router = require('./backend/routes/routes')


//conection to mongodb
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://paras966:parasvohra966@cluster0-jjlz1.mongodb.net/test?retryWrites=true');

let db = mongoose.connection;

db.once('open', function(){
    console.log('connected with database')
})


//check for db error
db.on('error', function(err){
    console.log(err);
})


//getting our Posts routes
const posts = require('./backend/routes/routes') 



//enableing CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Using middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
app.use(express.static(path.join(__dirname,'dist/veganBlogApp')));

//catch all other routes request and return it to index

//for production use below
app.get('*',(req, res) =>{
    res.sendFile(path.join(__dirname,'dist/veganBlogApp/index.html'))
})

app.use('/post', router);



const port = process.env.PORT || 4600;

app.listen(port, (req, res) =>{
    console.log('SERVER RUNNING ON'+ port);
})