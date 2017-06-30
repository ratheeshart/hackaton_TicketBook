const express = require('express');
const path = require('path');
const db = require(path.join(__dirname,'db.js'));
const app = express();
const bodyParser = require('body-parser');
var moviesController = require('./controller/movies.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(function (req, res,next) {
  if(req.type=='OPTIONS'){
    res.send(200);
  }else {
    next();
  }
})
function getResponse(error,data){
return {
  result:data,
  error:error||false
}
};
app.get('/', function (req, res) {
  res.send('Hello There!, <br/> Welcome to Ticket Booking Application.')
})

app.get('/user', function (req, res) {
  var movies=[];
  res.json(movies);
});

app.post('/signup',function(req,res){

});

app.get('/getMovies', function (req, res) {
  // var movies=[];
  console.log('processing get Movies.')
  moviesController.getMovies(function(error,moviesData){
    res.json(getResponse(error,moviesData||[]));
    // res.json(moviesData||[]);
  });
});

app.route('/fav/:movieid')
.get(function(req,res){

}).post(function(req,res){

});

exports.start=function(config){
  db.connect().once('open',function(){
    console.log('DATABASE Connected.');

    // Initailzing models
var fs= require('fs');
try {
fs.readdir(path.join(__dirname,'/model'), (err, files) => {
  files.forEach(file => {
    // console.log(file.indexOf('.js'))
    if(file.indexOf('.js')>0)
      require(path.join(__dirname,'/model/'+file));
  });
})
} catch (e) {
console.log(e);
return;
}

    console.log('Starting Ticket Application.');
    app.listen(config.PORT, function () {
      console.log(`Ticket App listening on port ${config.PORT}!`);
    });
  })
}
