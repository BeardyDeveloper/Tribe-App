import { ArrowCircleRight } from 'iconsax-react';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Container } from '$components/UI/Container';
import {
  ButtonCurner,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';

import {
  Bold,
  HeroContent,
  Section,
  StyledButton,
  SubTitle,
  Title,
} from './HeaderStyles';

export const Header: FC = () => {
  const router = useRouter();

  return (
    <Section>
      <Container>
        <HeroContent>
          <Title>
            Posting is <Bold>free,</Bold> forever
          </Title>
          <SubTitle>The only solution that offers bloging for free.</SubTitle>
          <StyledButton
            label="Create Post"
            icon={<ArrowCircleRight variant="Bold" />}
            variant={ButtonVariant.Secondary}
            buttonSize={ButtonSize.Medium}
            curner={ButtonCurner.Square}
            onClick={() => router.push('/collaborate')}
          />
        </HeroContent>
      </Container>
    </Section>
  );
};
