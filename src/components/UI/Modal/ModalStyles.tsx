import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { below } from '$theme/viewports';

export const Temp = styled(motion.div)`
  width: 400px;
  height: auto;
  border-radius: 12px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  box-shadow: 0px 16px 32px rgba(22, 27, 44, 0.35);
  ${({ theme }) => css`
    background-color: ${theme.background.dark};
  `}

  @media ${below.mobileS} {
    width: 100%;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 4px;
  right: 3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 21px;
  z-index: 6;
  ${({ theme }) => css`
    color: ${theme.text.light.primary};
  `};
`;

export const Content = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
`;
