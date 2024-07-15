import React from 'react';
import credit from '../../assets/images/credit.svg';
import DeleteButton from '../DonationsModal/DeleteButton';
import './LackOfCreditModal.css';

function LackOfCreditModal({ closeModal }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="lackOfCredit-background" onClick={handleBackgroundClick}>
      <div className="lackOfCredit-wrapper">
        <div>
          <DeleteButton onClick={closeModal} />
        </div>
        <img className="credit" src={credit} alt="크레딧 이미지" />
        <p className="lackOfCredit-title">
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
