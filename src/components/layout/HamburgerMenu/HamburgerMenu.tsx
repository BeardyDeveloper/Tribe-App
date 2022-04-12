import { getCookie, getCookies, removeCookies } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';

import { links } from '$components/layout/Navbar/links';
import { NavbarType } from '$components/layout/Navbar/Navbar';
import {
  Button,
  ButtonCurner,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';

import {
  Buttons,
  LinkLabel,
  Links,
  Menu,
  StyledButton,
} from './HamburgerMenuStyles';

const variants = {
  close: {
    width: 0,
    x: -60,
    transition: { duration: 0.3 },
  },
  opnen: {
    width: '100%',
    x: 0,
    transition: { duration: 0.3 },
  },
};

interface HamburgerMenuProps {
  navType: NavbarType;
  isOpen?: boolean;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = props => {
  const { isOpen, navType } = props;

  const router = useRouter();

  const coocies = getCookies();

  const [userToken, setUserToken] = useState<string | undefined>(
    coocies.userToken,
  );

  return (
    <Menu
      variants={variants}
      initial="close"
      animate={isOpen ? 'opnen' : 'close'}
      navType={navType}
    >
      <Links>
        {links.map(link => (
          <Link key={link.id} href={link.path}>
            <LinkLabel navType={navType}>{link.label}</LinkLabel>
          </Link>
        ))}
      </Links>
      <Buttons>
        <StyledButton
          label="Collaborate"
          fullWidth={true}
          variant={ButtonVariant.Primary}
          curner={ButtonCurner.Square}
          buttonSize={ButtonSize.Medium}
          onClick={() => router.push('/collaborate')}
        />
        {!userToken ? (
          <Button
            label="Log in"
            fullWidth={true}
            variant={
              navType === NavbarType.Dark
                ? ButtonVariant.LightLink
                : ButtonVariant.DarkLink
            }
            curner={ButtonCurner.Square}
            buttonSize={ButtonSize.Medium}
            onClick={() => router.push('/logIn')}
          />
        ) : (
          <Button
            label="Log Out"
            fullWidth={true}
            variant={
              navType === NavbarType.Dark
                ? ButtonVariant.LightLink
                : ButtonVariant.DarkLink
            }
            curner={ButtonCurner.Square}
            buttonSize={ButtonSize.Medium}
            onClick={() => {
              removeCookies('userToken');
              setUserToken(undefined);
            }}
          />
        )}
        <StyledButton
          label="Collaborate"
          fullWidth={true}
          variant={ButtonVariant.Primary}
          curner={ButtonCurner.Square}
          buttonSize={ButtonSize.Medium}
          onClick={() => router.push('/collaborate')}
        />
      </Buttons>
    </Menu>
  );
};
