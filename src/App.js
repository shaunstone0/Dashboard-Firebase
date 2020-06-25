import React, { useState, useEffect } from 'react';
import { withFirebase } from './components/Firebase';
import Funds from './components/Funds/Funds';
import NavBar from './components/Navbar/NavBar';
import NavBarSide from './components/Navbar/NavBarSide';
import Footer from './components/Footer/Footer';
import Numbers from './components/Numbers/Numbers';
import Loader from './components/Loader/Loader';
import {
  fas,
  faRunning,
  faMap,
  faCircleNotch,
  faFire,
  faCheckDouble,
  faStepForward,
  faStepBackward,
  faSearch,
  faTable,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  fas,
  faRunning,
  faMap,
  faCircleNotch,
  faFire,
  faCheckDouble,
  faStepBackward,
  faStepForward,
  faSearch,
  faTable,
  faExclamation
);

const App = (props) => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFunds = async () => {
      setLoading(true);
      props.firebase
        .funds()
        .orderByChild('fund_name')
        .on('value', (snapshot) => {
          const fundsObj = snapshot.val();
          const fundsList = Object.keys(fundsObj).map((key) => ({
            ...fundsObj[key],
            uid: key,
          }));
          setFunds(fundsList);
          setLoading(false);
        });
    };
    fetchFunds();
  }, [props.firebase]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <NavBar />
        <NavBarSide funds={funds} />
        <div className='flex flex-column align-center'>
          <Numbers funds={funds} />
          <Funds funds={funds} loading={loading} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withFirebase(App);
