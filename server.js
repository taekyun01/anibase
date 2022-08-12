const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.listen(8080, function() {
console.log('listening on 8080')
})