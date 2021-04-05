import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const dataBaseUrl = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they should stay signed in ?
  secret: process.env.COKIE_SECRET,
};

export default config({
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
    //Schema items go in here
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});