/* eslint-disable fp/no-let */
import styled, { css } from 'styled-components';

import { ButtonCurner, ButtonSize, ButtonVariant } from './Button';

interface StyledButtonProps {
  variant?: ButtonVariant;
  curner?: ButtonCurner;
  buttonSize?: ButtonSize;
  isSelected?: boolean;
  fullWidth?: boolean;
  hasIcon?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  border: none;
  mix-blend-mode: normal;
  user-select: none;
  box-shadow: none;
  transition: all 200ms ease-in;

  ${({ buttonSize, curner, theme, hasIcon, disabled, loading, fullWidth }) => {
    let height: string;
    let padding: number;
    let fontSize: string;
    let radius: string;

    switch (buttonSize) {
      case ButtonSize.XSmall:
        height = '32px';
        padding = 16;
        radius = curner === ButtonCurner.Square ? '6px' : '16px';
        fontSize = theme.typography.fontSize.caption.M;
        break;
      case ButtonSize.Small:
        height = '40px';
        padding = 16;
        radius = curner === ButtonCurner.Square ? '8px' : '20px';
        fontSize = theme.typography.fontSize.button.M;
        break;
      case ButtonSize.Medium:
        height = '48px';
        padding = 24;
        radius = curner === ButtonCurner.Square ? '10px' : '24px';
        fontSize = theme.typography.fontSize.button.M;
        break;
      case ButtonSize.Large:
        height = '56px';
        padding = 32;
        radius = curner === ButtonCurner.Square ? '12px' : '28px';
        fontSize = theme.typography.fontSize.button.M;
        break;
      default:
        height = '40px';
        padding = 16;
        radius = curner === ButtonCurner.Square ? '8px' : '20px';
        fontSize = theme.typography.fontSize.button.M;
    }

    return css`
      font-size: ${fontSize};
      padding: ${`0 ${padding}px`};
      height: ${height};
      line-height: ${height};
      border-radius: ${radius};
      font-weight: ${theme.typography.fontWeight.medium};
      justify-content: ${loading
        ? 'center'
        : hasIcon
        ? 'space-between'
        : 'center'};
      width: ${fullWidth ? `calc(100% - ${padding * 2}px)` : 'auto'};
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    `;
  }}

  ${({ isSelected, theme, variant, disabled }) => {
    let bgColor: string;
    let textColor: string;
    let activeTextColor: string;
    let hover: string;
    let active: string;
    let disabledBg: string;
    let disabledTextColor: string;

    switch (variant) {
      case ButtonVariant.Primary:
        bgColor = theme.cmp.button.primary.main;
        textColor = theme.cmp.button.primary.text.main;
        active = theme.cmp.button.primary.active;
        activeTextColor = theme.cmp.button.primary.text.main;
        hover = theme.cmp.button.primary.active;
        disabledBg = theme.cmp.button.disable.main;
        disabledTextColor = theme.cmp.button.disable.text.main;
        break;
      case ButtonVariant.Secondary:
        bgColor = theme.cmp.button.secondary.main;
        textColor = theme.cmp.button.secondary.text.main;
        active = theme.cmp.button.secondary.active;
        activeTextColor = theme.cmp.button.secondary.text.active;
        hover = theme.cmp.button.secondary.active;
        disabledBg = theme.cmp.button.disable.main;
        disabledTextColor = theme.cmp.button.disable.text.main;
        break;
      case ButtonVariant.LightLink:
        bgColor = 'transparent';
        textColor = theme.cmp.button.primary.text.main;
        active = 'transparent';
        activeTextColor = theme.text.active.primary;
        hover = 'transparent';
        disabledBg = 'transparent';
        disabledTextColor = theme.cmp.button.disable.text.main;
        break;
      case ButtonVariant.DarkLink:
        bgColor = 'transparent';
        textColor = theme.cmp.button.secondary.text.main;
        active = 'transparent';
        activeTextColor = theme.text.active.primary;
        hover = 'transparent';
        disabledBg = 'transparent';
        disabledTextColor = theme.cmp.button.disable.text.main;
        break;
      default:
        bgColor = theme.cmp.button.primary.main;
        textColor = theme.cmp.button.primary.text.main;
        active = theme.cmp.button.primary.active;
        activeTextColor = theme.cmp.button.primary.text.main;
        hover = theme.cmp.button.primary.active;
        disabledBg = theme.cmp.button.disable.main;
        disabledTextColor = theme.cmp.button.disable.text.main;
        break;
    }

    const backgroundStyle = isSelected ? active : bgColor;

    return css`
      color: ${disabled ? disabledTextColor : textColor};
      background: ${disabled ? disabledBg : backgroundStyle};

      &:hover {
        background: ${!disabled && hover};
        color: ${!disabled && activeTextColor};
        transition: all 200ms ease-in;
      }

      &:active {
        color: ${!disabled && activeTextColor};
        background: ${!disabled && active};
      }
    `;
  }}
`;

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.level1.L};
`;

export const Label = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily.medium} !important;
`;
