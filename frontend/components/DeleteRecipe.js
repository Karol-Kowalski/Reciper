import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const REMOVE_RECIPE_MUTATION = gql`
  mutation REMOVE_RECIPE_MUTATION($id: ID!) {
    deleteRecipe(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.remove));
}

export default function DeleteRecipe({ id, children }) {
  const [remove, { error, loading }] = useMutation(REMOVE_RECIPE_MUTATION, {
    variables: { id },
    update,
  });
  async function removeRecipe(e) {
    e.preventDefault();
    if (confirm('Are you sure you want delete this Recipe?')) {
      await remove().catch((err) => alert(err.message));
    }
  }

  return (
    <button typeof="button" disabled={loading} onClick={removeRecipe}>
      {children}
    </button>
  );
}
