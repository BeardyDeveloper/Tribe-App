import styled, { css } from 'styled-components';

import { TextField } from '$sharedComponents/TextField/TextField';

export const StyledTextField = styled(TextField)`
  width: 100%;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.level1.M};

    &:nth-child(1) {
      margin-top: ${theme.spacing.level1.S};
    }
  `}
`;
