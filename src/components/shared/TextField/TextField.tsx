/* eslint-disable complexity */
import { Eye, EyeSlash } from 'iconsax-react';
import type { FC, FocusEvent, ReactElement } from 'react';
import React, { useState } from 'react';

import { Container, EndIcon, Field, Icon } from './TextFieldStyles';

export enum TextFieldTheme {
  Light,
  Dark,
}

export enum TextFieldType {
  Text = 'text',
  Password = 'password',
}

export interface TextFieldProps {
  name?: string;
  type?: TextFieldType;
  theme?: TextFieldTheme;
  textType?: TextFieldType;
  textFieldRef?: any;
  placeholder?: string;
  icon?: ReactElement;
  value?: string;
  error?: boolean;
  className?: string;
  onChange?: (value: any) => void;
  onBlur?: (args?: any) => void;
  onClear?: () => void;
}

export const TextField: FC<TextFieldProps> = props => {
  const {
    name,
    theme,
    textFieldRef,
    type,
    textType,
    placeholder,
    icon,
    value,
    error,
    className,
    onChange,
    onBlur,
    onClear,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onFieldFocus = () => {
    setIsFocused(true);
  };

  const onFieldBlur = (e: FocusEvent) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const hasValueCondition = value != null && value.length > 0;

  return (
    <Container
      themeType={theme}
      error={error ?? false}
      isFocused={isFocused ?? false}
      className={className}
    >
      {icon ? (
        <Icon
          error={error ?? false}
          themeType={theme}
          hasValue={value != null ?? false}
        >
          {icon}
        </Icon>
      ) : null}
      <Field
        themeType={theme}
        name={name}
        ref={textFieldRef}
        type={showPassword ? 'text' : type}
        textType={textType}
        placeholder={placeholder}
        error={error ?? false}
        value={value}
        hasValue={value != null ?? false}
        onChange={onChange}
        onFocus={onFieldFocus}
        onBlur={onFieldBlur}
      />
      {textType === TextFieldType.Password ? (
        <EndIcon
          hasValue={value != null ?? false}
          onClick={() =>
            hasValueCondition ? setShowPassword(!showPassword) : undefined
          }
        >
          {showPassword ? (
            <Eye size={18} variant="Linear" />
          ) : (
            <EyeSlash size={18} variant="Linear" />
          )}
        </EndIcon>
      ) : null}
      {value ? (
        <EndIcon
          isClose={true}
          hasValue={value != null && value.length > 0}
          onClick={onClear}
        >
          &#x2715;
        </EndIcon>
      ) : null}
    </Container>
  );
};

TextField.defaultProps = {
  type: TextFieldType.Text,
  textType: TextFieldType.Text,
  theme: TextFieldTheme.Light,
};
