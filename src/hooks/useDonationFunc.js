import { useState, useEffect, useCallback, useMemo } from 'react';

const useDonationFunc = (selectedDonation, setSelectedDonation, localCredit, setLocalReceivedDonations) => {
  const [showDonationsModal, setShowDonationsModal] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);

  const openLackOfCreditModal = () => setShowLackOfCreditModal(true);

  const openDonationsModal = useCallback(
    (donation) => {
      setSelectedDonation(donation);
      setShowDonationsModal(true);
    },
    [setSelectedDonation],
  );

  useEffect(() => {
    if (!selectedDonation) return;
    setLocalReceivedDonations(selectedDonation.receivedDonations);
  }, [selectedDonation, setLocalReceivedDonations]);

  const openModal = useCallback(
    (donation) => {
      if (localCredit <= 0) openLackOfCreditModal();
      else openDonationsModal(donation);
    },
    [localCredit, openLackOfCreditModal, openDonationsModal],
  );

  const closeModal = useCallback(() => {
    if (showDonationsModal) setShowDonationsModal(false);
    setShowLackOfCreditModal(false);
  }, [showDonationsModal]);

  const memoizedValues = useMemo(
    () => ({
      showDonationsModal,
      showLackOfCreditModal,
      openModal,
      closeModal,
    }),
    [showDonationsModal, showLackOfCreditModal, openModal, closeModal],
  );

  return memoizedValues;
};

export default useDonationFunc;
