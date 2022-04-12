import type { FC, ReactElement } from 'react';

import { Box } from './UIComponentsStyles';

interface ContainerProps {
  children: ReactElement;
  className?: string;
}

export const Container: FC<ContainerProps> = props => {
  const { children, className } = props;

  return <Box className={className}>{children}</Box>;
};
