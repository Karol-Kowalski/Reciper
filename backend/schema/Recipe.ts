import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';

export const Recipe = list({
  access: {
    create: isSignedIn,
    read: rules.canReadRecipes,
    update: rules.canManageRecipes,
    delete: rules.canManageRecipes,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    preparationTime: integer(),
    cookingTime: integer(),
    // preparation: text({ isRequired: true }),
    portions: integer(),
    photo: relationship({
      ref: 'RecipeImage.recipe',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    productsList: relationship({
      ref: 'ProductsList.recipe',
      many: true,
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Waiting', value: 'WAITING' },
        { label: 'Accepted', value: 'ACCEPTED' },
        { label: 'Private', value: 'PRIVATE' },
      ],
      defaultValue: 'Draft',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    user: relationship({
      ref: 'User.recipes',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
      many: false,
    }),
    // TODO add relationship to products
  },
});
