/* eslint-disable jsx-a11y/accessible-emoji */
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => {
  const path = useHistory();
  const splitPath = path.location.pathname.split('/');
  console.log(splitPath);

  const breadcrumbs = [
    { to: '', text: 'Pages' },
    { to: `${splitPath[1]}`, title: splitPath[1] },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="page-title-container">
          <BreadcrumbList items={breadcrumbs} />
        </div>
      </div>
      <div className="navbar-right gap-3">
        <Form.Control className="rounded-md w-60" placeholder="Type here..." />
        <Row className="g-0 sh-10 sh-sm-7">
          <Col xs="auto" className="m-auto">
            <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-2 sw-2" alt="thumb" />
          </Col>
          <Col>
            <div className="d-flex flex-column flex-sm-row ps-2 h-100 align-items-sm-center justify-content-sm-between gap-3">
              <div className="d-flex flex-column mb-2 mb-sm-0">
                <div>Amin</div>
              </div>
              <div className="d-flex flex-row mb-2 mb-sm-0 gap-3">
                <img src="/img/icons/gear.png" alt="gear" />
                <img src="/img/icons/bell.png" alt="bell" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </nav>
  );
};

export default Navbar;
