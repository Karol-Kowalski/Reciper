import Head from 'next/head';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import RecipeStyle from './styles/RecipeStyle';
import Error from './Error';

const SINGLE_RECIPE_QUERRY = gql`
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
  img {
    max-width: var(--maxWidth);
  }
`;

export default function SingleRecipe({ id }) {
  const { data, loading, error } = useQuery(SINGLE_RECIPE_QUERRY, {
    variables: { id },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <Error />;
  const { Recipe } = data;
  return (
    <RecipeStyle>
      <Head>
        <title>Reciper | {Recipe.name}</title>
      </Head>
      <div className="details">
        <h2 className="name">{Recipe.name}</h2>
        <div>
          <p className="stats">
            <img src="/schedule_black_24dp.svg" />
            Preparation time: {Recipe.preparationTime} min
          </p>
          <p className="stats">
            <img src="/alarm_on_black_24dp.svg" />
            Cooking time: {Recipe.cookingTime} min
          </p>
          <p className="stats">
            <img src="/local_pizza_black_24dp.svg" />
            Portions: {Recipe.portions} os.
          </p>
        </div>
      </div>
      <ImageStyle>
        <img
          src={Recipe.photo.image.publicUrlTransformed}
          alt={Recipe.photo.altText}
        />
      </ImageStyle>
      <div>
        {/* add product list component here */}
        <p>{Recipe.preparation}</p>
      </div>
    </RecipeStyle>
  );
}
