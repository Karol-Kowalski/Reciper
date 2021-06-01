import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';
import { isSignedIn, permissions } from '../access';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'recipe',
};

export const RecipeImage = list({
  access: {
    create: isSignedIn,
    read: () => true,
    update: permissions.canManageRecipes,
    delete: permissions.canManageRecipes,
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    recipe: relationship({ ref: 'Recipe.photo' }),
  },
  ui: {
    listView: {
      initialColumns: ['image', 'altText', 'recipe'],
    },
  },
});
