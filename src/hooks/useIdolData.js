import { useEffect, useState } from 'react';
import { getIdols, getCharts } from '../api/getApi';

const useIdolData = (gender = null) => {
  const [idolData, setIdolData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchIdolsData = async () => {
    setIsLoading(true);
    try {
      const response = gender ? await getCharts(gender) : await getIdols();
      setIdolData(response);
      setFetchError(null);
    } catch (error) {
      console.error('데이터 불러오기 중 오류 발생:', error);
      setFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIdolsData();
  }, [gender]);

  return { idolData, isLoading, fetchError, fetchIdolsData };
};

export default useIdolData;
