import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import RecipeTag from './styles/RecipeTag';

export default function Recipe({ recipe }) {
  return (
    <ItemStyles>
      <img src={recipe?.photo?.image?.publicUrlTransformed} alt={recipe.name} />
      <Title>
        <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
      </Title>
      <RecipeTag>
        <div>
          {recipe.prepareTime}
        </div>
        <div>
          {recipe.wholeTime}
        </div>
        <div>
          {/* TODO add favourite star button */}
        </div>
      </RecipeTag>
    </ItemStyles>
  );
}
