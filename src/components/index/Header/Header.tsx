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
      label: 'Learn',
    },
    {
      id: '2',
      label: 'Teach',
    },
    {
      id: '3',
      label: 'Raise',
      hideDivider: true,
    },
  ];

  return (
    <Section>
      <Container>
        <HeroContainer>
          <HeroContent>
            <Title>
              <Bold>Resource</Bold> and <Bold>Gists </Bold>
              for developers
            </Title>
            <HeroProducts products={heroProducts} />
            <SubTitle>
              Find and Share development resources and hot codes.
            </SubTitle>
            <Button
              label="Collaborate"
              icon={<ArrowCircleRight variant="Bold" />}
              variant={ButtonVariant.Primary}
              buttonSize={ButtonSize.Large}
              curner={ButtonCurner.Square}
              onClick={() => router.push('/collaborate')}
            />
          </HeroContent>
          <BannerBox>
            <Banner
              src="/images/Index-Hero.svg"
              alt="hero"
              layout="fill"
              placeholder="blur"
              blurDataURL="/images/Index-Hero.svg"
            />
          </BannerBox>
        </HeroContainer>
      </Container>
    </Section>
  );
};
