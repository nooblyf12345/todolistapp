const express = require("express");

const app =  express();
http = require('http'),
httpServer = http.Server(app);



app.get('/', function(req,res) {
    res.sendfile('templates/index.html');
  });

app.listen(3000, function() {
    console.log("listening on 3000");
    
})
