import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [click, setClick] = useState(false);
  
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='header'>
        <div className='header-container'>
          <Link to='/' className='header-left' onClick={closeMobileMenu}>
            Harleen Chaudhary 
          </Link>

          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='header-item'>
              <Link to='/' className='header-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='header-item'>
              <Link
                to='/projects'
                className='header-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='header-item'>
              <Link
                to='/more'
                className='header-links'
                onClick={closeMobileMenu}
              >
                More
              </Link>
            </li>

            <li className='header-item'>
              <Link
                to='/contact'
                className='header-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;