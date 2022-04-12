/* eslint-disable fp/no-let */
import styled, { css } from 'styled-components';

import { TextFieldTheme, TextFieldType } from './TextField';

interface ContainerProps {
  isFocused?: boolean;
  error?: boolean;
  themeType?: TextFieldTheme;
}

interface StyledProps {
  textType?: TextFieldType;
  hasValue?: boolean;
  isFocused?: boolean;
  isClose?: boolean;
  error?: boolean;
  themeType?: TextFieldTheme;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  transition: all 200ms ease-in;

  ${({ theme, themeType, error, isFocused }) => {
    let borderColor: string;

    if (error) {
      borderColor = theme.cmp.textField.light.border.error;
    } else if (isFocused) {
      borderColor =
        themeType === TextFieldTheme.Light
          ? theme.cmp.textField.light.border.active
          : theme.cmp.textField.dark.border.active;
    } else {
      borderColor =
        themeType === TextFieldTheme.Light
          ? theme.cmp.textField.light.border.default
          : theme.cmp.textField.dark.border.default;
    }

    return css`
      padding: ${`0 ${theme.spacing.level1.M}`};
      border: ${`1.5px solid ${borderColor}`};
    `;
  }};
`;

export const Icon = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, error }) =>
    error
      ? theme.cmp.textField.light.border.error
      : theme.cmp.textField.light.placeholder};
  & > svg {
    width: 22px;
    height: 22px;
  }
  ${({ theme, themeType, error, hasValue }) => {
    let color: string;

    if (error) {
      color = theme.text.error.primary;
    } else if (hasValue) {
      color =
        themeType === TextFieldTheme.Light
          ? theme.text.light.primary
          : theme.text.dark.primary;
    } else {
      color = theme.text.dark.secondary;
    }
    return css`
      color: ${color};
    `;
  }}
`;

export const EndIcon = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ theme, hasValue, isClose }) => {
    return css`
      margin-left: ${isClose && theme.spacing.level1.XL};
      font-size: ${theme.typography.fontSize.body.M};
      color: ${hasValue ? theme.text.light.primary : theme.text.dark.secondary};
      & > svg {
        width: ${theme.typography.fontSize.heading.XS};
        height: ${theme.typography.fontSize.heading.XS};
      }
    `;
  }}
`;

export const Field = styled.input<StyledProps>`
  direction: ltr;
  font-size: inherit;
  text-align: left;
  width: 100%;
  height: 100%;
  background-color: transparent;

  ${({ theme, themeType, textType }) => {
    return css`
      color: ${themeType === TextFieldTheme.Light
        ? theme.cmp.textField.light.color
        : theme.cmp.textField.dark.color};
      font-family: ${theme.typography.fontFamily.regular};
      font-weight: ${theme.typography.fontWeight.regular};
      font-size: ${theme.typography.fontSize.body.M};
      padding: ${textType === TextFieldType.Password
        ? `0 ${theme.spacing.level1.M} 0 ${theme.spacing.level1.M}`
        : `0 0 0 ${theme.spacing.level1.XXS}`};
      &::placeholder {
        color: ${theme.cmp.textField.light.placeholder};
        font-size: ${theme.typography.fontSize.body.M};
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:active,
      &:-webkit-autofill:focus {
        width: 100%;
        height: 100%;
        -webkit-appearance: none !important;
        -webkit-text-fill-color: ${themeType === TextFieldTheme.Light
          ? theme.cmp.textField.light.color
          : theme.cmp.textField.dark.color} !important;
        border: unset !important;
        -webkit-box-shadow: unset !important;
        box-shadow: unset !important;
        background-color: transparent !important;
        -webkit-border-before: unset !important;
        transition: background-color 90000s ease-in-out 90000s;
      }
    `;
  }}
`;
