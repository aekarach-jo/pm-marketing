import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useLayout from 'hooks/useLayout';
import Footer from 'layout/footer/Footer';
import Nav from 'layout/nav/Nav';
import Navbar from './nav/NavBar';

const Layout = ({ children }) => {
  useLayout();

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <main className="pt-4">
        <Container>
          <Row className="h-100">
            <Navbar />
            <Card className="h-100 bg-white rounded-xl" id="contentArea">
              {children}
            </Card>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default React.memo(Layout);
