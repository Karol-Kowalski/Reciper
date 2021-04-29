import { useUser } from '../lib/useUser';
import Recipe from './Recipe';
import { RecipesListStyles } from './styles/RecipeListStyles';

export default function MyRecipes() {
  const user = useUser();
  console.log(user);
  return (
    <RecipesListStyles>
      {user?.recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </RecipesListStyles>
  );
}
