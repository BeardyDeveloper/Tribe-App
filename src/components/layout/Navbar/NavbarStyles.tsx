/* eslint-disable fp/no-let */
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { Container } from '$components/UI/Container';
import { below } from '$theme/viewports';

import { NavbarType } from './Navbar';

interface StyledProps {
  navType?: NavbarType;
  isNavActive?: boolean;
  isLinkActive?: boolean;
  isBelowTablet?: boolean;
}

export const Nav = styled(motion.nav)`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const StyledContainer = styled(Container)`
  height: 100%;
`;

export const Box = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${({ isBelowTablet }) =>
    isBelowTablet ? 'center' : 'space-between'};
  align-items: center;
`;

export const LogoBox = styled.div<StyledProps>`
  width: 270px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Links = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${below.tablet} {
    display: none;
  }
`;

export const LinkLabel = styled.span<StyledProps>`
  cursor: pointer;
  ${({ theme, navType, isNavActive, isLinkActive }) => {
    let color: string;
    let activeColor: string;

    switch (navType) {
      case NavbarType.Light:
        if (isNavActive) {
          color = theme.text.dark.secondary;
          activeColor = theme.text.dark.primary;
        } else {
          color = theme.text.light.secondary;
          activeColor = theme.text.light.primary;
        }
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
      color: ${isLinkActive ? activeColor : color};
      margin-right: ${theme.spacing.level2.XS};
      &:nth-last-child(1) {
        margin-right: 0;
      }
      &.active {
        color: ${activeColor};
      }
      &:hover {
        color: ${activeColor};
      }
    `;
  }}
`;

export const Buttons = styled.div`
  width: 270px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${below.tablet} {
    display: none;
  }
`;

export const MenuToggler = styled.div<StyledProps>`
  position: absolute;
  top: calc(50% - 3px);
  left: 24px;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  ${({ theme, navType, isNavActive }) => {
    let color: string;

    switch (navType) {
      case NavbarType.Dark:
        color = theme.text.light.primary;
        break;
      case NavbarType.Light:
        if (isNavActive) {
          color = theme.text.dark.primary;
        } else {
          color = theme.text.light.primary;
        }
        break;

      default:
        color = theme.text.light.primary;
        break;
    }

    return css`
      & > svg > path {
        stroke: ${color};
      }
    `;
  }}
`;
