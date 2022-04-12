import type { FC } from 'react';

import { Box, ImageBox, ImageCover, Label } from './NotFoundStyles';

interface NotFoundProps {
  title: string;
}

export const NotFound: FC<NotFoundProps> = props => {
  const { title } = props;

  return (
    <Box>
      <Label>{title}</Label>
      <ImageBox>
        <ImageCover
          src="/images/Notfound.jpg"
          alt="Not Found"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/Notfound.jpg"
        />
      </ImageBox>
    </Box>
  );
};
