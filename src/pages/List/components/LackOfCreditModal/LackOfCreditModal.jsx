import React from 'react';
import Modal from '../../../../components/Modal';
import './LackOfCreditModal.css';

function LackOfCreditModal({ closeModal }) {
  const footer = (
    <button type="button" className="btn-primary" onClick={closeModal} aria-label="확인 버튼">
      확인
    </button>
  );

  return (
    <Modal title="크레딧 부족" closeModal={closeModal} footer={footer} className="modal-lack-of-credit">
      <div className="modal-content">
        <i className="icon-md icon-credit" />
        <p className="title">
          앗! 투표하기 위한 <span>크레딧</span>이 부족해요
        </p>
      </div>
    </Modal>
  );
}

export default LackOfCreditModal;
