import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import CardItens from '../../components/CardItens';
import Footer from '../../components/Footer';
import HeaderNav from '../../components/HeaderNav';

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderNav />
      <main>
        <CardItens />
      </main>
      <Footer />
    </React.Fragment>
  );
}
