import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

export const Step = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 200ms ease-in;
  ${({ theme }) => css`
    color: ${theme.text.dark.primary};
    background-color: ${theme.background.light};
    font-size: ${theme.typography.fontSize.heading.XXS};
  `}
`;

export const Card = styled.div`
  width: 288px;
  height: 192px;
  border-radius: 16px;
  ${({ theme }) => css`
    padding: ${theme.spacing.level1.XXL};
    background-color: rgba(256, 256, 256, 0.12);
    /* &:hover ${Step} {
      transition: all 200ms ease-in;
      color: ${theme.text.active.secondary};
    } */

    @media ${below.laptop} {
      width: 242px;
      height: 212px;
    }
    @media ${below.tablet} {
      width: 100%;
      height: 192px;
      margin-bottom: ${theme.spacing.level1.XXL};
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
    @media ${below.mobile} {
      width: 100%;
      height: auto;
    }
  `}
`;

export const StepBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.level1.XXXL};
  `}
`;

export const Title = styled.h4`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-size: ${theme.typography.fontSize.body.M};
    margin-bottom: ${theme.spacing.level1.XS};
    font-family: ${theme.typography.fontFamily.medium};
    font-weight: ${theme.typography.fontWeight.medium};
  `}
`;

export const SubTitle = styled.p`
  line-height: 20px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-family: ${theme.typography.fontFamily.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    font-size: ${theme.typography.fontSize.caption.M};
  `}
`;
