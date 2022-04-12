import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Main = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242b40;
  filter: blur(5px);
  z-index: 991;
`;
