import Select from 'react-select';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: none;
  border-radius: 0;
  border: none;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  ${({ theme }) => css`
    color: ${theme.text.dark.primary};
  `}
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  z-index: 10;
`;
