import React from 'react';
import './Landing.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function Landing() {
  return (
    <>
      <Helmet>
        <title>Fandom-k :: 내가 좋아하는 아이돌을 가장 쉽게 덕질 하는 방법</title>
      </Helmet>
      <main className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-5 text-2xl text-white mb-10">
              내가 좋아하는 아이돌을
              <br />
              가장 <b className="text-brand-orange">쉽게 덕질하는</b> 방법
            </p>
            <h1 className="text-center">
              <img src={logo} alt="로고" className="mx-auto" />
            </h1>
            <div className="mt-10">
              <Link
                to="/list"
                className="block mx-auto
                max-w-sm w-full py-2 bg-brand-gradation text-sm font-bold rounded-md transition duration-300 ease-in-out"
              >
                지금 시작하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
