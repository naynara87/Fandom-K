import { useState, useEffect, useCallback } from 'react';

const useSaveMyIdol = () => {
  const getInitialData = useCallback(() => {
    try {
      const data = localStorage.getItem('my-favorite-idol');
      return JSON.parse(data) || [];
    } catch (error) {
      console.error('로컬 스토리지에서 데이터 가져오기 중 오류:', error);
      return [];
    }
  }, []);

  const [myFavoriteIdolList, setMyFavoriteIdolList] = useState(getInitialData);

  useEffect(() => {
    try {
      localStorage.setItem('my-favorite-idol', JSON.stringify(myFavoriteIdolList));
    } catch (error) {
      console.error('로컬 스토리지에 데이터 저장 중 오류:', error);
    }
  }, [myFavoriteIdolList]);

  const updateFavoriteIdolList = useCallback((newList) => {
    setMyFavoriteIdolList(newList);
  }, []);

  return { myFavoriteIdolList, setMyFavoriteIdolList: updateFavoriteIdolList };
};

export default useSaveMyIdol;
