import { css } from 'styled-components';

export const genericTyphography = () => css`
  @font-face {
    font-family: 'Noto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/static/assets/fonts/Noto/Noto-Regular.woff2) format('woff2'), url(/static/assets/fonts/Noto/Noto-Regular.woff);
  }
  @font-face {
    font-family: 'Noto';
    font-style: semi-bold;
    font-weight: 600;
    font-display: swap;
    src: url(/static/assets/fonts/Noto/Noto-ExtraBold.woff2) format('woff2'), url(/static/assets/fonts/Noto/Noto-ExtraBold.woff);
  }
  @font-face {
    font-family: 'Noto';
    font-style: extra-bold;
    font-weight: 800;
    font-display: swap;
    src: url(/static/assets/fonts/Noto/Noto-ExtraBold.woff2) format('woff2'), url(/static/assets/fonts/Noto/Noto-ExtraBold.woff);
  }
`;
