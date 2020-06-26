import React from 'react';
import './Numbers.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withFirebase from '../Firebase';

function Numbers({ funds }) {
  const reports = funds.map((fund) => fund.index);
  const reportsNumber = reports.length;

  const readyReports = [];
  funds.map((fund) => {
    if (fund.report_status === 'True') {
      readyReports.push(fund.report_status);
    }
    return null;
  });

  const alerts = funds.map((fund) => Number(fund.nb_alerts));

  const sumAlerts = alerts.reduce((a, b) => a + b, 0);

  const allReadyReports = readyReports.length;

  let today = new Date().toDateString();

  // let date = `${today.getFullYear()} - ${today.getMonth()} - ${today.getDate()}`;

  return (
    <div className='numbers flex align-center justify-center'>
      <div className='flex align-center number-item card-shadow'>
        <div className='box records flex justify-center align-center'>
          <FontAwesomeIcon icon='fire' />
        </div>
        <div className='small numbers-text'>
          New Reports
          <p className='bold large'>{reportsNumber}</p>
        </div>
      </div>
      <div className='flex align-center number-item card-shadow'>
        <div className='box records-ready flex justify-center align-center'>
          <FontAwesomeIcon icon='check-double' />
        </div>
        <div className='small numbers-text'>
          Reports Ready
          <p className='bold large'>{allReadyReports}</p>
        </div>
      </div>
      <div className='flex align-center number-item card-shadow'>
        <div className='box alert flex justify-center align-center'>
          <FontAwesomeIcon icon='exclamation' />
        </div>
        <div className='small numbers-text'>
          Alerts
          <p className='bold large'>{sumAlerts}</p>
        </div>
      </div>
      <div className='flex align-center date-item card-shadow'>
        <div className='small numbers-text'>
          Hello, today is:
          <p className='bold large'>{today}</p>
        </div>
      </div>
    </div>
  );
}
export default Numbers;
