import { permissionsList } from './schema/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermitions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session.data.role?.[permission];
    },
  ])
);

export const permissions = {
  ...generatedPermitions,
};

export const rules = {
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    return { id: session.itemId };
  },
  canManageRecipes({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageRecipes({ session })) {
      return true;
    }
    return { user: { id: session.itemId } };
  },
  canReadRecipes({ session }: ListAccessArgs) {
    if (permissions.canManageRecipes({ session })) {
      return true;
    }
    return { status: 'ACCEPTED' };
  },
};
