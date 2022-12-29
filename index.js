const express = require("express");

const app =  express();

app.get('/',index())
function index(req, resp) {
    resp.send("Helloworld");
}

app.listen(3000, function() {
    console.log("listening on 3000");
    
})