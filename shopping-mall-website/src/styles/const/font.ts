import { css } from 'styled-components';
import { colors } from './colors';

const fontFaces = css`
  @font-face {
    font-family: 'NotoSansKR-Bold';
    src:
      local('NotoSansKR-Bold'),
      url('/fonts/NotoSansKR-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR-SemiBold';
    src:
      local('NotoSansKR-Bold'),
      url('/fonts/NotoSansKR-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR-Medium';
    src:
      local('NotoSansKR-Medium'),
      url('/fonts/NotoSansKR-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR-Regular';
    src:
      local('NotoSansKR-Regular'),
      url('/fonts/NotoSansKR-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR-Light';
    src:
      local('NotoSansKR-Light'),
      url('/fonts/NotoSansKR-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
`;

const font = {
  H1: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 54px;
    line-height: 78px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  H2: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 48px;
    line-height: 70px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  H3: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 36px;
    line-height: 52px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  H4: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 32px;
    line-height: 46px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  H5: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 24px;
    line-height: 35px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  H6: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 22px;
    line-height: 33px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  H7: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 18px;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.55px;
    color: ${colors['$gray900']};
  `,
  S1: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  S2: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 16px;
    line-height: 23px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  S3: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  S4: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
    font-weight: 700;
    color: ${colors['$gray900']};
  `,
  B1: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    color: ${colors['$gray900']};
  `,
  B2: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${colors['$gray900']};
  `,
  'B2-M': css`
    font-family: 'NotoSansKR-Medium';
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: ${colors['$gray900']};
  `,
  B3: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
    color: ${colors['$gray900']};
  `,
  'B3-M': css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
    color: ${colors['$gray900']};
  `,
  B4: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    color: ${colors['$gray900']};
  `,
  'B4-M': css`
    font-family: 'NotoSansKR-Medium';
    font-size: 10px;
    line-height: 14px;
    color: ${colors['$gray900']};
  `,
  B5: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 8px;
    line-height: 12px;
    font-weight: 400;
    color: ${colors['$gray900']};
  `,
  Link1: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
    text-decoration-line: underline;
  `,
  'Link1-B': css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
    font-weight: 700;
    text-decoration-line: underline;
  `,
  Link2: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    text-decoration-line: underline;
  `,
  Link3: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 8px;
    line-height: 12px;
    font-weight: 400;
    text-decoration-line: underline;
  `,
  BTN1: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  `,
  BTN2: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
    font-weight: 700;
  `,
  BTN3: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    line-height: 17px;
  `,
  BTN4: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 10px;
    line-height: 14px;
  `,
  Small1: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    color: ${colors['$gray900']};
  `,
  'Small-Button': css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    color: ${colors['$gray900']};
  `,
  Small2: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.36px;
    color: ${colors['$gray900']};
  `,
  Small3: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 10px;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    color: ${colors['$gray900']};
  `,
  Small4: css`
    font-family: 'NotoSansKR-Medium';
    font-size: 6px;
    font-stretch: normal;
    line-height: 0.83;
    letter-spacing: -0.18px;
    color: ${colors['$gray900']};
  `,
};

export { font, fontFaces };
