import type { Post } from '@tribeplatform/gql-client/types';
import { ArrowCircleRight, Bank } from 'iconsax-react';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import useMedia from 'use-media';

import {
  BankAccountSvg,
  BillPaymentsSvg,
  CorporateCardsSvg,
} from '$assets/index';
import { Container } from '$components/UI/Container';
import { Title } from '$components/UI/UIComponentsStyles';
import {
  Button,
  ButtonCurner,
  ButtonSize,
} from '$sharedComponents/Button/Button';
import { PostCard } from '$sharedComponents/PostCard/PostCard';
import { SectionTag } from '$sharedComponents/SectionTag/SectionTag';
import { TitleBoldPart } from '$sharedComponents/TitleBoldPart/TitleBoldPart';
import { loadingPosts } from '$src/mocks/loadersData';
import { below } from '$theme/viewports';
import { getTime } from '$utils/getTime';

import { ButtonBox, Cards, Section } from './PostsStyles';

interface PostsProps {
  posts: Post[];
  loading?: boolean;
}

export const Posts: FC<PostsProps> = props => {
  const { posts, loading } = props;

  const router = useRouter();

  const isBelowTablet = useMedia(below.tablet);

  return (
    <Section>
      <Container>
        <>
          <SectionTag icon={<Bank variant="Linear" size={18} />} tag="POSTS" />
          {isBelowTablet ? (
            <Title>
              Share your Posts
              <br /> with <TitleBoldPart text="Community" />
            </Title>
          ) : (
            <Title>
              Share your Posts with <TitleBoldPart text="Community" />
            </Title>
          )}
          <Cards>
            {loading
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
          <ButtonBox>
            <Button
              buttonSize={ButtonSize.Medium}
              curner={ButtonCurner.Square}
              label="See All Posts"
              icon={<ArrowCircleRight variant="Bold" />}
              onClick={() => router.push('/posts')}
            />
          </ButtonBox>
        </>
      </Container>
    </Section>
  );
};
