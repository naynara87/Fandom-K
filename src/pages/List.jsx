import React from 'react';
import DonationsList from './components/DonationList';
import ThisMonthsChart from '../components/ThisMonthsChart';
import DonationsModal from '../components/DonationsModal/DonationsModal';

function List() {
  return (
    <>
      <DonationsList />;
      <ThisMonthsChart />
      <DonationsModal />
    </>
  );
}

export default List;
