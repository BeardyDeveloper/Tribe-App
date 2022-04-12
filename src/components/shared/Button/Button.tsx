import type {
  FC,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Icon, Label, StyledButton } from './ButtonStyles';

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

export enum ButtonVariant {
  Primary = 'success',
  Secondary = 'secondary',
  LightLink = 'LightLink',
  DarkLink = 'DarkLink',
}

export enum ButtonCurner {
  Square = 'square',
  Rounded = 'rounded',
}

export enum ButtonSize {
  XSmall = 'x-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps {
  type?: ButtonType;
  buttonSize?: ButtonSize;
  label?: string;
  icon?: ReactElement;
  variant?: ButtonVariant;
  curner?: ButtonCurner;
  children?: ReactNode;
  selected?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick: MouseEventHandler;
}

export const Button: FC<ButtonProps> = props => {
  const {
    type,
    label,
    icon,
    variant,
    curner,
    selected,
    fullWidth,
    buttonSize,
    className,
    disabled,
    loading,
    onClick,
  } = props;

  const onButtonClick = (e: MouseEvent<HTMLElement>) => {
    if (!disabled) {
      onClick(e);
    }
  };

  return (
    <StyledButton
      onClick={onButtonClick}
      type={type ?? ButtonType.button}
      variant={variant}
      curner={curner}
      isSelected={selected}
      fullWidth={fullWidth}
      buttonSize={buttonSize}
      hasIcon={icon != null}
      disabled={disabled}
      loading={loading}
      className={className}
    >
      {loading ? (
        <ClipLoader color="#fff" />
      ) : (
        <>
          <Label>{props.children ?? label}</Label>
          {icon ? <Icon>{icon}</Icon> : undefined}
        </>
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: ButtonType.button,
  variant: ButtonVariant.Primary,
  curner: ButtonCurner.Square,
  buttonSize: ButtonSize.Small,
};
