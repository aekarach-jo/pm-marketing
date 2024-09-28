/* eslint-disable no-nested-ternary */
import React, { useMemo, useState } from 'react';
import routesAndMenuItems from 'routes.js';
import { Link } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';
import { useSelector } from 'react-redux';
import { getMenuItems } from 'routing/helper';
import { useIsMobile } from 'hooks/useIsMobile';

const NavLogo = () => {
  const { placement, behaviour, placementStatus, behaviourStatus, attrMobile, breakpoints, useSidebar } = useSelector((state) => state.menu);
  const { collapseAll } = useSelector((state) => state.menu);

  const isMobile = useIsMobile();

  console.log(behaviour);

  return (
    <div className="nav-logo" style={collapseAll ? { position: 'relative', right: '-5px' } : { position: 'relative', right: '28px' }}>
      {/* <Link to={DEFAULT_PATHS.APP}> */}
      <img src="/img/logo/Logo.png" alt="Logo" />
      <div className={`${collapseAll ? 'd-none' : ''} text-logo`}>PM Marketing</div>
      {/* </Link> */}
    </div>
  );
};
export default React.memo(NavLogo);
