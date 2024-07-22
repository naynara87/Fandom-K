import { useCallback, useEffect, useState } from 'react';
import getIdolChunks from '../utils/getIdolChucks';

const useIdolChunks = (idolData) => {
  const [idolChunks, setIdolChunks] = useState([]);
  const [idolCount, setIdolCount] = useState(() => {
    const { innerWidth } = window;
    if (innerWidth < 768) return 6;
    if (innerWidth < 1200) return 8;
    return 16;
  });

  const updateNumOfIdol = useCallback(() => {
    const { innerWidth } = window;
    if (innerWidth < 768) setIdolCount(6);
    else if (innerWidth < 1200) setIdolCount(8);
    else setIdolCount(16);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateNumOfIdol);

    return () => {
      window.removeEventListener('resize', updateNumOfIdol);
    };
  }, [updateNumOfIdol]);

  useEffect(() => {
    if (idolData) setIdolChunks(getIdolChunks(idolData, idolCount));
  }, [idolData, idolCount]);

  return idolChunks;
};

export default useIdolChunks;
