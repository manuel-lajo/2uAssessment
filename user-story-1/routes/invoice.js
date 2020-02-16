const express = require('express');

const invoiceController = require('../controllers/invoices');

const router = express.Router();

router.post('/', invoiceController.createInvoice);

module.exports = router;
