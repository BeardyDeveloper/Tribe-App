import Image from 'next/image';
import styled, { css } from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.h4`
  text-align: center;
  ${({ theme }) => {
    return css`
      color: ${theme.text.dark.primary};
      font-size: ${theme.typography.fontSize.heading.XL};
      margin-bottom: ${theme.spacing.level2.XXXS};
    `;
  }}
`;

export const ImageBox = styled.div`
  width: 320px;
  height: 250px;
  margin-right: 0;
  position: relative;
`;

export const ImageCover = styled(Image)`
  width: 100%;
`;
