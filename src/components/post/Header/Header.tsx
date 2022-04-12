import type { Maybe } from '@tribeplatform/gql-client/types';
import type { FC } from 'react';

import { Container } from '$components/UI/Container';

import { HeroContent, Section, Title } from './HeaderStyles';

interface HeaderProps {
  title: Maybe<string> | undefined;
  image: string;
}

export const Header: FC<HeaderProps> = props => {
  const { title, image } = props;

  return (
    <Section image={image}>
      <Container>
        <HeroContent>
          <Title>{title}</Title>
        </HeroContent>
      </Container>
    </Section>
  );
};
