import React, { useState, useEffect, useContext } from "react";
import "./ThisMonthsChart.css";
import IdolDetail from "../IdolDetail";
import ChartVoteModal from "../ChartVoteModal/ChartVoteModal";
import useIdolData from "../../../../hooks/useIdolData";
import LoadingBar from "../../../../components/Loadingbar";
import { CreditContext } from "../../../../components/CreditContextProvider";
import LackOfCreditModal from "../LackOfCreditModal/LackOfCreditModal";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 1200) {
    return 5;
  }
  return 10;
};

function ThisMonthsChart() {
  const { localCredit } = useContext(CreditContext);

  const [activeTab, setActiveTab] = useState("female");
  const [pageSize, setPageSize] = useState(getPageSize());
  const { idolData, isLoading, fetchError, fetchIdolsData } =
    useIdolData(activeTab);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(pageSize);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false); // 추가된 부분

  useEffect(() => {
    const handleResize = () => {
      const newPageSize = getPageSize();
      setPageSize(newPageSize);
      setDisplayCount(newPageSize);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = () => {
    if (localCredit < 1000) {
      setShowLackOfCreditModal(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const updateIdolRank = () => {
    fetchIdolsData(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowLackOfCreditModal(false);
  };

  const tab = (gender) => {
    setActiveTab(gender);
    setDisplayCount(pageSize);
  };

  const loadMore = () => {
    setDisplayCount((prevCount) => prevCount + pageSize);
  };

  return (
    <section className="section chart">
      <div className="section-header">
        <h3 className="title">이달의 차트</h3>
        <button
          type="button"
          aria-label="차트 투표하기"
          className="btn-modal-open"
          onClick={openModal}
        >
          <i className="icon-md icon-chart" />
          차트 투표하기
        </button>
      </div>
      <div className="chart-tab">
        <button
          type="button"
          className={`chart-tab-button ${activeTab === "female" ? "active" : ""}`}
          onClick={() => tab("female")}
        >
          이달의 여자 아이돌
        </button>
        <button
          type="button"
          className={`chart-tab-button ${activeTab === "male" ? "active" : ""}`}
          onClick={() => tab("male")}
        >
          이달의 남자 아이돌
        </button>
      </div>

      {isLoading && (
        <div className="chart-wrap">
          <LoadingBar />
        </div>
      )}

      {fetchError && <div>Error loading data</div>}

      <ul className="ranking-list">
        {!isLoading &&
          !fetchError &&
          idolData
            .slice(0, displayCount)
            .map((idol) => <IdolDetail key={idol.id} idolData={idol} />)}
      </ul>

      {displayCount < idolData.length && (
        <button
          className="btn-more"
          type="button"
          aria-label="더보기 버튼"
          onClick={loadMore}
        >
          더 보기
        </button>
      )}

      {isModalOpen && (
        <ChartVoteModal
          closeModal={closeModal}
          idolRank={idolData}
          gender={activeTab}
          updateIdolRank={updateIdolRank}
        />
      )}

      {showLackOfCreditModal && <LackOfCreditModal closeModal={closeModal} />}
    </section>
  );
}

export default ThisMonthsChart;
