import { useState, useEffect } from 'react';
import getDonation from '../service/api';

const useDonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null); // 'error' -> 'fetchError'로 수정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDonation();
        console.log(response.list);
        setDonations(response.list);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching donations:', error);
        setFetchError(error); // 'error' -> 'fetchError'로 수정
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { donations, loading, fetchError };
};

export default useDonationList;
