import type { Space } from '@tribeplatform/gql-client/types';
import { ArrowRight } from 'iconsax-react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import useMedia from 'use-media';

import { FlagSvg } from '$assets/index';
import { SpaceCard } from '$components/index/SpaceCard/SpaceCard';
import { Container } from '$components/UI/Container';
import {
  Button,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';
import {
  SectionTag,
  SectionTagDirection,
  SectionTagType,
} from '$sharedComponents/SectionTag/SectionTag';
import { loadingSpaces } from '$src/mocks/loadersData';
import { above, below } from '$theme/viewports';

import {
  Box,
  Cards,
  Content,
  Section,
  StyledSpaceCard,
  SubTitle,
  Title,
} from './SpacesStyles';

interface SpacesProps {
  spaces: Space[];
  loading?: boolean;
}

export const Spaces: FC<SpacesProps> = props => {
  const { spaces, loading } = props;

  const router = useRouter();

  const isBelowTablet = useMedia(below.tablet);

  return (
    <Section>
      <Container>
        <Box>
          <Content>
            <SectionTag
              type={SectionTagType.Light}
              direction={
                isBelowTablet
                  ? SectionTagDirection.Center
                  : SectionTagDirection.Left
              }
              icon={<FlagSvg />}
              tag="SPACES"
            />
            <Title>Every Space is a free room</Title>
            <SubTitle>
              Create your own space, or create your own content inside any
              spaces you went to so.
            </SubTitle>
            <Button
              label="See Full Spaces"
              variant={ButtonVariant.Secondary}
              buttonSize={ButtonSize.Small}
              icon={<ArrowRight variant="Linear" />}
              onClick={() => router.push('/spaces')}
            />
          </Content>
          <Cards>
            {loading
              ? loadingSpaces.map(space => (
                  <StyledSpaceCard
                    key={space.id}
                    label={space.name}
                    loading={true}
                    description={space.description!}
                  />
                ))
              : spaces.map(space => (
                  <StyledSpaceCard
                    key={space.id}
                    label={space.name}
                    loading={false}
                    description={space.description!}
                    href={`/space/${space.id}`}
                  />
                ))}
          </Cards>
        </Box>
      </Container>
    </Section>
  );
};
