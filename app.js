var express = require('express');
var app = express();
var path = require('path');
var Search = require('bing.search');
var util = require('util');
require('dotenv').config({
  silent: true
});
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_KEY);

var Schema = mongoose.Schema;
var historySchema = new Schema({
  term: String,
  when: String
});

var History = mongoose.model('History', historySchema);

app.get('/api/imagesearch/:input', function(req, res){
  var instance = History({  //creating instance of History
    term: req.params.input,
    when: new Date().toLocaleString()
  });

  instance.save(function(err, instance) {
    if(err) throw err;
    console.log('Saved ' + instance);
  });
  
  search = new Search(process.env.API_KEY);
  var size = req.query.offset || 10; 

  search.images(req.params.input, {top:size}, function(err, results) {
      if(err) throw err;
      res.json(results);
    }
  );
});

app.get('/api/latest/imagesearch', function (req, res) {
  History.find({}).sort({_id:-1}).limit(10).exec(function(err, history){
    if (err) throw err;
    res.send(history.map(function(val) {
      return {
        term: val.term,
        when: val.when
      };
    }));
  });
});

var port = process.env.PORT || 5000;
app.listen(port);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
