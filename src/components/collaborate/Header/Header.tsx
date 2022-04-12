import { ArrowCircleRight } from 'iconsax-react';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import type { HeroProductProps } from '$components/index/HeroProducts/HeroProducts';
import { HeroProducts } from '$components/index/HeroProducts/HeroProducts';
import { Container } from '$components/UI/Container';
import {
  Button,
  ButtonCurner,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';

import {
  Banner,
  BannerBox,
  Bold,
  HeroContainer,
  HeroContent,
  Section,
  SubTitle,
  Title,
} from './HeaderStyles';

export const Header: FC = () => {
  const router = useRouter();

  const heroProducts: HeroProductProps[] = [
    {
      id: '1',
      label: 'Squad',
    },
    {
      id: '2',
      label: 'Team',
    },
    {
      id: '3',
      label: 'Sahre',
      hideDivider: true,
    },
  ];

  return (
    <Section>
      <Container>
        <HeroContainer>
          <HeroContent>
            <Title>
              Start Joining and <Bold>Share</Bold> your <Bold>Ideas</Bold>
            </Title>
            <HeroProducts products={heroProducts} />
            <SubTitle>Help us to enlarge our Community together.</SubTitle>
            <Button
              label="Go Home"
              icon={<ArrowCircleRight variant="Bold" />}
              variant={ButtonVariant.Primary}
              buttonSize={ButtonSize.Large}
              curner={ButtonCurner.Square}
              onClick={() => router.push('/')}
            />
          </HeroContent>
          <BannerBox>
            <Banner
              src="/images/Collaborate-Hero.svg"
              alt="hero"
              layout="fill"
              placeholder="blur"
              blurDataURL="/images/Collaborate-Hero.svg"
            />
          </BannerBox>
        </HeroContainer>
      </Container>
    </Section>
  );
};
