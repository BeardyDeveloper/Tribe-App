import type { Post } from '@tribeplatform/gql-client/types';
import { usePosts } from '@tribeplatform/react-sdk/hooks';
import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import type { NextPage } from 'next';

import { Cards } from '$components/index/Posts/PostsStyles';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';
import { Header } from '$components/posts/Header/Header';
import { Container } from '$components/UI/Container';
import { NotFound } from '$components/UI/NotFound/NotFound';
import { PostCard } from '$sharedComponents/PostCard/PostCard';
import { loadingPosts } from '$src/mocks/loadersData';
import { PagePaper } from '$styles/PagesStyles';
import { getTime } from '$utils/getTime';

const Posts: NextPage = () => {
  const { data: postsData, isLoading: isPostsLoading } = usePosts({
    variables: {
      limit: 24,
    },
  });
  const { nodes: posts } = simplifyPaginatedResult<Post>(postsData);

  return (
    <>
      <PageTemplate navType={NavbarType.Light}>
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
                : posts.map(post => (
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
            {!isPostsLoading && (!posts || posts!.length === 0) && (
              <NotFound title="There is no Posts" />
            )}
          </PagePaper>
        </Container>
      </PageTemplate>
    </>
  );
};

export default Posts;
