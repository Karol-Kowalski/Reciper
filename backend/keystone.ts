import { RecipeImage } from './schema/RecipeImage';
import { Recipe } from './schema/Recipe';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schema/User';
import { Product } from './schema/Product';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const dataBaseUrl = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they should stay signed in ?
  secret: process.env.COKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password']
    // TODO add initial roles here
  }
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: dataBaseUrl,
    },
    lists: createSchema({
      User,
      Product,
      Recipe,
      RecipeImage,
      //Schema items go in here
    }),
    ui: {
      // Show the UI only for people who are sign in
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id name email`,
    })
  })
);
