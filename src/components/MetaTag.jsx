import React from 'react';
import { Helmet } from 'react-helmet';

const URL = 'https://fandom-k-fe08-part2-team3.netlify.app/';
const TITLE = 'Fandom-k :: 내가 좋아하는 아이돌을 아이돌을 가장 쉽게 덕질하는 방법';
const DESCRIPTION =
  '아이돌 후원, 생일 광고, 차트 투표, 관심 있는 아이돌 설정까지! 내가 좋아하는 아이돌을 위한 최고의 플랫폼입니다. Fandom-k를 통해 내가 좋아하는 아이돌을 가장 쉽게 덕질해보세요!';
const IMAGE_URL = 'https://fandom-k-fe08-part2-team3.netlify.app/open_graph_img.png';

function MetaTag() {
  return (
    <Helmet>
      <title>{TITLE}</title>

      <meta name="title" content={TITLE} />
      <meta name="description" content={DESCRIPTION} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE_URL} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={TITLE} />
      <meta property="twitter:description" content={DESCRIPTION} />
      <meta property="twitter:image" content={IMAGE_URL} />
    </Helmet>
  );
}

export default MetaTag;
