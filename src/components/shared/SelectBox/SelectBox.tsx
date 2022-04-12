import type { FC, ReactElement } from 'react';
import React from 'react';
import { useTheme } from 'styled-components';

import { selectStyles } from '$src/lib/selectStyles';

import {
  ClearIndicator,
  customControl,
  customOption,
  DropdownIndicator,
  Group,
} from './CustomComponents';
import { Container, Label, StyledSelect } from './SelectBoxStyles';

export enum SekectMenuPlacement {
  Top = 'top',
  Bottom = 'bottom',
}

export interface SelectBoxProps {
  loading?: boolean;
  icon?: ReactElement;
  options: any[];
  defaultValue?: any;
  menuPlacement?: SekectMenuPlacement;
  label?: string;
  optionIcon?: ReactElement;
  placeholder: string;
  menuWidth?: string;
  menuLeft?: string;
  onChange: (args?: any) => void;
}

export const SelectBox: FC<SelectBoxProps> = props => {
  const {
    loading,
    options,
    icon,
    defaultValue,
    menuPlacement,
    label,
    optionIcon,
    placeholder,
    menuWidth,
    menuLeft,
    onChange,
  } = props;

  const theme = useTheme();

  const Option = customOption(optionIcon);
  const Control = customControl(icon);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledSelect
        components={{
          Control,
          Option,
          Group,
          DropdownIndicator,
          ClearIndicator,
        }}
        isMulti={false}
        isClearable
        closeMenuOnSelect={true}
        placeholder={placeholder}
        isLoading={loading ? loading : !options}
        loadingMessage={() => 'Loading...'}
        styles={selectStyles({
          menuWidth,
          menuLeft,
          theme,
        })}
        menuPlacement={menuPlacement ?? SekectMenuPlacement.Bottom}
        options={options}
        defaultValue={defaultValue}
        onChange={(val: any) => onChange(val)}
      />
    </Container>
  );
};
