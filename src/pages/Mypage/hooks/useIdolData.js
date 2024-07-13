import { useEffect, useState } from 'react';
import getIdolData from '../utils/api';

const useIdolData = () => {
  const [idolData, setIdolData] = useState([]);

  const handleIdolDataLoad = async () => {
    const data = await getIdolData();
    setIdolData(data);
  };

  useEffect(() => {
    handleIdolDataLoad();
  }, []);

  return idolData;
};

export default useIdolData;
