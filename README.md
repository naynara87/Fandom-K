# Fandom-k

아이돌 조공 플랫폼인 'Fandom-K' 서비스

![Fandom-K 메인](./ReadmeSource/main.png)

## 디자인 미리보기

https://www.figma.com/design/3RlulJLcw8NDqNNFNcaBOL/%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=1-9487&t=e3GiGHll8MxZXEKL-1

## 요구사항

https://codeit.notion.site/Fandom-K-32de75dea0204259817fd345535b5d89

## 프로젝트 구조

```plaintext
Fandom-k/
├── public/
│   ├── index.html
│   └── ...
├── ReadmeSource/
│   └── ...
├── src/
│   ├── api/
│   │   ├── getApi
│   │   ├── postApi
│   │   └── putApi
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── styles/
│   │       └── global.css
│   ├── components/
│   │   ├── Header
│   │   ├── Loadingbar
│   │   └── ...
│   ├── context/
│   │   └── CreditContextProvider
│   ├── hooks/
│   │   ├── useChartFunc
│   │   └── ...
│   ├── pages/
│   │   ├── Landing/
│   │   │   ├── Landing.jsx
│   │   │   └── ...
│   │   ├── List/
│   │   │   ├── components/
│   │   │   │   ├── ChartVoteModal/
│   │   │   │   │   ├── ChartVoteModal.jsx
│   │   │   │   │   └── ...
│   │   │   │   ├── CreditModal
│   │   │   │   │   ├── CreditModal.jsx
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   └── List.jsx
│   │   └── Mypage/
│   │       ├── components/
│   │       │   ├── AddFavoriteIdolList/
│   │       │   │   ├── AddIdolListButton/
│   │       │   │   └── ...
│   │       │   └── MyFavoriteIdolList/
│   │       │   │   ├── MyIdolListItem/
│   │       │   │   └── ...
│   │       │   └── ...
│   │       └── ...
│   ├── utils/
│   │   └── ...
│   ├── App.js
│   └── index.js
└── README.md
```

## 브랜치 전략

- main: 최종 릴리즈 브랜치
- develop: 다음 릴리즈를 개발하는 브랜치
- feature/: 새로운 기능을 개발하는 브랜치
- release/: 릴리즈 준비를 하는 브랜치
- hotfix/: 긴급 버그 수정을 위한 브랜치

브랜치를 생성할 때는 다음과 같은 네이밍 컨벤션을 따릅니다:

- 기능 개발: feature/브랜치이름
- 버그 수정: hotfix/브랜치이름
- 릴리즈 준비: release/브랜치이름
