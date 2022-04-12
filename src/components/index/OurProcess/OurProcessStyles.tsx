import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 72px 0 0;
`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 48px 105px;
  background-color: ${({ theme }) => theme.text.active.secondary};
  background-image: url('/images/ProcessBackground.svg');
  background-position: center;
  background-size: cover;
  object-fit: fill;
  border-radius: 16px;

  @media ${below.laptop} {
    padding: 48px 85px;
  }
  @media ${below.mobile} {
    padding: 48px 24px;
  }
`;

export const Title = styled.h2`
  width: 60%;
  line-height: 46px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-weight: ${theme.typography.fontWeight.light};
    font-family: ${theme.typography.fontFamily.light};
    font-size: ${theme.typography.fontSize.heading.XL};
    margin: ${`${theme.spacing.level1.XXL} auto ${theme.spacing.level2.M} auto`};

    @media ${below.laptop} {
      width: 65%;
    }
    @media ${below.tablet} {
      width: 100%;
    }
  `}
`;

export const Steps = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.level2.XS};

  @media ${below.laptop} {
    justify-content: space-between;
  }
  @media ${below.tablet} {
    flex-direction: column;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
