/* eslint-disable fp/no-let */
import styled, { css } from 'styled-components';

import { TitleBoldType } from './TitleBoldPart';

interface StyledProps {
  type?: TitleBoldType;
  hideLine?: boolean;
}

export const Bold = styled.b<StyledProps>`
  position: relative;
  ${({ theme, type, hideLine }) => {
    let color: string;

    switch (type) {
      case TitleBoldType.Dark:
        color = theme.text.dark.primary;
        break;
      case TitleBoldType.White:
        color = theme.text.light.primary;
        break;
      case TitleBoldType.Sky:
        color = theme.text.active.primary;
        break;

      default:
        color = theme.text.dark.primary;
        break;
    }

    const afterUrl =
      type === TitleBoldType.White
        ? '/images/AfterLineSky.svg'
        : '/images/AfterLine.svg';

    return css`
      color: ${color};
      font-weight: ${theme.typography.fontWeight.medium};
      font-family: ${theme.typography.fontFamily.medium};
      margin: ${`0 ${theme.spacing.level1.XXS}`};
      &::after {
        display: ${hideLine ? 'none' : 'block'};
        content: '';
        width: 100%;
        height: 10px;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        background-image: url(${afterUrl});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
      }
    `;
  }}
`;
