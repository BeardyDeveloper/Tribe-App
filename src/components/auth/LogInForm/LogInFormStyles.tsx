import styled, { css } from 'styled-components';

import { EmailSvg } from '$assets/index';
import { below } from '$theme/viewports';

interface StyledProps {
  mt?: boolean;
  minMb?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    padding-top: ${theme.spacing.level2.XXXS};
    background-color: ${theme.background.dark};
  `}
`;

export const Content = styled.div`
  width: 352px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledEmailSvg = styled(EmailSvg)`
  width: 23px !important;
  height: 26px !important;
`;

export const Title = styled.div`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-family: ${theme.typography.fontWeight.light};
    font-size: ${theme.typography.fontSize.heading.XL};
    line-height: ${theme.spacing.level2.XS};
    margin-bottom: ${theme.spacing.level1.XXXS};

    @media ${below.mobileS} {
      font-size: ${theme.typography.fontSize.heading.L};
      margin-bottom: ${theme.spacing.level1.XXXS};
    }
  `}
`;

export const InputBox = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme, mt, minMb }) => css`
    margin-bottom: ${minMb
      ? theme.spacing.level2.XXXS
      : theme.spacing.level1.M};
    margin-top: ${mt ? theme.spacing.level2.XXXS : 0};
  `}
`;

export const Label = styled.div`
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-size: ${theme.typography.fontSize.caption.M};
    line-height: ${theme.spacing.level1.XL};
    margin-bottom: ${theme.spacing.level1.XS};
  `}
`;

export const Helper = styled.p`
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-size: ${theme.typography.fontSize.caption.M};
    line-height: ${theme.spacing.level1.XL};
    margin-top: ${theme.spacing.level1.XS};
  `}
`;

export const HelperLink = styled.span`
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.text.active.primary};
    font-size: ${theme.typography.fontSize.caption.M};
    line-height: ${theme.spacing.level1.XL};
  `}
`;
