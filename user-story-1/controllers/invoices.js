const Invoice = require('../models/invoice');

exports.createInvoice = (req, res) => {
  const invoice = new Invoice(req.body);
  invoice
    .save()
    .then(result => {
      res.status(200).json({ message: 'invoice submitted successfully' });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getPendingInvoices = (req, res) => {
  Invoice.find({ status: 'pending' })
    .then(invoices => {
      res.json(invoices)
    })
    .catch(err => {
      console.log(err);
    });
};
