
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', (req, resp) => {
   resp.sendfile(path.join(__dirname, '../src/index.html'));
});

// for dojoConfig - if you specify the path to the files, do
// not include 'src'.
//     'js':  'src/js/Class'  => will not work!
//     'js':  'js/Class'  =>  GOOD!
app.use(express.static('src'));

app.listen(port, (err) => {
   if (err) {
      console.log(err);
   }
   else {
      open('http://localhost:' + port);

   }
});
