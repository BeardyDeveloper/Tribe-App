import styled, { css } from 'styled-components';

import { above, below } from '$theme/viewports';

export const Box = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${above.mobile} {
    width: 576px;
  }
  @media ${above.tablet} {
    width: 970px;
  }
  @media ${above.laptop} {
    width: 1200px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  line-height: 52px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.text.dark.primary};
    font-weight: ${theme.typography.fontWeight.light};
    font-family: ${theme.typography.fontFamily.light};
    font-size: ${theme.typography.fontSize.heading.XL};
    margin: ${`${theme.spacing.level1.XXL} auto ${theme.spacing.level2.M} auto`};

    @media ${below.mobile} {
      font-size: ${theme.typography.fontSize.heading.L};
      line-height: 46px;
    }
    @media ${below.mobileS} {
      font-size: ${theme.typography.fontSize.heading.M};
      line-height: 42px;
    }
  `}
`;
