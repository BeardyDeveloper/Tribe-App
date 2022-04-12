import styled from 'styled-components';

import { below } from '$theme/viewports';

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 72px 0 0 0;
  background-color: ${({ theme }) => theme.background.light};
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.level2.XS};

  @media ${below.tablet} {
    flex-direction: column;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.level2.M};
`;
