import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

import { SpaceCardType } from './SpaceCard';

interface StyledProps {
  type?: SpaceCardType;
  letterSpace?: string;
  image?: string;
}

export const Row = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Clamp = styled.div<StyledProps>`
  width: 4px;
  height: 24px;
  border-radius: 2px;
  transition: all 200ms ease-in;
  ${({ theme, type }) => css`
    background-color: ${type === SpaceCardType.Light
      ? theme.border.dark.ternary
      : theme.background._dark};
    margin-right: ${theme.spacing.level1.XXL};
  `}
`;

export const Card = styled.div<StyledProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 16px;
  transition: all 200ms ease-in;
  cursor: pointer;
  ${({ theme, type }) => css`
    padding: ${theme.spacing.level1.XXL};
    border: ${`1.5px solid ${
      type === SpaceCardType.Light
        ? theme.border.dark.ternary
        : theme.border.dark.primary
    }`};

    &:hover {
      transition: all 200ms ease-in;
      border: ${`1.5px solid ${theme.border.active.secondary}`};
    }
    &:hover ${Clamp} {
      transition: all 200ms ease-in;
      background-color: ${theme.border.active.secondary};
    }

    @media ${below.laptop} {
      padding: ${`${theme.spacing.level1.XXL} ${theme.spacing.level1.L}`};
    }
  `}
`;

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.div<StyledProps>`
  width: 45px;
  height: 45px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.h3<StyledProps>`
  width: 100%;
  text-align: center;
  ${({ theme, type }) => css`
    color: ${type === SpaceCardType.Light
      ? theme.text.dark.primary
      : theme.text.light.primary};
    font-size: ${theme.typography.fontSize.heading.M};
    font-family: ${theme.typography.fontFamily.medium};
    font-weight: ${theme.typography.fontWeight.medium};
    margin-top: ${theme.spacing.level1.XXL};
  `}
`;

export const Description = styled.h3<StyledProps>`
  width: 100%;
  text-align: left;
  ${({ theme, type }) => css`
    color: ${type === SpaceCardType.Light
      ? theme.text.dark.primary
      : theme.text.light.primary};
    font-size: ${theme.typography.fontSize.body.M};
    font-family: ${theme.typography.fontFamily.medium};
    font-weight: ${theme.typography.fontWeight.medium};
  `}
`;

export const Divider = styled.div<StyledProps>`
  width: 1.5px;
  height: 34px;
  ${({ theme, type }) => css`
    background-color: ${type === SpaceCardType.Light
      ? theme.background.light
      : theme.background._dark};
    margin: ${`0 ${theme.spacing.level1.XXL}`};

    @media ${below.tablet} {
      width: 100%;
      height: 1.5px;
      margin: ${`${theme.spacing.level1.XXL} 0`};
    }
  `}
`;
