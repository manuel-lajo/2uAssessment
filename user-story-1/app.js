const express = require('express');

const app = express();

const mongoose = require('mongoose');

// const mongoConnect = require('./util/database');


// mongoConnect(client => {
//   console.log(client);
//   app.listen(3000);
// });

mongoose.connect(
  'mongodb+srv://new-user_27:cG2Q3dPnpEp9Pgtr@cluster0-lnlel.mongodb.net/test?retryWrites=true&w=majority'
)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });