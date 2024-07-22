import { useState, useCallback } from 'react';
import useIdolData from './useIdolData';
import usePageResize from './usePageResize';

const useChartFunc = (localCredit) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);
  const [activeTab, setActiveTab] = useState('female');

  const { fetchIdolsData } = useIdolData(activeTab);
  const { pageSize, displayCount, setDisplayCount } = usePageResize();

  const tab = useCallback(
    (gender) => {
      setActiveTab(gender);
      setDisplayCount(pageSize);
      fetchIdolsData(gender, pageSize);
    },
    [setDisplayCount, fetchIdolsData, pageSize],
  );

  const openModal = useCallback(() => {
    if (localCredit < 1000) {
      setShowLackOfCreditModal(true);
    } else {
      setIsModalOpen(true);
      fetchIdolsData(activeTab, displayCount);
    }
  }, [localCredit, fetchIdolsData, activeTab, displayCount]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setShowLackOfCreditModal(false);
  }, []);

  const loadMore = useCallback(() => {
    setDisplayCount((prevCount) => {
      const newCount = prevCount + pageSize;
      fetchIdolsData(activeTab, newCount);
      return newCount;
    });
  }, [setDisplayCount, fetchIdolsData, pageSize, activeTab]);

  return {
    isModalOpen,
    showLackOfCreditModal,
    activeTab,
    displayCount,
    tab,
    openModal,
    closeModal,
    loadMore,
  };
};

export default useChartFunc;
