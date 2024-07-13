import React from 'react';

function Button({ text, type, onClickDonations, onClickCheck }) {
  const handleClick = () => {
    if (text === '후원하기') {
      onClickDonations();
    } else {
      onClickCheck();
    }
  };

  return (
    <button className={`Button Button_${type}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
