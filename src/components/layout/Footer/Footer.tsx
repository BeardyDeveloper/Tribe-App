import { useRouter } from 'next/router';
import type { FC } from 'react';

import { LogoSvg } from '$assets/index';
import { Container } from '$components/UI/Container';
import { List } from '$sharedComponents/List/List';

import {
  About,
  Box,
  Divider,
  Inc,
  ListBox,
  Lists,
  Logo,
  LogoFrame,
  Section,
} from './FooterStyles';
import { about, contact, pricingProducts, products } from './lists';

export const Footer: FC = () => {
  const { pathname } = useRouter();

  return (
    <Section id="About">
      <Container>
        <>
          <Box>
            <LogoFrame>
              <Logo>
                <LogoSvg />
              </Logo>
              <Inc>2022 Every, Inc.</Inc>
            </LogoFrame>
            <Lists>
              <ListBox>
                <List
                  title="Products"
                  items={pathname === '/pricing' ? pricingProducts : products}
                />
              </ListBox>
              <ListBox>
                <List title="About" items={about} />
              </ListBox>
              <ListBox>
                <List title="Contact" items={contact} />
              </ListBox>
            </Lists>
          </Box>
          <Divider />
          <About>
            A customizable community platform for businesses ( Behind every
            successful company is the ability to engage and delight customers.
            Tribe enables you to do just that 🎉)
          </About>
        </>
      </Container>
    </Section>
  );
};
