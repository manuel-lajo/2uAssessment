const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const io = require('./socket');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
})

// TODO: handle errors, currently all errors are being console logged only
// TODO: handle authorization throught jwt or another authorization method
// TODO: use environment constants to store db url and others things like port
const invoiceRoutes = require('./routes/invoice');

app.use('/invoice', invoiceRoutes);

mongoose
  .connect(
  'mongodb+srv://new-user_27:cG2Q3dPnpEp9Pgtr@cluster0-lnlel.mongodb.net/invoice?retryWrites=true&w=majority'
  )
  .then(result => {
    const server = app.listen(7000);
    io.init(server);
  })
  .catch(err => {
    console.log(err);
  });
