import { gql, useMutation } from '@apollo/client';
import styled from 'styled-components';

// TODO impelement add/remove favourite recipes
export const ADD_FAVOURITE_MUTATION = gql`
  mutation ADD_FAVOURITE_MUTATION($userID: ID!, $recipeID: ID!) {
    updateUser(id: $userID, data: { favourite: $recipeID })
  }
`;

export const DELETE_FAVOURITE_MUTATION = gql`
  mutation DELETE_FAVOURITE_MUTATION($userID: ID!, $recipeID: ID!) {
    updateUser(id: $userID, data: { favourite: $recipeID })
  }
`;

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

export default function FavouriteHeart({ favourite, id, userID }) {
  const [addFavourite] = useMutation(ADD_FAVOURITE_MUTATION, {
    variables: {
      userID,
      recipeID: id,
    },
  });
  function switchFavourite(e) {
    e.stopPropagation();
    addFavourite();
  }
  const url = favourite
    ? '/favorite_white_24dp.svg'
    : '/favorite_border_white_24dp.svg';
  return (
    <Favourite onClick={switchFavourite}>
      <img src={url} alt="favourite heart" />
    </Favourite>
  );
}
