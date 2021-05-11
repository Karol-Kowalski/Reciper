import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';

export const User = list({
  // access:
  // ui:
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    recipes: relationship({
      ref: 'Recipe.user',
      many: true,
    }),
    // TODO add roles, recipes,
    favourites: relationship({
      ref: 'Favourite.user',
      many: false,
    }),
  },
});
