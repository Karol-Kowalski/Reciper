import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    allRecipes {
      id
      name
    }
  }
`;

export default function Recipes() {
  const { data, error, loading } = useQuery(ALL_RECIPES_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>loading...</p>; // make loader here
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.allRecipes.map((recipe) => (
        <p key={recipe.id}>{recipe.name}</p>
      ))}
    </div>
  );
}
