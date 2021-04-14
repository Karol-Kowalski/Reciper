import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import RecipeTag from './styles/RecipeTag';

export default function Recipe({ recipe }) {
  return (
    <ItemStyles>
      <div>
        <img
          src={recipe?.photo?.image?.publicUrlTransformed}
          alt={recipe.name}
        />
        <Title>
          <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </Title>
      </div>
      <RecipeTag>
        <div>prep: {recipe.preparationTime} min</div>
        <div>cooking: {recipe.cookingTime} min</div>
        {/* TODO add favourite star button */}
      </RecipeTag>
    </ItemStyles>
  );
}
