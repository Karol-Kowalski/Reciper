import { relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Favourite = list({
  fields: {
    favouriteRecipes: relationship({
      ref: 'Recipe',
      many: true,
    }),
    user: relationship({
      ref: 'User.favourites',
      many: false,
    }),
  },
});
