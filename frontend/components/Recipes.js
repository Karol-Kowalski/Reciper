import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Recipe from './Recipe';

export const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    allRecipes {
      id
      name
      description
      preparation
      preparationTime
      cookingTime
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const RecipesListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;

export default function Recipes() {
  const { data, error, loading } = useQuery(ALL_RECIPES_QUERY);
  if (loading) return <p>loading...</p>; // make loader here
  if (error) return <p>Error: {error.message}</p>;
  console.log(data, error, loading);
  return (
    <div>
      <RecipesListStyles>
        {data.allRecipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </RecipesListStyles>
    </div>
  );
}
