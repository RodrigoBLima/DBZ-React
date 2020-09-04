import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({children}) => {
  return (
    <Container>
      <Header />
        {children}
      <Footer />
    </Container>
  );
};

export default Layout;
