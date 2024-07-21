import React, { useState, useContext } from 'react';
import { CreditContext } from '../../../../context/CreditContextProvider';
import Modal from '../../../../components/Modal';
import './CreditModal.css';

function CreditModal({ onClose }) {
  const { handleRecharge } = useContext(CreditContext);
  const [selectedCredit, setSelectedCredit] = useState(100);

  const creditOptions = [100, 500, 1000];

  const footer = (
    <button
      type="button"
      className="btn-primary"
      onClick={() => handleRecharge(selectedCredit)}
      aria-label="충전하기 버튼"
    >
      <i className="icon-md icon-credit-white" />
      충전하기
    </button>
  );

  return (
    <Modal title="크레딧 충전하기" closeModal={onClose} footer={footer} className="modal-credit-recharge">
      {creditOptions.map((credit) => (
        <label
          key={credit}
          className={`radio-label ${selectedCredit === credit ? 'selected' : ''}`}
          htmlFor={`credit-${credit}`}
        >
          <div className="radio-credit-wrapper">
            <i className="icon-md icon-credit" />
            {credit}
          </div>
          <input
            type="radio"
            id={`credit-${credit}`}
            value={credit}
            checked={selectedCredit === credit}
            onChange={(e) => setSelectedCredit(Number(e.target.value))}
          />
        </label>
      ))}
    </Modal>
  );
}

export default CreditModal;
