var mongoose = require('mongoose');
const path = require('path');
const constant = require(path.join(__dirname,'/config.js'));
var mongodb;
exports.mongodb=mongodb;
exports.connect=function(){
  mongodb = mongoose.connect(constant.DATABASE);
  return mongodb.connection;
};
