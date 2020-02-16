import React from 'react';

import classes from './App.module.css';
import InvoicePanel from './containers/InvoicePanel/InvoicePanel';

function App() {
  return (
    <div className={classes.App}>
      <InvoicePanel />
    </div>
  );
}

export default App;
