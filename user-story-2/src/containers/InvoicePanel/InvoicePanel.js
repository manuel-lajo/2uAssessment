import React, { Component } from 'react';

import Invoice from '../../components/Invoice/Invoice';
import axios from 'axios';

class InvoicePanel extends Component {
  state = {
    invoices: [],
    loading: true
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
  }

  render() {
    let invoices = <div>loading...</div>;
    if (!this.state.loading) {
      invoices = this.state.invoices.map(invoice => (
        <Invoice key={invoice._id} invoice={invoice} />
      ));
    }
    return <div>{invoices}</div>;
  }
}

export default InvoicePanel;
