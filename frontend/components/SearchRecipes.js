import { gql, useQuery } from '@apollo/client';
import { RecipesListStyles } from './styles/RecipeListStyles';
import Recipe from './Recipe';
import { useFavourite } from '../lib/useFavourite';
import styled from 'styled-components';

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

const NoResults = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--orange);
  font-size: 2rem;
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
    return <NoResults>There's no recipes with searching phrase!</NoResults>;
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
