const Invoice = require('../models/invoice');
const io = require('../socket');

exports.createInvoice = (req, res) => {
  const invoice = new Invoice(req.body);
  invoice
    .save()
    .then(invoice => {
      io.getIO().emit('invoices', { action: 'create', invoice });
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

exports.approveInvoice = (req, res) => {
  const id = req.params.id;
  Invoice
    .findById(id)
    .then(invoice => {
      invoice.status = 'Approved';
      return invoice.save();
    })
    .then(result => {
      res.status(200).json({ message: 'invoice approved successfully' });
    })
    .catch(err => {
      console.log(err);
    });
};
