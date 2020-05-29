var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/todolist',{useNewUrlParser: true},(err) => {
  if(!err){
    console.log('Mongodb connection Succeded');
  }else{
    console.log('Mongodb connection Error : '+err);
  }
});

require('./todomodel');
