import React from "react";

import credit from "../../../../assets/images/ico_credit_gradation.png";
import "./LackOfCreditModal.css";

import handleBackgroundClick from "../../../../utils/handleBackgroundClick";

import CloseButton from "../DonationsModal/CloseButton";
import useEscapeModal from "../../../../hooks/useEscapeModal";

function LackOfCreditModal({ closeModal }) {
  useEscapeModal(closeModal);

  return (
    <div
      className="lack-of-credit-modal-background"
      onClick={(e) => handleBackgroundClick(e, closeModal)}
    >
      <div className="lack-of-credit-modal">
        <div>
          <CloseButton onClick={closeModal} />
        </div>
        <img className="credit" src={credit} alt="크레딧 이미지" />
        <p className="lack-of-credit-modal-title">
          앗! 투표하기 위한 <span>크레딧</span>이 부족해요
        </p>
        <button className="button button_active" onClick={closeModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default LackOfCreditModal;
