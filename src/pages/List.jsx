import React from 'react';
import DonationsList from './components/DonationList';
import ThisMonthsChart from '../components/ThisMonthsChart';

function List() {
  return (
    <>
      <DonationsList />;
      <ThisMonthsChart />
    </>
  );
}

export default List;
