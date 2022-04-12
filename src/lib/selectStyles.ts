import type { ITheme } from '$src/theme/ITheme';

interface StylesProps {
  menuWidth?: string;
  menuLeft?: string;
  theme: ITheme;
}

export const selectStyles = ({ menuWidth, menuLeft, theme }: StylesProps) => ({
  container: (provided: any, state: any) => ({
    ...provided,
    height: 'auto',
    borderRadius: '12px',
    overflow: 'hodden',
    border: `1px solid ${
      state.isFocused
        ? theme.cmp.textField.dark.border.active
        : theme.cmp.textField.dark.border.default
    }`,
  }),
  menu: (styles: any) => ({
    ...styles,
    width: menuWidth ?? '100%',
    left: menuLeft ?? 0,
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: '12px',
    zIndex: 99,
    padding: '10px 0',
    height: 'auto',
  }),
  menuList: (styles: any) => ({
    ...styles,
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 50 }),
  option: (provided: any, state: any) => {
    return {
      ...provided,
      'width': '100%',
      'height': '47px',
      'borderBottom': 'none',
      'cursor': 'pointer',
      'color': theme.text.dark.secondary,
      'backgroundColor':
        state.isFocused || state.isSelected
          ? theme.palette.Neutral._lightGrey
          : 'none',
      'padding': '10px 12px',
      'margin': '2px 0',
      'fontSize': '14px',
      'borderRadius': '4px',
      'display': 'flex',
      ':active': {
        ...provided[':active'],
        backgroundColor:
          state.isFocused || state.isSelected
            ? theme.palette.Neutral._lightGrey
            : 'none',
      },
    };
  },
  input: (styles: any) => ({
    ...styles,
    fontFamily: 'Gilroy-SemiBold',
    borderRadius: '12px',
    marginTop: 0,
    color: theme.cmp.textField.dark.placeholder,
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: '2px 12px',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: theme.cmp.textField.dark.placeholder,
    marginBottom: -2,
    fontSize: '14px',
  }),
  control: (styles: any) => ({
    ...styles,
    'width': '100%',
    'minHeight': '48px',
    'height': 'auto',
    'backgroundColor': 'none',
    'border': 'none',
    'padding': '0 12px',
    'boxShadow': 'none',
    '&:hover': {
      border: 'none',
    },
    '& span': {
      color: theme.text.dark.primary,
    },
    'borderRadius': '12px',
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignitems': 'center',
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    'color': theme.text.dark.primary,
    '&:hover': {
      color: theme.text.dark.primary,
    },
    'cursor': 'pointer',
  }),
  clearIndicator: (styles: any) => ({
    ...styles,
    'cursor': 'pointer',
    'color': theme.text.dark.primary,
    ':hover': {
      color: theme.text.dark.primary,
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms',
    color: theme.text.dark.primary,
  }),
});
