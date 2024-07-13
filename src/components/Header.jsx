import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg'; // 로고 이미지 경로
import profile from '../assets/images/header-profile.png'; // 프로필 이미지 경로
import './Header.css'; // 스타일을 위한 CSS 파일

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.location.reload(); // 페이지 새로고침
  };

  const handleProfileClick = () => {
    navigate('/mypage'); // /mypage로 이동
  };

  return (
    <header className="header">
      <button
        type="button"
        className="header-logo-container"
        onClick={handleLogoClick}
        aria-label="Reload the page" // 접근성 향상
      >
        <img src={logo} alt="Fandom-k logo" className="header-logo" />
      </button>
      <button
        type="button"
        className="header-profile-container"
        onClick={handleProfileClick}
        aria-label="Go to My Page" // 접근성 향상
      >
        <img src={profile} alt="Profile" className="header-profile" />
      </button>
    </header>
  );
}

export default Header;
