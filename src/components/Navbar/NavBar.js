import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <nav className='nav-bar shadow flex align-center'>
      <div className='logo bold flex align-center'>
        FunDash
        <FontAwesomeIcon icon='running' className='logo-icon' />
      </div>
    </nav>
  );
};

export default NavBar;
