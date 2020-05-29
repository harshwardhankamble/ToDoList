var bodyParser=require('body-parser');
var mongoose = require('mongoose');
require('./todoSchema');
ToDo = mongoose.model('ToDo');

module.exports = function(app){

  var data=[];
  n=0;
  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  var flag=0;
  app.get('/index',function(req,res){
    ToDo.find((err,doc)=>{
      if(!err){

        res.render('index',{data:doc});

      }else{
        console.log('Error Occurrred');
      }
    });
  });


  app.post('/index',urlencodedParser,function(req,res){
    var todo = new ToDo();
    todo.item = req.body.item;
    todo.save((err,doc)=>{
      if(!err)
        console.log('successfully saved');
        res.json(doc);
    });
  });

  app.delete('/index/:item',function(req,res){
    ToDo.deleteOne({item: req.params.item.replace(/\-/g, ' ').trim()},(err,doc)=>{
      if (!err){
        ToDo.find((err,doc)=>{
          if(!err){

            res.json(doc);

          }else{
            console.log('Error Occurrred');
          }
        });
      }else{
        console.log('Error Occurrred'+err);
      }
    });

    /*data=data.filter(function(index){
      console.log(data);
      return index.item.replace(/ /g, "-") != req.params.item;
    });
    res.json(data);*/
  });

};
