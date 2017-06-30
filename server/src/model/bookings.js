var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookingsSchema = new Schema({
  movie:  { type: String, require: true },
  show:  { type: String, require: true },
  user: { type: String, require: true },
  seat: { type: Number , require: true },
});

var bookings = mongoose.model('bookings', bookingsSchema);

// bookings.methods.validateSignup = function(cb) {
//   // return this.model('Animal').find({ type: this.type }, cb);
// };

module.exports=bookings;
