import React from 'react';
import './Landing.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import mobile1 from '../assets/images/img_sec01_mobile.png';
import mobile2 from '../assets/images/img_sec02_mobile.png';
import mobile3 from '../assets/images/img_sec03_mobile.png';

function Landing() {
  return (
    <>
      <Helmet>
        <title>Fandom-k :: 내가 좋아하는 아이돌을 가장 쉽게 덕질 하는 방법</title>
      </Helmet>
      <main>
        <section className="section sec01">
          <div className="section-wrap">
            <h2 className="main-title">
              내가 좋아하는 아이돌을
              <br />
              가장 <b className="text-brand-orange">쉽게 덕질하는</b> 방법
            </h2>
            <h1 className="logo">
              <img src={logo} alt="로고" />
            </h1>
            <Link to="/list" className="btn-main">
              지금 시작하기
            </Link>
          </div>
        </section>
        <section className="section sec02">
          <div className="section-wrap">
            <p className="sub-title">후원하기</p>
            <h2 className="title">
              좋아하는 아이돌에게
              <br />
              쉽게 조공해 보세요
            </h2>
            <img src={mobile1} alt="이미지" className="mobile-preview" />
          </div>
        </section>
        <section className="section sec03">
          <div className="section-wrap">
            <p className="sub-title">이달의 아티스트</p>
            <h2 className="title">
              내 아티스트에게 1등의
              <br />
              영예를 선물하세요
            </h2>
            <img src={mobile2} alt="이미지" className="mobile-preview" />
          </div>
        </section>
        <section className="section sec04">
          <div className="section-wrap">
            <p className="sub-title">나만의 아티스트</p>
            <h2 className="title">
              좋아하는 아티스트들의
              <br />
              소식을 모아보세요
            </h2>
            <img src={mobile3} alt="이미지" className="mobile-preview" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Landing;
