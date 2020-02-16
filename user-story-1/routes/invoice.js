const express = require('express');

const invoiceController = require('../controllers/invoices');

const router = express.Router();

router.post('/', invoiceController.createInvoice);
router.get('/pending', invoiceController.getPendingInvoices);

module.exports = router;
