import styled, { css } from 'styled-components';

import { SpaceCard } from '$components/index/SpaceCard/SpaceCard';
import { below } from '$theme/viewports';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 104px 0 104px 0;
  background-color: ${({ theme }) => theme.background.dark};

  @media ${below.tablet} {
    padding: 84px 0 84px 0;
    flex-direction: column;
  }
  @media ${below.mobile} {
    padding: 56px 0 56px 0;
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${below.tablet} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${below.tablet} {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h6`
  text-align: left;
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
    font-weight: ${theme.typography.fontWeight.light};
    font-family: ${theme.typography.fontFamily.light};
    font-size: ${theme.typography.fontSize.heading.XL};
    margin-bottom: ${theme.spacing.level1.M};

    @media ${below.tablet} {
      text-align: center;
    }
    @media ${below.mobileS} {
      font-size: ${theme.typography.fontSize.heading.L};
    }
  `}
`;

export const SubTitle = styled.p`
  width: 95%;
  text-align: left;
  line-height: 24px;
  ${({ theme }) => css`
    color: ${theme.text.dark.secondary};
    font-weight: ${theme.typography.fontWeight.regular};
    font-family: ${theme.typography.fontFamily.regular};
    font-size: ${theme.typography.fontSize.body.M};
    margin-bottom: ${theme.spacing.level1.XXL};

    @media ${below.tablet} {
      text-align: center;
    }
    @media ${below.mobile} {
      font-size: ${theme.typography.fontSize.caption.M};
    }
  `}
`;

export const Cards = styled.div`
  width: calc(100% - 513px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media ${below.laptop} {
    width: calc(100% - 436px);
  }
  @media ${below.tablet} {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.level2.XXS};
  }
`;

export const StyledSpaceCard = styled(SpaceCard)`
  margin-bottom: ${({ theme }) => theme.spacing.level1.XXL};
`;
