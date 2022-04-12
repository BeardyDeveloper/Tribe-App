import Skeleton from 'react-loading-skeleton';
import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

interface StyledProps {
  image?: string;
}

export const Title = styled.h4`
  text-align: center;
  transition: color 200ms ease-in;
  ${({ theme }) => css`
    color: ${theme.text.dark.primary};
    padding: ${`0 ${theme.spacing.level1.XXL}`};
    font-size: ${theme.typography.fontSize.heading.XXS};
    margin-bottom: ${theme.spacing.level1.S};
    font-family: ${theme.typography.fontFamily.medium};
    font-weight: ${theme.typography.fontWeight.medium};
  `}
`;

export const Card = styled.div`
  width: 352px;
  height: auto;
  border-radius: 16px;
  cursor: pointer;
  transition: color 200ms ease-in;
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.level1.XXL};
    border: ${`1.5px solid ${theme.border.light.secondary}`};
    &:hover ${Title} {
      color: ${theme.text.active.secondary};
    }
    @media ${below.laptop} {
      width: 300px;
      height: 232px;
    }
    @media ${below.tablet} {
      width: 75%;
      height: 212px;
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

export const ImageBox = styled.div<StyledProps>`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  object-fit: fill;
  ${({ theme, image }) => css`
    background-image: ${`url(${image})`};
    background-color: ${theme.palette.Neutral._lightGrey};
    margin-bottom: ${theme.spacing.level1.XXXL};
  `}
`;

export const Content = styled.p`
  line-height: 20px;
  height: 164px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.text.dark.secondary};
    padding: ${`0 ${theme.spacing.level1.XXL}`};
    font-family: ${theme.typography.fontFamily.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    font-size: ${theme.typography.fontSize.caption.M};

    & > figure {
      display: none;
    }
  `}
`;

export const Date = styled.p`
  line-height: 20px;
  text-align: right;
  ${({ theme }) => css`
    color: ${theme.text.dark.ternary};
    padding: ${`0 ${theme.spacing.level1.XXL}`};
    font-family: ${theme.typography.fontFamily.light};
    font-weight: ${theme.typography.fontWeight.light};
    font-size: ${theme.typography.fontSize.caption.M};
  `}
`;

export const LoaderContainer = styled.div`
  ${({ theme }) => css`
    padding: ${`0 ${theme.spacing.level1.XXL}`};
  `}
`;

export const RightSkeleton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.level1.M};
  `}
`;

export const StyledSkeleton = styled(Skeleton)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.level1.M};
  `}
`;
