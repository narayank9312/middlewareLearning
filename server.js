const express = require('express');

const app = express();

// app.get('/hello',()=>{
//     console.log('hello world')
// })

app.use('/', express.static(__dirname + '/public'));

function decodeQueryBase64(req, res, next) {
  for (let q in req.query) {
    let data = req.query[q];
    data = new Buffer(data, 'base64').toString('ascii');
    req.query[q] = data;
  }
  next();
}

app.get('/eval', decodeQueryBase64, (req, res) => {
  console.log(req.query);
  res.send('===== eval result =====');
});

app.listen(4321, () => {
  console.log('server started on htttp://localhost:4321');
});
