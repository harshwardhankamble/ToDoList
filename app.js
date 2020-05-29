var express = require('express');
var http = require('http');
var todoController = require('./controller/todoController.js')
require('./controller/todoSchema');

var app = express();

app.set('view engine','ejs')
app.use('/assets',express.static('assets'));

todoController(app);
/*mongodb+srv://harshToDo:<password>@harsh-yg2uy.mongodb.net/test?retryWrites=true&w=majority



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://harshToDo:<password>@harsh-yg2uy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


*/
app.listen(3000)
console.log('Just wait and watch......!');
