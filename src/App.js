import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from './components/Firebase';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

import Dashboard from './components/Dashboard/Dashboard';

// Font Awesome Library
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
  faSortDown,
  faSortUp,
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
  faExclamation,
  faSortDown,
  faSortUp
);

// End Font Awesome Library

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

  const defaultContainer = () => (
    <div className='flex flex-column p'>
      <Dashboard funds={funds} loading={loading} />
    </div>
  );

  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router>
          <NavBar />
          <Route component={defaultContainer} />
        </Router>
      </div>

      <Footer />
    </div>
  );
};

export default withFirebase(App);
