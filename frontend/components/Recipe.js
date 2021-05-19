import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import RecipeTag from './styles/RecipeTag';
import FavouriteHeart from './FavouriteHeart';
import UpdateRecipe from './UpdateRecipe';
import DeleteRecipe from './DeleteRecipe';

export default function Recipe({ favouritesID, isFavourite, recipe }) {
  const photoURL =
    recipe?.photo?.image?.publicUrlTransformed || '/restaurant_white_24dp.svg';
  return (
    <ItemStyles>
      <Link href={`/recipe/${recipe.id}`} passHref>
        <div className="photo">
          <div className="heart">
            <FavouriteHeart
              isFavourite={isFavourite}
              recipeID={recipe.id}
              favouritesID={favouritesID}
            />
          </div>
          <img src={photoURL} alt={recipe.name} />
          <Title>
            <p>{recipe.name}</p>
          </Title>
        </div>
      </Link>
      <RecipeTag>
        <div>
          <img src="/schedule_black_24dp.svg" />
          <p>prep: {recipe.preparationTime} min</p>
        </div>
        <div>
          <img src="/alarm_on_black_24dp.svg" />
          <p>cooking: {recipe.cookingTime} min</p>
        </div>
      </RecipeTag>
      <Link
        href={{
          pathname: 'update',
          query: {
            id: recipe.id,
          },
        }}
      >
        Edit
      </Link>
      <DeleteRecipe id={recipe.id}>Delete!</DeleteRecipe>
    </ItemStyles>
  );
}
