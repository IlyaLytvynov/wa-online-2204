const express = require('express');
console.log('test');

const app = express();
app.use(express.static('build'));

app.listen(8081, function(){
  console.log('Example app listening on port 8080');
});
