/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { navLinks } from 'config';
import '../css/nav.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const { push } = useHistory();

  return (
    <nav className="w-full d-flex justify-content-between align-items-center navbar-height z-index-1000" style={{ background: 'black' }}>
      <div className="d-flex justify-content-center align-items-center gap-3 logo-image">
        <img src="/img/logo/Logo.png" alt="hoobank" />
        <h2 style={{ color: 'white' }}>PM Marketing</h2>
      </div>
      <ul className="list-unstyled d-flex justify-content-center align-items-center gap-7 mb-0">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` ${active === nav.title ? 'text-white' : 'text-white'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <Button
        className="text-white font-weight-bold py-2 d-flex justify-content-center align-items-center"
        style={{
          background: 'linear-gradient(135deg, #FF0080 0%,#7928CA 100%)',
          borderRadius: '10px',
          width: '187px',
          height: '45px',
        }}
        size="lg"
        type="submit"
        onClick={() => push('/inspect')}
      >
        GET STARTED
      </Button>
    </nav>
  );
};

export default Navbar;
