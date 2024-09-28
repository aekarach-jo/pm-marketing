import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useLayout from 'hooks/useLayout';
import Footer from 'layout/footer/Footer';
import Nav from 'layout/nav/Nav';
import { useIsMobile } from 'hooks/useIsMobile';
import Navbar from './nav/NavBar';

const Layout = ({ children }) => {
  useLayout();
  console.log(useIsMobile());

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Navbar>
      <Nav />
      <main className="pt-2">
        {/* {useIsMobile() ? <div style={{ marginBottom: '4rem' }} /> : <Navbar />} */}
        <Container>
          <Row className="h-100">
            <Card className="bg-white rounded-lg px-0 py-5 h-content" id="contentArea">
              {children}
            </Card>
          </Row>
        </Container>
        <Footer />
      </main>
    </Navbar>
  );
};

export default React.memo(Layout);
