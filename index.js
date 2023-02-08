const express = require("express");
const { dbConnect } = require("./backend/databaseManager/dbcontroller");
const { getlist, addToList, deleteFromList } = require("./backend/listController/listController");

const app =  express();
http = require('http'),
httpServer = http.Server(app);
app.use(express.urlencoded());


app.get('/', function(req,res) {
    // dbConnect();
    res.sendfile('templates/index.html');
  });
app.get('/list', function(req, res){
  getlist();
});
app.post('/list',function(req,res){
  addToList(req,res);
});
app.delete('/list', function(req,res){
  deleteFromList(req,res);
})
app.listen(3000, function() {
    console.log("listening on 3000");
    
})
