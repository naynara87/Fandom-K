import { useCallback, useEffect, useState } from 'react';

const useShowArrow = () => {
  const [showArrow, setShowArrow] = useState(() => window.innerWidth > 767);

  const handleWindowResize = useCallback(() => {
    setShowArrow(window.innerWidth > 767);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return showArrow;
};

export default useShowArrow;
