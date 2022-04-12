import type { Post, Space } from '@tribeplatform/gql-client/types';
import { usePosts, useSpaces } from '@tribeplatform/react-sdk/hooks';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import type { NextPage } from 'next';

import { Header } from '$components/index/Header/Header';
import { OurProcess } from '$components/index/OurProcess/OurProcess';
import { Posts } from '$components/index/Posts/Posts';
import { Spaces } from '$components/index/Spaces/Spaces';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';

const Home: NextPage = () => {
  const { data: spacesData, isLoading: isSpacesLoading } = useSpaces({
    fields: { image: 'basic' },
    variables: {
      limit: 2,
    },
  });

  const { data: postsData, isLoading: isPostsLoading } = usePosts({
    variables: {
      limit: 3,
    },
  });
  const { nodes: posts } = simplifyPaginatedResult<Post>(postsData);
  const { nodes: spaces } = simplifyPaginatedResult<Space>(spacesData);

  return (
    <>
      <PageTemplate navType={NavbarType.Dark}>
        <Header />
        <Posts posts={posts} loading={isPostsLoading} />
        <Spaces spaces={spaces} loading={isSpacesLoading} />
        <OurProcess />
      </PageTemplate>
    </>
  );
};

export default Home;
