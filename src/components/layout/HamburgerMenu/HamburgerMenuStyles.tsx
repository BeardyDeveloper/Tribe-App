/* eslint-disable fp/no-let */
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { NavbarType } from '$components/layout/Navbar/Navbar';
import { Button } from '$sharedComponents/Button/Button';
import { below } from '$theme/viewports';

interface StyledProps {
  navType?: NavbarType;
}

export const Menu = styled(motion.div)<StyledProps>`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 120;
  width: 0;
  max-width: 50%;
  height: calc(100vh - 80px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${({ theme, navType }) => css`
    padding: ${`${theme.spacing.level1.XL} ${theme.spacing.level1.XXL} ${theme.spacing.level2.XXXS} ${theme.spacing.level1.XXL}`};
    background-color: ${navType === NavbarType.Dark
      ? theme.background._dark
      : theme.background.light};
    border-right: ${`1.5px solid ${
      navType === NavbarType.Light
        ? theme.border.light.secondary
        : theme.text.dark.secondary
    }`};
  `}

  @media ${below.mobile} {
    max-width: 100%;
  }
`;

export const Links = styled.div`
  width: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LinkLabel = styled.span<StyledProps>`
  cursor: pointer;
  position: relative;
  width: 100%;
  text-align: center;
  transition: all 200ms ease-in;
  ${({ theme, navType }) => {
    let color: string;
    let activeColor: string;

    switch (navType) {
      case NavbarType.Light:
        color = theme.text.dark.secondary;
        activeColor = theme.text.dark.primary;
        break;
      case NavbarType.Dark:
        color = theme.text.dark.quaternary;
        activeColor = theme.text.light.primary;
        break;

      default:
        color = theme.text.dark.quaternary;
        activeColor = theme.text.light.primary;
        break;
    }

    return css`
      font-size: ${theme.typography.fontSize.body.M};
      color: ${color};
      padding: ${`${theme.spacing.level1.XXL} 0`};
      &:nth-child(1) {
        padding-top: 0;
      }

      &::after {
        content: '';
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: -${theme.spacing.level1.XXXS};
        left: 0;
        background-image: ${navType === NavbarType.Light
          ? `url('/images/GradientLine.svg')`
          : `url('/images/GradientLineDark.svg')`};
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        transform: translateY(-50%);
      }
      &.active {
        color: ${activeColor};
      }
      &:hover {
        transition: all 200ms ease-in;
        color: ${activeColor};
      }
    `;
  }}
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.level1.XXS};
`;
