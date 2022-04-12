import { ArrowCircleRight } from 'iconsax-react';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { ProcessSvg } from '$assets/index';
import { StepCard } from '$components/layout/StepCard/StepCard';
import { Container } from '$components/UI/Container';
import {
  Button,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';
import {
  SectionTag,
  SectionTagType,
} from '$sharedComponents/SectionTag/SectionTag';
import {
  TitleBoldPart,
  TitleBoldType,
} from '$sharedComponents/TitleBoldPart/TitleBoldPart';

import { Box, ButtonBox, Section, Steps, Title } from './OurProcessStyles';

export const OurProcess: FC = () => {
  const router = useRouter();

  return (
    <Section>
      <Container>
        <Box>
          <SectionTag
            type={SectionTagType.Light}
            icon={<ProcessSvg />}
            tag="JOIN PROCESS"
          />
          <Title>
            Setup Up your Account and Collaborate in
            <TitleBoldPart type={TitleBoldType.White} text="3 steps." />
          </Title>
          <Steps>
            <StepCard
              step="01"
              title="Submit and Join to Community"
              subTitle="Tell us about the joiner and his/her ideas"
            />
            <StepCard
              step="02"
              title="Create your Own Space"
              subTitle="Create your own room/space in few seconds"
            />
            <StepCard
              step="03"
              title="Create your Posts"
              subTitle="Create a new post to your space you created"
            />
          </Steps>
          <ButtonBox>
            <Button
              label="Start Collaborating"
              variant={ButtonVariant.Secondary}
              buttonSize={ButtonSize.Medium}
              icon={<ArrowCircleRight variant="Bold" />}
              onClick={() => router.push('/collaborate')}
            />
          </ButtonBox>
        </Box>
      </Container>
    </Section>
  );
};
