import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schema/User';
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
      //Schema items go in here
    }),
    ui: {
      // TODO: change this for roles
      isAccessAllowed: () => true,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`
    })
  })
);
