/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { navLinks } from 'config';
import '../css/nav.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  const { push } = useHistory();

  const handleClickMenu = (nav) => {
    setActive(nav.title)
    setToggle(!toggle)
  }

  return (
    <nav className="w-full d-flex justify-content-between align-items-center navbar-height" style={{ background: 'black' }}>
      <div className="d-flex justify-content-center align-items-center gap-3 logo-image">
        <img src="/img/logo/Logo.png" alt="hoobank" />
        <h2 className="" style={{ color: 'white' }}>
          PM Marketing
        </h2>
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
      <div className="d-flex gap-4 justify-content-center align-items-center">
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

        <div className="m-display">
          <img
            src={toggle ? '/img/assets/close.svg' : '/img/assets/basil_menu-outline.png'}
            alt="menu"
            style={
              !toggle
                ? { width: '49px', height: '49px', objectFit: 'contain', color: 'white' }
                : { width: '49px', height: '49px', objectFit: 'contain', color: 'white', scale: '0.6' }
            }
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
          ${!toggle ? 'd-none' : 'd-flex'} 
           popup-card `}
          >
            <ul className="list-unstyled">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-sm ${active === nav.title ? 'text-white' : 'text-dimWhite'} ${
                    index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  }`}
                  onClick={() => handleClickMenu(nav)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
