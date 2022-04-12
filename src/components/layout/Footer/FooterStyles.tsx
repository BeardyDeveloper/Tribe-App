import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

export const Section = styled.footer`
  width: 100%;
  padding: 160px 0 48px 0;

  @media ${below.tablet} {
    padding: 80px 0 48px 0;
  }
  @media ${below.mobile} {
    padding: 60px 0 48px 0;
  }
`;

export const Box = styled.div`
  width: 100%;
  margin-bottom: 56px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    border-left: ${`4px solid ${theme.border.light.primary}`};
  `}

  @media ${below.tablet} {
    margin-bottom: 48px;
    border-left: none;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  ${({ theme }) => css`
    border-bottom: ${`1px solid ${theme.border.light.secondary}`};
  `}
`;

export const About = styled.p`
  line-height: 20px;
  padding-top: 56px;
  ${({ theme }) => css`
    color: ${theme.text.dark.secondary};
    font-size: ${theme.typography.fontSize.caption.M};
    font-family: ${theme.typography.fontFamily.light};
    font-weight: ${theme.typography.fontWeight.light};
  `}
  @media ${below.tablet} {
    padding-top: 48px;
  }
`;

export const LogoFrame = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.level1.XXL};

  @media ${below.tablet} {
    width: 100%;
    padding-left: 0;
    margin-bottom: ${({ theme }) => theme.spacing.level2.XS};
    justify-content: center;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${below.tablet} {
    justify-content: center;
  }
`;

export const Inc = styled.span`
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.text.dark.ternary};
    font-size: ${theme.typography.fontSize.body.M};
    font-family: ${theme.typography.fontFamily.regular};
    font-weight: ${theme.typography.fontWeight.regular};
  `}
  @media ${below.tablet} {
    text-align: center;
  }
`;

export const Lists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media ${below.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ListBox = styled.div`
  width: 30%;

  @media ${below.tablet} {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.level2.XXS};
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;
