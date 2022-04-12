import Link from 'next/link';
import type { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {
  Card,
  Clamp,
  Description,
  Label,
  Row,
  TitleBar,
} from './SpaceCardStyles';

export enum SpaceCardType {
  Dark,
  Light,
}

interface SpaceCardProps {
  type?: SpaceCardType;
  label: string;
  description?: string;
  href?: string;
  loading?: boolean;
  className?: string;
}

export const SpaceCard: FC<SpaceCardProps> = props => {
  const { type, label, description, href, loading, className } = props;

  if (loading) {
    return (
      <Card className={className} type={type}>
        <SkeletonTheme baseColor="#9EAAB9" highlightColor="#EFF2FA">
          <TitleBar>
            <Row>
              <Clamp type={type} />
              <Skeleton width={360} height={16} />
            </Row>
            <Skeleton width={120} height={21} />
          </TitleBar>
        </SkeletonTheme>
      </Card>
    );
  } else {
    return (
      <Link href={href!}>
        <Card className={className} type={type}>
          <TitleBar>
            <Row>
              <Clamp type={type} />
              {description && (
                <Description type={type}>{description}</Description>
              )}
            </Row>
            <Label type={type}>{label}</Label>
          </TitleBar>
        </Card>
      </Link>
    );
  }
};
