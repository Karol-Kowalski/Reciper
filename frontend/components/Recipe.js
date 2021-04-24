import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import RecipeTag from './styles/RecipeTag';

export default function Recipe({ recipe }) {
  return (
    <ItemStyles>
      <Link href={`/recipe/${recipe.id}`} passHref>
        <div className="photo">
          <img
            src={recipe?.photo?.image?.publicUrlTransformed}
            alt={recipe.name}
          />
          <Title>
            <img src="/favorite_border_white_24dp.svg" alt="favourite heart" />
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
