import type { FC } from 'react';

import {
  Box,
  Bullet,
  Label,
  NavLink,
  OutLink,
  Title,
  TitleLine,
  TitleRow,
} from './ListStyles';

interface ListItem {
  id: string;
  navLink?: boolean;
  href?: string;
  noLink?: boolean;
  label: string;
}

interface ListProps {
  title: string;
  items: ListItem[];
}

export const List: FC<ListProps> = props => {
  const { title, items } = props;

  return (
    <Box>
      <TitleRow>
        <TitleLine />
        <Title>{title}</Title>
      </TitleRow>
      {items.map(item => {
        if (item.noLink) {
          return (
            <Label key={item.id}>
              <Bullet>&bull;</Bullet>
              {item.label}
            </Label>
          );
        } else if (item.navLink) {
          return (
            <NavLink key={item.id} href={item.href!}>
              <Bullet>&bull;</Bullet>
              {item.label}
            </NavLink>
          );
        } else {
          return (
            <OutLink href={item.href} key={item.id}>
              <Bullet>&bull;</Bullet>
              {item.label}
            </OutLink>
          );
        }
      })}
    </Box>
  );
};
