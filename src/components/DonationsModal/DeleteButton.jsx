import React from 'react';
import donationDelete from '../../assets/images/donationDelete.png';

function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <img class="delete-button" src={donationDelete} alt="삭제 이미지" />
    </button>
  );
}

export default DeleteButton;
