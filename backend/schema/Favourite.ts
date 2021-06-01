import { relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules } from '../access';

export const Favourite = list({
  access: {
    create: rules.canManageUsers,
    read: rules.canManageRecipes,
    update: rules.canManageRecipes,
    delete: rules.canManageUsers,
  },
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
