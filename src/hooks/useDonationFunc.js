import { useState, useEffect } from "react";

const useDonationFunc = (selectedDonation, setSelectedDonation, localCredit, setLocalReceivedDonations) => {
  const [showDonationsModal, setShowDonationsModal] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);

  const openLackOfCreditModal = () => setShowLackOfCreditModal(true);

  const openDonationsModal = (donation) => {
    setSelectedDonation(donation);
    setShowDonationsModal(true);
  };

  useEffect(() => {
    if (!selectedDonation) return;
    setLocalReceivedDonations(selectedDonation.receivedDonations);
  }, [selectedDonation, setLocalReceivedDonations]);

  const openModal = (donation) => {
    if (localCredit <= 0) openLackOfCreditModal();
    else openDonationsModal(donation);
  };

  const closeModal = () => {
    if (showDonationsModal) setShowDonationsModal(false);
    setShowLackOfCreditModal(false);
  };

  return {
    showDonationsModal,
    showLackOfCreditModal,
    openModal,
    closeModal,
  };
};

export default useDonationFunc;
