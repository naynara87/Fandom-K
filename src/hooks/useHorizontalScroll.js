import { useRef, useEffect, useCallback } from 'react';

const useHorizontalScroll = () => {
  const listWrapperRef = useRef(null);

  const handleWheel = useCallback((e) => {
    const container = listWrapperRef.current;
    if (container) {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      container.scrollLeft += delta;
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    const container = listWrapperRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
    return () => {};
  }, [handleWheel]);

  return listWrapperRef;
};

export default useHorizontalScroll;
