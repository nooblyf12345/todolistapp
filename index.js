const express = require("express");
const { dbConnect } = require("./backend/databaseManager/dbcontroller");
const { getlist } = require("./backend/listController/listController");

const app =  express();
http = require('http'),
httpServer = http.Server(app);



app.get('/', function(req,res) {
    // dbConnect();
    res.sendfile('templates/index.html');
  });
app.get('/list', function(req, res){
  getlist();
})
app.listen(3000, function() {
    console.log("listening on 3000");
    
})
