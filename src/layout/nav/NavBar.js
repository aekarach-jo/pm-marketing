/* eslint-disable jsx-a11y/accessible-emoji */
import AutoComplete from 'components/autocomplete/AutoComplete';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => {
  const path = useHistory();
  const splitPath = path.location.pathname.split('/');
  console.log(splitPath);

  const breadcrumbs = [
    { to: '', text: 'Pages' },
    { to: `${splitPath[1]}`, title: splitPath[1] },
  ];

  const handleSearch = ({ name }) => {
    console.log(name);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <BreadcrumbList items={breadcrumbs} />
      </div>
      <div className="navbar-right gap-3">
        <AutoComplete className="nav-text-placeHolder" onChange={(value) => handleSearch({ name: value })} value="" placeHolder="Type here…" />
        <Row className="g-0 sh-10 sh-sm-7">
          <Col xs="auto" className="m-auto">
            <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-2 sw-2" alt="thumb" />
          </Col>
          <Col>
            <div className="d-flex flex-column flex-sm-row ps-2 h-100 align-items-sm-center justify-content-sm-between gap-3">
              <div className="d-flex flex-column mb-2 mb-sm-0" style={{ fontWeight: '600', fontSize: '14px', lineHeight: '21.15px', letterSpacing: '-0.39px' }}>
                <div>Admin</div>
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
