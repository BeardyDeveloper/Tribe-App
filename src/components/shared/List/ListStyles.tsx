import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleRow = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.level1.XXL};
  `}
`;

export const TitleLine = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  top: 40%;
  right: 0;
  background-color: ${({ theme }) => theme.border.light.primary};
  ${({ theme }) => css`
    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: -6px;
      right: 0;
      transform: translateY(0);
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: ${`15px solid ${theme.border.light.primary}`};
    }
  `}
`;

export const Title = styled.h6`
  text-align: left;
  z-index: 5;
  ${({ theme }) => css`
    color: ${theme.text.dark.primary};
    font-size: ${theme.typography.fontSize.heading.XXS};
    font-family: ${theme.typography.fontFamily.medium};
    font-weight: ${theme.typography.fontWeight.medium};
    padding-right: ${theme.spacing.level1.XXL};
    background-color: ${theme.background.light};
  `}
`;

export const Label = styled.p`
  text-align: left;
  line-height: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ theme }) => css`
    color: ${theme.text.dark.secondary};
    font-size: ${theme.typography.fontSize.body.M};
    font-family: ${theme.typography.fontFamily.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    margin-bottom: ${theme.spacing.level1.M};

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  `}
`;

export const OutLink = styled.a`
  text-align: left;
  line-height: 24px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ${({ theme }) => css`
    color: ${theme.text.dark.secondary};
    font-size: ${theme.typography.fontSize.body.M};
    font-family: ${theme.typography.fontFamily.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    margin-bottom: ${theme.spacing.level1.M};
    &:hover {
      transition: all 200ms ease-in;
      color: ${theme.text.dark.primary};
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  `}
`;

export const NavLink = styled(Link)`
  text-align: left;
  line-height: 24px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 200ms ease-in;
  ${({ theme }) => css`
    color: ${theme.text.dark.secondary};
    font-size: ${theme.typography.fontSize.body.M};
    font-family: ${theme.typography.fontFamily.regular};
    font-weight: ${theme.typography.fontWeight.regular};
    margin-bottom: ${theme.spacing.level1.M};
    &:hover {
      transition: all 200ms ease-in;
      color: ${theme.text.dark.primary};
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  `}
`;

export const Bullet = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.heading.XL};
    color: ${theme.text.active.primary};
    margin-right: ${theme.spacing.level1.S};
  `}
`;
