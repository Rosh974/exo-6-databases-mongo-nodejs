
const express = require('express')
const app = express()

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.use(express.static('public'));

app.get('/mongo',function(req,res){


  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/didier";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("didier");
    dbo.collection("personnages").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result)
      db.close();
    });
  });
  

})


app.listen(3777, function(){
  console.log ('ok');
})
































// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017/didier';

// // Database Name
// const dbName = 'myproject';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });