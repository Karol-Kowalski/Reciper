import Link from 'next/link';
import Image from 'next/image'
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import RecipeTag from './styles/RecipeTag';
import FavouriteHeart from './FavouriteHeart';
import DeleteRecipe from './DeleteRecipe';

export default function Recipe({ favouritesID, isFavourite, recipe }) {
  const photoURL =
    recipe?.photo?.image?.publicUrlTransformed || '/restaurant_white_24dp.svg';
  return (
    <ItemStyles>
      <Link href={`/recipe/${recipe.id}`} passHref>
        <div className="photo">
          <div className="heart">
            <DeleteRecipe id={recipe.id}>Delete!</DeleteRecipe>
            <Link
              href={{
                pathname: '/update/',
                query: {
                  id: recipe.id,
                },
              }}
            >
              Edit
            </Link>
            <FavouriteHeart
              isFavourite={isFavourite}
              recipeID={recipe.id}
              favouritesID={favouritesID}
            />
          </div>
          <Image 
            src={photoURL}
            alt={recipe.name}
            width={240}
            height={200}
          />
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
    </ItemStyles>
  );
}
