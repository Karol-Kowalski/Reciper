import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import RecipeTag from './styles/RecipeTag';
import FavouriteHeart from './FavouriteHeart';

export default function Recipe({ recipe }) {
  const photoURL =
    recipe?.photo?.image?.publicUrlTransformed || '/temporaryPhoto.svg';
  return (
    <ItemStyles>
      <Link href={`/recipe/${recipe.id}`} passHref>
        <div className="photo">
          <FavouriteHeart favourite="true" />
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
    </ItemStyles>
  );
}
