import Link from 'next/link';
import type { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import {
  Card,
  Content,
  Date,
  ImageBox,
  LoaderContainer,
  RightSkeleton,
  StyledSkeleton,
  Title,
} from './PostCardStyles';

interface PostCardProps {
  image?: string;
  title: string;
  content: string;
  href?: string;
  createdAt: string;
  loading?: boolean;
}

export const PostCard: FC<PostCardProps> = props => {
  const { image, title, content, href, createdAt, loading } = props;

  if (loading) {
    return (
      <Card>
        <StyledSkeleton height={230} />
        <LoaderContainer>
          <Skeleton count={4} />
          <RightSkeleton>
            <StyledSkeleton direction="rtl" width={80} height={12} />
          </RightSkeleton>
        </LoaderContainer>
      </Card>
    );
  } else {
    return (
      <Link href={href!}>
        <Card>
          <ImageBox image={image} />
          <Title>{title}</Title>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
          <Date>{createdAt}</Date>
        </Card>
      </Link>
    );
  }
};
