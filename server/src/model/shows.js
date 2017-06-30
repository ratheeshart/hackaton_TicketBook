var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showsSchema = new Schema({
  movie:  { type: String, require: true },
  date: { type: Date, default: Date.now , require: true },
  screen:  { type: String, default: 'Screen 1' },
  seats: { type: Number, default: 20 }
});

var shows = mongoose.model('shows', showsSchema);

// shows.methods.validateSignup = function(cb) {
//   // return this.model('Animal').find({ type: this.type }, cb);
// };

module.exports=shows;
