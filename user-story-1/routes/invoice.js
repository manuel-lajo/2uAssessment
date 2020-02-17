const express = require('express');

const invoiceController = require('../controllers/invoices');

const router = express.Router();

router.post('/', invoiceController.createInvoice);
router.get('/pending', invoiceController.getPendingInvoices);
router.put('/approve/:id', invoiceController.approveInvoice);

module.exports = router;
