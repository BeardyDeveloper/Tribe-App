import type { Post } from '@tribeplatform/gql-client/types';
import { useTribeClient } from '@tribeplatform/react-sdk';
import { usePost } from '@tribeplatform/react-sdk/hooks';
import type { GetStaticPaths, NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { NavbarType } from '$components/layout/Navbar/Navbar';
import { PageTemplate } from '$components/PageTemplate/PageTemplate';
import { Header } from '$components/post/Header/Header';
import { Container } from '$components/UI/Container';
import { PagePaper, PostContent } from '$styles/PagesStyles';

const PostPage: NextPage = () => {
  const { query } = useRouter();
  const postId = query.pid as string;

  const { client } = useTribeClient();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const postPromise = client.posts.get(postId);
    postPromise.then(postData => setPost(postData));
  }, []);

  return (
    <PageTemplate navType={NavbarType.Light}>
      <Header title={post?.title} image="" />
      <Container>
        <PagePaper>
          {post && post!.mappingFields && (
            <PostContent
              dangerouslySetInnerHTML={{
                __html: post!.mappingFields[1]!.value,
              }}
            />
          )}
        </PagePaper>
      </Container>
    </PageTemplate>
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

export default PostPage;
