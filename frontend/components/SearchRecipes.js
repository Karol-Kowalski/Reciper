import { gql, useQuery } from '@apollo/client';
import { RecipesListStyles } from './styles/RecipeListStyles';
import Recipe from './Recipe';
import { useFavourite } from '../lib/useFavourite';

const SEARCH_RECIPES_QUERY = gql`
  query SEARCH_RECIPES_QUERY($searchTerms: String!) {
    searchTerms: allRecipes(
      where: {
        OR: [
          { name_contains_i: $searchTerms }
          { description_contains_i: $searchTerms }
        ]
      }
    ) {
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

export default function SearchRecipes({ query }) {
  const { userFavouritesID } = useFavourite();
  const favouritesData = userFavouritesID();
  const { data, loading, error } = useQuery(SEARCH_RECIPES_QUERY, {
    variables: {
      searchTerms: query.searchTerms,
    },
  });
  console.log(data);
  if (data?.searchTerms?.length === 0 || data === undefined)
    return <div>There's no recipes with searching phrase!</div>;
  return (
    <div>
      <RecipesListStyles>
        {data.searchTerms.map((recipe) => {
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
