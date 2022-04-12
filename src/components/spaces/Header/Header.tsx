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
      label: 'Self',
    },
    {
      id: '2',
      label: 'Free',
    },
    {
      id: '3',
      label: 'Knowlage',
      hideDivider: true,
    },
  ];

  return (
    <Section>
      <Container>
        <HeroContainer>
          <HeroContent>
            <Title>
              Our Hub Different <Bold>Spaces</Bold> and <Bold>Categories</Bold>
            </Title>
            <HeroProducts products={heroProducts} />
            <SubTitle>Each Space has a Different Content.</SubTitle>
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
              src="/images/Spaces-Hero.svg"
              alt="hero"
              layout="fill"
              placeholder="blur"
              blurDataURL="/images/Spaces-Hero.svg"
            />
          </BannerBox>
        </HeroContainer>
      </Container>
    </Section>
  );
};
