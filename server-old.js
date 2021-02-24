const express = require('express');

const app = express();

function m1(req, res, next) {
  console.log('m1 pre-next');
  next();
  console.log('m1 post-next');
}

function m2(req, res, next) {
  console.log('m2 pre-next');
  next();
  console.log('m2 post-next');
}

function m3(req, res, next) {
  console.log('m3 pre-next');
  next();
  console.log('m3 post-next');
}

// function m2(req, res, next) {
//   console.log('running middleware 2');
//   next();
// }
// function m3(req, res, next) {
//   console.log('running middleware 3');
//   next();
// }
// function m4(req, res, next) {
//   console.log('running middleware 4');
//   next();
// }
// function m5(req, res, next) {
//   console.log('running middleware 5');
//   next();
// }

app.get('/hello', m1, m2, m3, (req, res) => {
  console.log('pre send');
  res.send('hello world');
  console.log('post send');
});
app.listen(4343, () => {
  console.log('server strted on http://localhost:4343 ');
});
