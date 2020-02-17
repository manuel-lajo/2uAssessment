import React from 'react';

import classes from './Invoice.module.css';

const invoice = props => {
  return (
    <div className={classes.Invoice}>
      <div><b>Invoice Number:</b> {props.invoice.invoice_number}</div>
      <div><b>Vendor Name:</b> {props.invoice.vendor_name}</div>
      <div><b>Vendor Address:</b> {props.invoice.remittance_address}</div>
      <div><b>Invoice Total:</b> {props.invoice.total}</div>
      <div><b>Invoice Date:</b> {props.invoice.invoice_date}</div>
      <div><b>Due Date:</b> {props.invoice.due_date}</div>
      <button className={classes.Button} onClick={props.clicked}>Approve</button>
    </div>    
  );
};

export default invoice;