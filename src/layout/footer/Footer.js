import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-footer', 'true');
    return () => {
      document.documentElement.removeAttribute('data-footer');
    };
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <p className="mb-0 text-muted text-medium">Copyright © 2024 PM Marketing. All rights reserved</p>
            </Col>
            <Col sm="6" className="d-none d-sm-block">
              <div className="d-flex flex-row gap-3 pt-0 pe-0 mb-0 float-end">
                <div className="mb-0 text-medium" href="#/" linkProps={{ className: 'btn-link' }}>
                  Term & Condition
                </div>
                <div className="mb-0 text-medium" href="#/" linkProps={{ className: 'btn-link' }}>
                  Privacy Policy
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
