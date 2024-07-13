import React from 'react';
import './ThisMonthsChart.css';
import IdolDetail from './IdolDetail';

function ThisMonthsChart() {
  return (
    <div className="container">
      <div className="header">
        <h2>이달의 차트</h2>
        <button type="button">차트 투표하기</button>
      </div>
      <div className="chart-nav">
        <button type="button">이달의 여자 아이돌</button>
        <button type="button">이달의 남자 아이돌</button>
      </div>
      <IdolDetail />
      <IdolDetail />
      <IdolDetail />
      <IdolDetail />
      <IdolDetail />
      <IdolDetail />
      <IdolDetail />
      <div className="more-button">
        <button type="button">더 보기</button>
      </div>
    </div>
  );
}

export default ThisMonthsChart;
