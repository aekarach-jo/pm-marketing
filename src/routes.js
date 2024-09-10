/* eslint-disable */
import { lazy } from 'react';
import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';

const inspect = {
  index: lazy(() => import('views/inspect/Inspect')),
};
const customer = {
  index: lazy(() => import('views/customer/Customer')),
};
const prohibited = {
  index: lazy(() => import('views/prohibited-words/ProhibitedWords')),
};
const resolve = {
  index: lazy(() => import('views/resolve/ResolveWord')),
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      path: `${appRoot}/`,
      exact: true,
      redirect: true,
      to: `${appRoot}/inspect`,
    },
    {
      path: `${appRoot}/inspect`,
      component: inspect.index,
      label: 'หน้าแรก',
      icon: ['/img/icons/home.png','/img/icons/home-dark.png'],
    },
    {
      path: `${appRoot}/member`,
      component: customer.index,
      label: 'สมาชิก',
      icon: ['/img/icons/customer.png','/img/icons/customer-dark.png'],
    },
    {
      path: `${appRoot}/prohibited-words`,
      component: prohibited.index,
      label: 'คำต้องห้าม',
      icon: ['/img/icons/warning.png','/img/icons/warning-dark.png'],
    },
    {
      path: `${appRoot}/resolve`,
      component: resolve.index,
      label: 'คำต้องห้าม',
      icon: ['/img/icons/resolve.png','/img/icons/resolve-dark.png'],
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
