import styled, { css } from 'styled-components';

import { Button } from '$sharedComponents/Button/Button';
import { TextField } from '$sharedComponents/TextField/TextField';
import { below } from '$theme/viewports';

export const Title = styled.h4`
  width: 100%;
  text-align: center;
  line-height: 56px;
  ${({ theme }) => {
    return css`
      color: ${theme.text.dark.primary};
      font-size: ${theme.typography.fontSize.heading.XXL};
      font-family: ${theme.typography.fontFamily.light};
      font-weight: ${theme.typography.fontWeight.light};
      margin-bottom: ${theme.spacing.level2.S};
    `;
  }}
`;

export const Input = styled.div`
  width: 100%;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.level1.M};
  `}
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    margin: ${`${theme.spacing.level1.L} 0`};

    @media ${below.tablet} {
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.level1.XXS};
    @media ${below.tablet} {
      margin-left: 0;
      margin-top: ${theme.spacing.level1.XS};
    }
  `}
`;
