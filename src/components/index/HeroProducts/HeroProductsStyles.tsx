import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

interface StyledProps {
  mobileWidth?: string;
}

export const ProductBox = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Products = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${below.laptop} {
    width: 110%;
  }
  @media ${below.tablet} {
    width: 100%;
    justify-content: center;
  }
  @media ${below.mobile} {
    width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : '330px')};
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Product = styled.span`
  transition: color 200ms ease-in;
  /* cursor: pointer; */
  ${({ theme }) => {
    return css`
      color: ${theme.text.light.primary};
      font-family: ${theme.typography.fontFamily.regular};
      font-weight: ${theme.typography.fontWeight.regular};
      font-size: ${theme.typography.fontSize.body.M};
      /* &:hover {
        color: ${theme.text.active.primary};
        transition: color 200ms ease-in;
      } */
      @media ${below.mobile} {
        font-size: ${theme.typography.fontSize.caption.M};
      }
    `;
  }}
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${({ theme }) => theme.background._dark};
  margin: ${({ theme }) => `0 ${theme.spacing.level1.M}`};
  @media ${below.laptop} {
    margin: ${({ theme }) => `0 ${theme.spacing.level1.S}`};
  }
  @media ${below.mobile} {
    margin: ${({ theme }) =>
      `${theme.spacing.level1.XS} ${theme.spacing.level1.S}`};
  }
`;
