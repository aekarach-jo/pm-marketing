/* eslint-disable jsx-a11y/accessible-emoji */
import AutoComplete from 'components/autocomplete/AutoComplete';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useIsMobile } from 'hooks/useIsMobile';
import NavMobileButtons from './NavMobileButtons';

const Navbar = ({ children }) => {
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
    <Col className="h-100">
      <nav className={`navbar ${useIsMobile() ? 'px-5' : 'px-7'}`}>
        {!useIsMobile() && (
          <div className="navbar-left">
            <BreadcrumbList items={breadcrumbs} />
          </div>
        )}
        <div className="navbar-right gap-3">
          {useIsMobile() && <NavMobileButtons />}
          <AutoComplete className="nav-text-placeHolder" onChange={(value) => handleSearch({ name: value })} value="" placeHolder="Type here…" />
          <Row className="g-0 sh-10 sh-sm-7">
            <Col xs="auto" className="m-auto">
              {useIsMobile() ? (
                <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-3 sw-3 mb-2" alt="thumb" />
              ) : (
                <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-3 sw-3 mb-2" alt="thumb" />
              )}
            </Col>
            <Col>
              <div className="d-flex flex-column flex-sm-row ps-2 h-100 align-items-sm-center justify-content-sm-between gap-3">
                {!useIsMobile() && (
                  <div
                    className="d-flex flex-column mb-2 mb-sm-0"
                    style={{ fontWeight: '600', fontSize: '14px', lineHeight: '21.15px', letterSpacing: '-0.39px' }}
                  >
                    <div>Admin</div>
                  </div>
                )}
                {useIsMobile() ? (
                  <div className="d-flex flex-row justify-content-center align-items-center ms-3" style={{ marginTop: '25px' }}>
                    <img src="/img/icons/bell.png" alt="bell" style={{ width: '20px', height: '20px' }} />
                  </div>
                ) : (
                  <div className="d-flex flex-row justify-content-center align-items-center mb-2 mb-sm-0 gap-3">
                    <img src="/img/icons/gear.png" alt="gear" />
                    <img src="/img/icons/bell.png" alt="bell" style={{ width: '16px', height: '16px' }} />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </nav>
      <Col id="contentArea">{children}</Col>
    </Col>
  );
};

export default Navbar;
