import React from "react";
import "./LackOfCreditModal.css";
import CloseButton from "../DonationsModal/CloseButton";
import useEscapeModal from "../../../../hooks/useEscapeModal";

function LackOfCreditModal({ closeModal }) {
  useEscapeModal(closeModal);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      closeModal();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackgroundClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="modal modal-lack-of-credit">
        <div className="modal-header">
          <CloseButton onClick={closeModal} />
        </div>
        <div className="modal-content">
          <i className="icon-md icon-credit" />
          <p className="title">
            앗! 투표하기 위한 <span>크레딧</span>이 부족해요
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn-primary" onClick={closeModal}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LackOfCreditModal;
