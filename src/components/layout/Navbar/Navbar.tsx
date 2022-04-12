/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import { getCookies, removeCookies } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import useMedia from 'use-media';

import { CloseSvg, LogoSvg, MenuSvg } from '$assets/index';
import { HamburgerMenu } from '$components/layout/HamburgerMenu/HamburgerMenu';
import {
  Button,
  ButtonCurner,
  ButtonSize,
  ButtonVariant,
} from '$sharedComponents/Button/Button';
import useScrollPosition from '$src/hooks/useScrollPosition';
import { below } from '$theme/viewports';

import { links } from './links';
import {
  Box,
  Buttons,
  LinkLabel,
  Links,
  LogoBox,
  MenuToggler,
  Nav,
  StyledContainer,
} from './NavbarStyles';

export enum NavbarType {
  Light,
  Dark,
}

interface NavbarProps {
  type?: NavbarType;
  isActive?: boolean;
  onUserLogOut?: () => void;
}

export const Navbar: FC<NavbarProps> = props => {
  const { type, isActive, onUserLogOut } = props;

  const coocies = getCookies();

  const [userToken, setUserToken] = useState<string | undefined>(
    coocies.userToken,
  );

  const router = useRouter();

  const isBelowTablet = useMedia(below.tablet);
  const scrollPosition = useScrollPosition();
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isNavActive = scrollPosition > 90 || isMenuOpen || isActive;

  const variants = {
    inactive: {
      backgroundColor: 'rgba(22, 27, 44, 0)',
      transition: { duration: 0.3 },
    },
    active: {
      backgroundColor:
        type === NavbarType.Light
          ? theme.background.light
          : theme.background._dark,
      boxShadow:
        type === NavbarType.Light
          ? '0px 16px 32px rgba(22, 27, 44, 0.04)'
          : '0px 16px 32px rgba(22, 27, 44, 0.04)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Nav variants={variants} animate={isNavActive ? 'active' : 'inactive'}>
        <StyledContainer>
          <>
            <Box isBelowTablet={isBelowTablet}>
              <LogoBox>
                <LogoSvg
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.replace('/')}
                />
              </LogoBox>
              <Links>
                {links.map(link => (
                  <Link key={link.id} href={link.path}>
                    <LinkLabel
                      isNavActive={isNavActive}
                      navType={type}
                      isLinkActive={router.pathname === link.path}
                    >
                      {link.label}
                    </LinkLabel>
                  </Link>
                ))}
              </Links>

              <Buttons>
                {!userToken ? (
                  <Button
                    label="Log in"
                    variant={
                      isNavActive && type === NavbarType.Light
                        ? ButtonVariant.DarkLink
                        : ButtonVariant.LightLink
                    }
                    curner={ButtonCurner.Rounded}
                    buttonSize={ButtonSize.XSmall}
                    onClick={() => router.push('/logIn')}
                  />
                ) : (
                  <Button
                    label="Log Out"
                    variant={
                      isNavActive && type === NavbarType.Light
                        ? ButtonVariant.DarkLink
                        : ButtonVariant.LightLink
                    }
                    curner={ButtonCurner.Rounded}
                    buttonSize={ButtonSize.XSmall}
                    onClick={() => {
                      removeCookies('userToken');
                      setUserToken(undefined);
                      if (onUserLogOut) {
                        onUserLogOut();
                      }
                    }}
                  />
                )}
                <Button
                  label="Collaborate"
                  variant={ButtonVariant.Primary}
                  curner={ButtonCurner.Rounded}
                  buttonSize={ButtonSize.XSmall}
                  onClick={() => router.push('/collaborate')}
                />
              </Buttons>
            </Box>
            {isBelowTablet && (
              <MenuToggler
                isNavActive={isNavActive}
                navType={type}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <CloseSvg /> : <MenuSvg />}
              </MenuToggler>
            )}
          </>
        </StyledContainer>
      </Nav>
      {isBelowTablet && <HamburgerMenu isOpen={isMenuOpen} navType={type!} />}
    </>
  );
};
