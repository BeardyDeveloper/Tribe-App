import type { Space } from '@tribeplatform/gql-client/types';
import { useSpaces } from '@tribeplatform/react-sdk/hooks';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import type { NextPage } from 'next';

import { SpaceCardType } from '$components/index/SpaceCard/SpaceCard';
import { StyledSpaceCard } from '$components/index/Spaces/SpacesStyles';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';
import { Header } from '$components/spaces/Header/Header';
import { Container } from '$components/UI/Container';
import { loadingSpaces } from '$src/mocks/loadersData';
import { PagePaper } from '$styles/PagesStyles';

const Spaces: NextPage = () => {
  const { data: spacesData, isLoading: isSpacesLoading } = useSpaces({
    fields: { image: 'basic' },
    variables: {
      limit: 48,
    },
  });
  const { nodes: spaces } = simplifyPaginatedResult<Space>(spacesData);

  return (
    <>
      <PageTemplate navType={NavbarType.Dark}>
        <Header />
        <Container>
          <PagePaper>
            {isSpacesLoading
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
                    type={SpaceCardType.Light}
                    key={space.id}
                    label={space.name}
                    loading={false}
                    description={space.description!}
                    href={`/space/${space.id}`}
                  />
                ))}
          </PagePaper>
        </Container>
      </PageTemplate>
    </>
  );
};

export default Spaces;
