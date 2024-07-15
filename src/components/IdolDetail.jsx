import React from 'react';
import './IdolDetail.css';

function IdolDetail() {
  return (
    <div className="idol-container">
      <div className="idol-info">
        <div className="idol-image">
          <img src="https://via.placeholder.com/150" alt="아이돌 이미지" />
        </div>
        <div className="idol-rate">1</div>
        <h3 className="idol-group">뉴진스</h3>
        <h3 className="idol-name">민지</h3>
      </div>
      <p className="idol-vote-rate">204,000표</p>
    </div>
  );
}

export default IdolDetail;
