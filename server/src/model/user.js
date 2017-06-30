var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  String,
  password: String,
  body:   String,
  sessions: [{ jwt: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var user = mongoose.model('user', userSchema);

// user.methods.validateSignup = function() {
//   var errors=[];
//   if(this.name && this.password && this.email && this.phone){
//     if(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)==false){
//       errors.push('Email Not Valid.')
//     }
//   }else {
//     errors.push('Username , password, email, phone are required fields.');
//   }
//   return errors;
// };

module.exports=user;
