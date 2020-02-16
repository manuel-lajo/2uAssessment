const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  invoice_number:{
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  invoice_date: {
    type: String,
    required: true
  },
  due_date: {
    type: String,
    required: true
  },
  vendor_name: {
    type: String,
    required: true
  },
  remittance_address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
