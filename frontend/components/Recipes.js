import { useApolloClient, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useFavourite } from '../lib/useFavourite';
import Recipe from './Recipe';
import { RecipesListStyles } from './styles/RecipeListStyles';

export const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    allRecipes {
      id
      name
      description
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

export default function Recipes() {
  const { userFavouritesID } = useFavourite();
  const favouritesData = userFavouritesID();
  const { data, error, loading } = useQuery(ALL_RECIPES_QUERY);
  if (loading) return <p>loading...</p>; // make loader here
  if (error) return <p>Error: {error.message}</p>;
  console.log(data, error, loading);
  return (
    <div>
      <RecipesListStyles>
        {data.allRecipes.map((recipe) => {
          const isFavourite =
            !!favouritesData?.favouriteRecipes.find(
              (item) => recipe.id === item.id
            ) || null;

          return (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              favouritesID={favouritesData?.id}
              isFavourite={isFavourite}
            />
          );
        })}
      </RecipesListStyles>
    </div>
  );
}
