var lodash=require('lodash');
const path = require('path');
const bluebird = require('bluebird');
var userModel = require(path.join(__dirname,'userModel'));
var userComponent={};
var userController={};
userComponent.validateSignup=(userData)=>{

};
userController.signup=function(userData){ var result =

  var signupDefferd=bluebird.defer();
  var user=new userModel(userData);
  if(user.validateSignup().length){

    result.reject(error);
    result.resolve(adpt);
  }else {
    user.save()
  }
return result.promise;
};





module.exports = userController;
