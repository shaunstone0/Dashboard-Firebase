import React from 'react';
import Numbers from '../Numbers/Numbers';
import Funds from '../Funds/Funds';
const Dashboard = ({ funds, authUser }) => {
  console.log();
  return (
    <div>
      <Numbers funds={funds} />
      <Funds funds={funds} />
    </div>
  );
};

export default Dashboard;
