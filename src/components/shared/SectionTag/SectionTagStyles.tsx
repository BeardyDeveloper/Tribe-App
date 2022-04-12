import styled, { css } from 'styled-components';

import { SectionTagDirection, SectionTagType } from './SectionTag';

interface StyledProps {
  type?: SectionTagType;
  direction?: SectionTagDirection;
}

export const TagBox = styled.div<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme, direction }) => css`
    margin-bottom: ${theme.spacing.level1.XXXL};
    align-items: ${direction === SectionTagDirection.Center
      ? 'center'
      : 'flex-start'};
  `}
`;

export const IconBox = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > svg {
    ${({ theme, type, direction }) => css`
      color: ${type === SectionTagType.Dark
        ? theme.text.dark.primary
        : theme.text.light.primary};
      align-items: ${direction === SectionTagDirection.Center
        ? 'center'
        : 'flex-start'};
    `}
  }
`;

export const Tag = styled.span<StyledProps>`
  ${({ theme, type }) => {
    return css`
      font-size: ${theme.typography.fontSize.tag.M};
      letter-spacing: ${theme.typography.letterSpaces.M};
      margin-top: ${theme.spacing.level1.M};
      padding-bottom: ${theme.spacing.level1.S};
      border-bottom: ${`1.5px solid ${theme.border.active.primary}`};
      color: ${type === SectionTagType.Dark
        ? theme.text.dark.primary
        : theme.text.light.primary};
    `;
  }}
`;
