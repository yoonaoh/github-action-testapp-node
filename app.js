var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Testing out the Node webapp - Yoona');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on process.env.PORT');
});
