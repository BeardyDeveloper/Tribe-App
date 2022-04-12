import type { FC } from 'react';

import { Bold } from './TitleBoldPartStyles';

export enum TitleBoldType {
  Dark,
  White,
  Sky,
}

interface TitleBoldPartProps {
  type?: TitleBoldType;
  text: string;
  hideLine?: boolean;
}

export const TitleBoldPart: FC<TitleBoldPartProps> = props => {
  const { type, text, hideLine } = props;

  return (
    <Bold type={type} hideLine={hideLine}>
      {text}
    </Bold>
  );
};

TitleBoldPart.defaultProps = {
  type: TitleBoldType.Dark,
};
