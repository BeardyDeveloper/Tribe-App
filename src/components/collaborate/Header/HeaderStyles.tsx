import Image from 'next/image';
import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

export const Section = styled.header`
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 200px 0 200px 0;
  background-color: ${({ theme }) => theme.background.dark};

  @media ${below.tablet} {
    padding: 210px 0 150px 0;
  }
  @media ${below.mobile} {
    padding: 160px 0 100px 0;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${below.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroContent = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media ${below.tablet} {
    width: 100%;
    align-items: center;
  }
`;

export const BannerBox = styled.div`
  width: 620px;
  height: 620px;
  position: relative;

  @media ${below.laptop} {
    width: 580px;
    height: 580px;
  }
  @media ${below.tablet} {
    width: 650px;
    height: 650px;
  }
  @media ${below.mobile} {
    display: none;
  }
`;

export const Banner = styled(Image)`
  width: 100%;
`;

export const Title = styled.h1`
  width: 101%;
  line-height: 72px;
  ${({ theme }) => {
    return css`
      color: ${theme.text.light.primary};
      font-size: ${theme.typography.fontSize.heading.XXXL};
      font-family: ${theme.typography.fontFamily.light};
      font-weight: ${theme.typography.fontWeight.light};
      margin-bottom: ${theme.spacing.level2.XXS};

      @media ${below.laptop} {
        width: 110%;
        font-size: ${theme.typography.fontSize.heading.XXL};
        line-height: 62px;
      }
      @media ${below.tablet} {
        width: 100%;
        text-align: center;
      }
      @media ${below.mobile} {
        line-height: 46px;
        font-size: ${theme.typography.fontSize.heading.XL};
        margin-bottom: ${theme.spacing.level1.XXL};
      }
    `;
  }}
`;

export const Bold = styled.b`
  width: 100%;
  ${({ theme }) => {
    return css`
      color: ${theme.text.light.primary};
      font-size: ${theme.typography.fontSize.heading.XXXL};
      font-weight: ${theme.typography.fontWeight.medium};

      @media ${below.laptop} {
        width: 110%;
        font-size: ${theme.typography.fontSize.heading.XXL};
      }
      @media ${below.tablet} {
        width: 100%;
      }
      @media ${below.mobile} {
        font-size: ${theme.typography.fontSize.heading.XL};
      }
    `;
  }}
`;

export const SubTitle = styled.h4`
  width: 100%;
  line-height: 24px;
  ${({ theme }) => {
    return css`
      color: ${theme.text.dark.quaternary};
      font-size: ${theme.typography.fontSize.heading.XXS};
      font-family: ${theme.typography.fontFamily.regular};
      font-weight: ${theme.typography.fontWeight.regular};
      margin-top: ${theme.spacing.level2.XXXS};
      margin-bottom: ${theme.spacing.level2.XXS};

      @media ${below.laptop} {
        width: 105%;
        font-size: ${theme.typography.fontSize.body.M};
        margin-top: ${theme.spacing.level1.XXXL};
        margin-bottom: ${theme.spacing.level1.XXXL};
      }
      @media ${below.tablet} {
        width: 100%;
        text-align: center;
        color: ${theme.text.dark.secondary};
      }
      @media ${below.mobile} {
        margin-top: ${theme.spacing.level1.XXL};
        margin-bottom: ${theme.spacing.level1.XXXL};
      }
    `;
  }}
`;
