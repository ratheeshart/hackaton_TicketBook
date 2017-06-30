var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  name:  { type: String, require: true },
  releaseDate: { type: Date, default: Date.now },
  image:   String,
  description:   String,
  genre:   String,
  rating:   String,
  sessions: [{ jwt: String, date: Date }],
  meta: {
    votes: { type: Number, default: 0 },
    favs:  { type: Number, default: 0 }
  }
});

var movie = mongoose.model('movie', movieSchema);
// movie.methods.validateSignup = function(cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };

module.exports=movie;
