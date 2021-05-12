import { gql, useMutation, useQuery } from '@apollo/client';

const USER_FAVOURITES_ID_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        favourites {
          id
          favouriteRecipes {
            id
          }
        }
      }
    }
  }
`;

export function useFavourite() {
  function userFavouritesID() {
    const { data } = useQuery(USER_FAVOURITES_ID_QUERY);
    return data?.authenticatedItem?.favourites;
  }

  return {
    userFavouritesID,
  };
}
