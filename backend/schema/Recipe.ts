import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Recipe = list({
  // TODO add access
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    preparationTime: integer(),
    cookingTime: integer(),
    preparation: text({ isRequired: true }),
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
        { label: 'Draft', value: 'DRAFT'},
        { label: 'Waiting', value: 'WAITING'},
        { label: 'Accepted', value: 'ACCEPTED'},
        { label: 'Private', value: 'PRIVATE'},
      ],
      defaultValue: 'Draft',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    // TODO add relationship to products
  },
});
