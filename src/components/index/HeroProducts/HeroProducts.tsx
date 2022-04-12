import type { FC } from 'react';

import { Divider, Product, ProductBox, Products } from './HeroProductsStyles';

export interface HeroProductProps {
  id: string;
  label: string;
  hideDivider?: boolean;
}

interface HeroProductsProps {
  products: HeroProductProps[];
  mobileWidth?: string;
}

export const HeroProducts: FC<HeroProductsProps> = props => {
  const { products, mobileWidth } = props;

  return (
    <Products mobileWidth={mobileWidth}>
      {products.map(product => (
        <ProductBox key={product.id}>
          <Product>{product.label}</Product>
          {!product.hideDivider && <Divider />}
        </ProductBox>
      ))}
    </Products>
  );
};
