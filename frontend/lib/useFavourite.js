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

const ADD_FAVOURITE_MUTATION = gql`
  mutation ADD_FAVOURITE_MUTATION($id: ID!, $recipeID: recipeID!) {
    updateFavourite(
      id: $id
      data: { favouriteRecipes: { connect: { id: $recipeID } } }
    ) {
      id
      name
    }
  }
`;

const REMOVE_FAVOURITE_MUTATION = gql`
  mutation ADD_FAVOURITE_MUTATION($id: ID!, $recipeID: recipeID!) {
    updateFavourite(
      id: $id
      data: { favouriteRecipes: { disconnect: $recipeID } }
    ) {
      id
      name
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
