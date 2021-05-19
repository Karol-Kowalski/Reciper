import UpdateRecipe from '../components/UpdateRecipe';

export default function update({ query }) {
  return <UpdateRecipe id={query.id} />;
}
