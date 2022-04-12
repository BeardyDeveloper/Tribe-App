import { ArrowDown2, CloseSquare } from 'iconsax-react';
import type { CSSProperties, ReactElement } from 'react';
import type {
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
} from 'react-select';
import { components } from 'react-select';
import styled, { css } from 'styled-components';

export const customControl = (icon?: ReactElement) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const Control = ({ children, ...props }: ControlProps) => {
    return (
      <components.Control {...props} {...styles}>
        {icon && <ControlIcon isFocused={props.isFocused}>{icon}</ControlIcon>}
        {children}
      </components.Control>
    );
  };

  return Control;
};

export const Group = (args: any) => (
  <div>
    <components.Group {...args} />
  </div>
);

export const customOption = (optionIcon?: ReactElement) => {
  const styles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const Option = (props: any) => {
    return (
      <>
        <components.Option {...props} {...styles}>
          {optionIcon && (
            <IconBox isSelected={props.isSelected}>{optionIcon}</IconBox>
          )}
          <Values>
            <label>{props.value}</label>
            <Helper>{props.data.helper}</Helper>
          </Values>
        </components.Option>
      </>
    );
  };

  return Option;
};

export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <IndicatorBox>
        <ArrowDown2 size={20} variant="Bold" />
      </IndicatorBox>
    </components.DropdownIndicator>
  );
};

export const ClearIndicator = (props: ClearIndicatorProps) => {
  const {
    children = <CloseSquare size={24} variant="Bold" />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;

  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
    >
      <IndicatorBox isDark={true}>{children}</IndicatorBox>
    </div>
  );
};

interface StyledProps {
  isSelected?: boolean;
  isFocused?: boolean;
  isDark?: boolean;
}

const IconBox = styled.div<StyledProps>`
  & > svg {
    width: 24px;
    height: 24px;
    ${({ theme, isSelected }) => css`
      color: ${isSelected
        ? theme.text.dark.secondary
        : theme.text.light.ternary};
    `};
  }
  border-radius: 10px;
  @include row-center;
  margin-right: 10px;
`;

const ControlIcon = styled.span<StyledProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme, isFocused }) => css`
    & > svg {
      width: 26px;
      height: 26px;
      color: ${isFocused ? theme.text.dark.secondary : theme.text.dark.ternary};
    }
  `}
`;

const Values = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Helper = styled.span<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.text.light.secondary};
  `}
`;

const IndicatorBox = styled.span<StyledProps>`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    color: ${({ theme, isDark }) =>
      isDark ? theme.text.dark.primary : theme.text.dark.ternary};
  }
`;
