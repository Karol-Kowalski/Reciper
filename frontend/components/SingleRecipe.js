import Head from 'next/head';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import RecipeStyle from './styles/RecipeStyle';
import Error from './Error';
import FavouriteHeart from './FavouriteHeart';
import { useFavourite } from '../lib/useFavourite';

export const SINGLE_RECIPE_QUERY = gql`
  query SINGLE_RECIPE_QUERRY($id: ID!) {
    Recipe(where: { id: $id }) {
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

const ImageStyle = styled.div`
  overflow: hidden;
  max-width: var(--maxWidth);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: var(--maxWidth);
  }
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding-top: 2rem;
`;

const ProductsList = styled.div`
  text-align: justify;
`;

export default function SingleRecipe({ id }) {
  const { userFavouritesID } = useFavourite();
  const favouritesData = userFavouritesID();
  const { data, loading, error } = useQuery(SINGLE_RECIPE_QUERY, {
    variables: { id },
  });
  const isFavourite =
    !!favouritesData?.favouriteRecipes.find((item) => id === item.id) || null;
  if (loading) return <p>loading...</p>;
  if (error) return <Error />;
  const { Recipe } = data;
  const imgURL =
    Recipe?.photo?.image?.publicUrlTransformed || '/restaurant_white_48dp.svg';
  return (
    <RecipeStyle>
      <Head>
        <title>Reciper | {Recipe.name}</title>
      </Head>
      <div className="details">
        <h2 className="name">{Recipe.name}</h2>
        <div>
          <div className="stats">
            <img src="/schedule_black_24dp.svg" />
            Preparation time: {Recipe.preparationTime} min
          </div>
          <div className="stats">
            <img src="/alarm_on_black_24dp.svg" />
            Cooking time: {Recipe.cookingTime} min
          </div>
          <div className="stats">
            <img src="/local_pizza_black_24dp.svg" />
            Portions: {Recipe.portions} per.
          </div>
          <FavouriteHeart
            isFavourite={isFavourite}
            recipeID={id}
            favouritesID={favouritesData?.id}
          />
        </div>
      </div>
      <ImageStyle>
        <img src={imgURL} alt={Recipe.photo.altText} />
      </ImageStyle>
      <Description>
        <ProductsList>products</ProductsList>
        {/* add product list component here */}
        <div>{Recipe.description}</div>
      </Description>
    </RecipeStyle>
  );
}
