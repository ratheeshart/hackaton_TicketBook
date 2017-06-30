var lodash=require('lodash');
const path = require('path');
const bluebird = require('bluebird');
var bookingModel = require(path.join(__dirname,'../model/bookingtickets.js'));
var bookingticketsComponent={};
var bookingticketsController={};
bookingticketsComponent.validateSignup=(userData)=>{

};
bookingticketsController.getMovies=function(callback){
console.log('Get Movies');
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





module.exports = bookingticketsController;
