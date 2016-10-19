var express = require('express');

app = express();
const PORT=3000;


app.use('/',express.static(__dirname+"/public"));



app.listen(PORT,function(){

});