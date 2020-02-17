import React, { Component } from 'react';
import openSocket from 'socket.io-client';

import classes from './InvoicePanel.module.css';
import Invoice from '../../components/Invoice/Invoice';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';

class InvoicePanel extends Component {
  state = {
    invoices: [],
    selectedInvoiceId: null,
    loading: true,
    approving: false
  };

  componentDidMount() {
    axios
    .get('http://localhost:7000/invoice/pending')
    .then(response => {
      this.setState( { invoices: response.data, loading: false } );
    })
    .catch(error => {
      console.log(error);
    });
    const socket = openSocket('http://localhost:7000');
    socket.on('invoices', data => {
      if (data.action === 'create') {
        this.addInvoice(data.invoice);
      }
    });
  }

  addInvoice = invoice => {
    this.setState(prevState => {
      let invoices = [...prevState.invoices];
      invoices = invoices.map(el => ({ ...el }));
      invoices.unshift(invoice);
      return { invoices };
    });
  };

  approveHandler = id => {
    this.setState({ approving: true, selectedInvoiceId: id });
  }

  approveCancelHandler = () => {
    this.setState({ approving: false, selectedInvoiceId: null });
  }

  approveConfirmHandler = () => {
    axios
    .put(`http://localhost:7000/invoice/approve/${this.state.selectedInvoiceId}`)
    .then(response => {
      let invoices = [...this.state.invoices];
      invoices = invoices.map(el => ({ ...el }));
      invoices = invoices.filter(el => el._id !== this.state.selectedInvoiceId);
      this.setState({
        invoices,
        approving: false,
        selectedInvoiceId: null,
        loading: false
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    let invoices = <div>loading...</div>;
    if (!this.state.loading) {
      invoices = this.state.invoices.map(invoice => (
        <Invoice key={invoice._id} invoice={invoice} clicked={() => this.approveHandler(invoice._id)} />
      ));
    }
    return <div>
      <Modal show={this.state.approving} modalClosed={this.approveCancelHandler}>
        <p>Approve Invoice?</p>
        <button className={classes.Button} onClick={this.approveCancelHandler}>Cancel</button>
        <button className={classes.Button} onClick={this.approveConfirmHandler}>Confirm</button>
      </Modal>
      {invoices}
      </div>;
  }
}

export default InvoicePanel;
