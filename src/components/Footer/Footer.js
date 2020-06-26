import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='footer flex align-center justify-between'>
      <div>
        <ul className='bold flex'>
          <li>
            <a href='mailto:shaunstone0@gmail.com'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='logo-light bold flex align-center'>
        FunDash
        <FontAwesomeIcon icon='running' className='logo-icon' />
      </div>
    </div>
  );
}

export default Footer;
