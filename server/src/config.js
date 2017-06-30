var port = process.env.PORT || 3000;
var db=process.env.DATABASE || 'mongodb://localhost:27017/tickets';

module.exports={
  DATABASE:db,
  PORT:port
};
