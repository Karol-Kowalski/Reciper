import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import RecipeStyle from './styles/RecipeStyle';
import Error from './Error';

const SINGLE_RECIPE_QUERRY = gql`
  query SINGLE_RECIPE_QUERRY($id: ID!) {
    recipe(where: { id: $id }) {
      id
      name
      description
      preparationTime
      cookingTime
      portions
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleRecipe({ id }) {
  const { data, loading, error } = useQuery(SINGLE_RECIPE_QUERRY, {
    variables: { id },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <Error />;
  return <RecipeStyle>{data.name}</RecipeStyle>;
}
