var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  item : String
});

mongoose.model('ToDo',todoSchema);
