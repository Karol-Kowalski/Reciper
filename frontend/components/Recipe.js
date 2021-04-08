import Link from 'next/link';
import Item from './styles/Item';
import Title from './styles/Title';

export default function Recipe({ recipe }) {
  return (
    <Item>
      <img src={recipe.photo.image.publicUrlTransformed} alt={recipe.name} />
      <Title>
        <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
      </Title>
    </Item>
  );
}
