import type { FC, ReactElement } from 'react';

import { IconBox, Tag, TagBox } from './SectionTagStyles';

export enum SectionTagType {
  Dark,
  Light,
}

export enum SectionTagDirection {
  Left,
  Center,
}

interface SectionTagProps {
  type?: SectionTagType;
  direction?: SectionTagDirection;
  icon: ReactElement;
  tag: string;
}

export const SectionTag: FC<SectionTagProps> = props => {
  const { type, direction, icon, tag } = props;

  return (
    <TagBox type={type} direction={direction}>
      <IconBox type={type} direction={direction}>
        {icon}
      </IconBox>
      <Tag type={type} direction={direction}>
        {tag}
      </Tag>
    </TagBox>
  );
};

SectionTag.defaultProps = {
  type: SectionTagType.Dark,
  direction: SectionTagDirection.Center,
};
