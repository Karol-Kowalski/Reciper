import Link from 'next/link';
import Item from './styles/Item';

export default function Recipe({ recipe }) {
  return (
    <Item>
      <img src={recipe.image.url} alt={recipe.name} />
      <Title>
        <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
      </Title>
    </Item>
  );
}
