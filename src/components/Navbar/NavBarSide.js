import React from 'react';
import { withFirebase } from '../Firebase';
import CollapseMenu from './CollapseMenu';

const NavBarSide = ({ funds }) => {
  return (
    <div className='side-nav flex flex-column align-center'>
      <CollapseMenu funds={funds} />
      {/* {uniqueNames.map((name) => (
        <div key={name}>{name}</div>
      ))} */}
    </div>
  );
};

export default withFirebase(NavBarSide);
