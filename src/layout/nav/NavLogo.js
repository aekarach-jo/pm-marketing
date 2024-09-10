import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';

const NavLogo = () => {
  return (
    <div className="nav-logo">
      {/* <Link to={DEFAULT_PATHS.APP}> */}
      <img src="/img/logo/Logo.png" alt="Logo" />
      <div className="text-logo">PM Marketing</div>
      {/* </Link> */}
    </div>
  );
};
export default React.memo(NavLogo);
