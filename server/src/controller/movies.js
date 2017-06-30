var lodash=require('lodash');
const path = require('path');
const bluebird = require('bluebird');
var movieModel = require(path.join(__dirname,'../model/movies.js'));
var movieComponent={};
var movieController={};
movieComponent.validateSignup=(userData)=>{

};
movieController.getMovies=function(callback){
console.log('Get Movies',movieModel.connection.readyState);
  var result=bluebird.defer();
  movieModel.find({},(error,moviesData)=>{
    callback(error,moviesData)
    // result.resolve(moviesData||[]);

    consloe.log('get error :',error);
  });
//   if(user.validateSignup().length){
//
//     result.reject(error);
//     result.resolve(adpt);
//   }else {
//     user.save()
//   }
return result.promise;
};





module.exports = movieController;
