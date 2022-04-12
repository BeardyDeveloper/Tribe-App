import type { FC } from 'react';

import { Card, Step, StepBox, SubTitle, Title } from './StepCardStyles';

interface StepCardProps {
  step: string;
  title: string;
  subTitle: string;
}

export const StepCard: FC<StepCardProps> = props => {
  const { step, title, subTitle } = props;

  return (
    <Card>
      <StepBox>
        <Step>{step}</Step>
      </StepBox>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Card>
  );
};
