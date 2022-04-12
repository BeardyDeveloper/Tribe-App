import type { FC } from 'react';

import { Main } from './BackdropStyles';

interface BackdropProps {
  onClick: () => void;
}

export const Backdrop: FC<BackdropProps> = props => {
  const { onClick } = props;

  return (
    <Main
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </Main>
  );
};
