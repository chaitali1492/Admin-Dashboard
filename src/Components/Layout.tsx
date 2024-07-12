import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
  }
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
