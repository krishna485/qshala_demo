var express = require('express')
var app = express();
let cors = require("cors")
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var conn = mongoose.connect('mongodb+srv://Admin:Admin@cluster0.oprjr.mongodb.net/Images?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true }) 
if(conn){
  console.log("database connected");
  }
  else{
  console.log("database connection error");
  }
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('hello world')
})
app.get("/api/test",function(req, res){
  console.log("in test");
res.send("welcome Be")
})
app.post("/storeImages",cors(), async function (req, res) {
  console.log(req.body,"data");

  
  const newImages = new newImage({
     Name : req.body.Name,
     ImageName : req.body.ImageName,
     ImageUrl : req.body.ImageUrl,
    });
    newImages.save().then(document => {
    res.json({ state: true, msg: "data inserted successully", document: document })
    .catch(err => {
    res.send(err);
    });
    });
})
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.listen(8000)