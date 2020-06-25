import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loader() {
  return (
    <div className='loader'>
      <FontAwesomeIcon icon='circle-notch' spin className='spinner' />
    </div>
  );
}

export default Loader;
