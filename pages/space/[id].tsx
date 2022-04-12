import type { Post } from '@tribeplatform/gql-client/types';
import { usePosts, useSpace } from '@tribeplatform/react-sdk/hooks';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import type { GetStaticPaths, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { OurProcess } from '$components/index/OurProcess/OurProcess';
import { Cards } from '$components/index/Posts/PostsStyles';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';
import { Header } from '$components/spaces/Header/Header';
import { Container } from '$components/UI/Container';
import { NotFound } from '$components/UI/NotFound/NotFound';
import { PostCard } from '$sharedComponents/PostCard/PostCard';
import { loadingPosts } from '$src/mocks/loadersData';
import { PagePaper } from '$styles/PagesStyles';
import { getTime } from '$utils/getTime';

const SpacesPage: NextPage = () => {
  const { query } = useRouter();
  const spaceId = query.id as string;

  const { data: space } = useSpace({
    variables: {
      id: spaceId,
    },
  });
  const { data: postsData, isLoading: isPostsLoading } = usePosts({
    variables: {
      limit: 3,
    },
  });
  const { nodes: posts } = simplifyPaginatedResult<Post>(postsData);

  const [spacePosts, setSpacePosts] = useState<Post[] | null>([]);

  useEffect(() => {
    const filteredPosts = posts.filter(
      post => post.space?.name === space?.name,
    );
    setSpacePosts(filteredPosts);
  }, [isPostsLoading]);

  return (
    <>
      <PageTemplate navType={NavbarType.Dark}>
        <Header />
        <Container>
          <PagePaper>
            <Cards>
              {isPostsLoading
                ? loadingPosts.map(post => (
                    <PostCard
                      key={post.id}
                      title={post.title!}
                      content={post.shortContent}
                      loading={true}
                      createdAt={getTime(post.createdAt)}
                    />
                  ))
                : spacePosts?.map(post => (
                    <PostCard
                      key={post.id}
                      title={post.title!}
                      content={post.shortContent!}
                      loading={false}
                      createdAt={getTime(post.createdAt)}
                      href={`/post/${post.id}/${post.slug}`}
                    />
                  ))}
            </Cards>
            {!isPostsLoading && (!spacePosts || spacePosts!.length === 0) && (
              <NotFound title="There is no Posts" />
            )}
          </PagePaper>
        </Container>
        <OurProcess />
      </PageTemplate>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {},
  };
}

export default SpacesPage;
