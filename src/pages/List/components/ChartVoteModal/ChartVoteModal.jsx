import React, { useContext } from 'react';
import useChartVoteHandler from '../../../../hooks/useChartVoteHandler';
import useEscapeModal from '../../../../hooks/useEscapeModal';
import { CreditContext } from '../../../../context/CreditContextProvider';
import IdolDetail from '../IdolDetail/IdolDetail';
import Modal from '../../../../components/Modal';
import './ChartVoteModal.css';

function ChartVoteModal({ closeModal, idolRank, gender, updateIdolRank }) {
  const { handleCreditUpdate, localCredit } = useContext(CreditContext);
  const { selectedIdolId, handleIdolRadioClick, handleVoteButtonClick } = useChartVoteHandler(
    gender,
    closeModal,
    idolRank,
    updateIdolRank,
    handleCreditUpdate,
    localCredit,
  );
  useEscapeModal(closeModal);

  const footer = (
    <>
      <button type="button" className="btn-primary" onClick={handleVoteButtonClick} aria-label="투표하기 버튼">
        투표하기
      </button>
      <p>
        투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
      </p>
    </>
  );

  return (
    <Modal
      title={`이달의 ${gender === 'female' ? '여자' : '남자'} 아이돌`}
      closeModal={closeModal}
      footer={footer}
      className="modal-chart"
    >
      {idolRank.map((idol) => (
        <IdolDetail
          key={idol.id}
          idolData={idol}
          isNeedRadio
          isSelected={selectedIdolId === idol.id}
          onRadioChange={() => handleIdolRadioClick(idol.id)}
        />
      ))}
    </Modal>
  );
}

export default ChartVoteModal;
