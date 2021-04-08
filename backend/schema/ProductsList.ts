import { integer, relationship, select } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const ProductsList = list({
  // access:
  fields: {
    total: integer(),
    unit: select({
      isRequired: true,
      options: [
        { label: 'ml', value: 'ML' },
        { label: 'g', value: 'GRAM' },
        { label: 'kg', value: 'KGRAM' },
        { label: 'cup', value: 'CUP' },
      ],
    }),
    products: relationship({
      ref: 'Product',
      many: false,
    }),
    recipe: relationship({
      ref: 'Recipe.productsList',
    }),
  },
});
