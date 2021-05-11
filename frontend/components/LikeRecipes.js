import { gql, useQuery } from '@apollo/client';
import { useFavourite } from '../lib/useFavourite';
import { RecipesListStyles } from './styles/RecipeListStyles';
import Recipe from './Recipe';

const ALL_FAVOURITES_RECIPES_QUERY = gql`
  query ALL_FAVOURITES_RECIPES_QUERY {
    authenticatedItem {
      ... on User {
        favourites {
          id
          favouriteRecipes {
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
      }
    }
  }
`;

export default function LikeRecipes() {
  const { userFavouritesID } = useFavourite();
  const favouritesData = userFavouritesID();
  const { data, error, loading } = useQuery(ALL_FAVOURITES_RECIPES_QUERY);
  const favouritesRecipes = data?.authenticatedItem?.favourites?.favouriteRecipes;
  return (
    <div>
      <RecipesListStyles>
        {favouritesRecipes.map((recipe) => {
          const isFavourite = !!favouritesData.favouriteRecipes.find(
            (item) => recipe.id === item.id
          );
          return (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              favouritesID={favouritesData.id}
              isFavourite={isFavourite}
            />
          );
        })}
      </RecipesListStyles>
    </div>
  );
}
