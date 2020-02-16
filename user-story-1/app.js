const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const invoiceRoutes = require('./routes/invoice');

app.use('/invoice', invoiceRoutes);

mongoose
  .connect(
  'mongodb+srv://new-user_27:cG2Q3dPnpEp9Pgtr@cluster0-lnlel.mongodb.net/invoice?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(7000);
  })
  .catch(err => {
    console.log(err);
  });