import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

interface StyledProps {
  image?: string;
}

export const Section = styled.header<StyledProps>`
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 160px 0 72px 0;
  ${({ theme, image }) => css`
    background-image: ${`url(${image})`};
    background-color: ${theme.text.active.secondary};
  `}
  background-position: center;
  background-size: cover;
  object-fit: fill;

  @media ${below.mobile} {
    padding: 130px 0 50px 0;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${below.tablet} {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  line-height: 72px;
  ${({ theme }) => {
    return css`
      color: ${theme.text.light.primary};
      font-size: ${theme.typography.fontSize.heading.XXXL};
      font-family: ${theme.typography.fontFamily.light};
      font-weight: ${theme.typography.fontWeight.light};
      margin-bottom: ${theme.spacing.level1.M};

      @media ${below.laptop} {
        font-size: ${theme.typography.fontSize.heading.XXL};
        line-height: 62px;
      }
      @media ${below.mobile} {
        line-height: 46px;
        font-size: ${theme.typography.fontSize.heading.XL};
      }
    `;
  }}
`;
