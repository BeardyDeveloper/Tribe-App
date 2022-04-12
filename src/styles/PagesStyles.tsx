/* eslint-disable fp/no-let */
import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

export const Template = styled.div`
  width: 100%;
  padding-top: 136px;
`;

export const Title = styled.h2`
  text-align: center;
  line-height: 48px;
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.heading.XL};
    color: ${theme.text.dark.primary};
  `}
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  ${({ theme }) => css`
    background-color: ${theme.palette.Neutral._lightGrey};
    margin: ${`${theme.spacing.level2.S} 0`};

    @media ${below.tablet} {
      margin: ${`${theme.spacing.level2.XXXS} 0`};
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spacing.level2.XXXS};

  @media ${below.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.level2.XXXS};
`;

export const PagePaper = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.level2.XL};
`;
