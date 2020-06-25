import React from 'react';
import { withFirebase } from '../Firebase';
import FundsList from './FundsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Funds = ({ funds, loading }) => {
  return (
    <div className='funds-container card-shadow'>
      <div className='header flex align-center'>
        <div>
          <FontAwesomeIcon icon='table' className='header-icon' />{' '}
        </div>
        <div className='header-text'>All Current Reports</div>
      </div>
      <FundsList loading={loading} allFunds={funds} />
    </div>
  );
};

export default withFirebase(Funds);
