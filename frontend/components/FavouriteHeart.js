import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../lib/useUser';

const Favourite = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ADD_FAVOURITE_MUTATION = gql`
  mutation ADD_FAVOURITE_MUTATION($id: ID!, $recipeID: ID!) {
    updateFavourite(
      id: $id
      data: { favouriteRecipes: { connect: { id: $recipeID } } }
    ) {
      id
    }
  }
`;

const REMOVE_FAVOURITE_MUTATION = gql`
  mutation REMOVE_FAVOURITE_MUTATION($id: ID!, $recipeID: ID!) {
    updateFavourite(
      id: $id
      data: { favouriteRecipes: { disconnect: { id: $recipeID } } }
    ) {
      id
    }
  }
`;

export default function FavouriteHeart({
  isFavourite,
  recipeID,
  favouritesID,
}) {
  const [add, { data: addData, error: addError }] = useMutation(
    ADD_FAVOURITE_MUTATION,
    {
      variables: {
        id: favouritesID,
        recipeID,
      },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  const [remove, { data: removeData, error: removeError }] = useMutation(
    REMOVE_FAVOURITE_MUTATION,
    {
      variables: {
        id: favouritesID,
        recipeID,
      },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  function switchFavourite(e) {
    e.stopPropagation();
    if (!isFavourite) {
      add();
    }
    remove('remove');
  }
  const url = isFavourite
    ? '/favorite_white_24dp.svg'
    : '/favorite_border_white_24dp.svg';
  return (
    <Favourite onClick={switchFavourite}>
      <img src={url} alt="favourite heart" />
    </Favourite>
  );
}
