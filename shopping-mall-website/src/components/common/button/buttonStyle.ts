import styled, { css } from 'styled-components';
import { ButtonStylePropsType } from './buttonType';

export const Button = styled.button<ButtonStylePropsType>`
  ${({ theme, $type, $size }) => {
    const { colors, font } = theme;
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      padding: 12px 16px;

      ${getButtonColor($type, colors)};
      ${getButtonSize($size, font)};

      &:disabled {
        pointer-events: none;
        color: ${colors['$gray400']};
      }
    `;
  }}
`;

const getButtonColor = (type: string, colors: any) => {
  switch (type) {
    case 'primary':
      return css`
        color: ${colors['$white']};
        background-color: ${colors['$mint600']};

        &:hover {
          background-color: ${colors['$mint800']};
        }

        &:active {
          background-color: ${colors['$mint900']};
        }

        &:disabled {
          background-color: ${colors['$gray200']};
        }
      `;
    case 'secondary':
      return css`
        color: ${colors['$white']};
        background-color: ${colors['$bluegray500']};

        &:hover {
          background-color: ${colors['$bluegray600']};
        }

        &:active {
          background-color: ${colors['$bluegray900']};
        }

        &:disabled {
          background-color: ${colors['$gray200']};
        }
      `;
    default:
      break;
  }
};

const getButtonSize = (size: string, font: any) => {
  switch (size) {
    case 'l':
      return css`
        ${font['label-l']};
        height: 40px;
      `;
    case 'm':
      return css`
        ${font['label-m']};
        height: 36px;
      `;
    case 's':
      return css`
        ${font['label-m']};
        height: 32px;
      `;
    default:
      break;
  }
};
