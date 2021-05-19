import { gql, useMutation, useQuery } from '@apollo/client';
import { useForm } from '../lib/useForm';
import { ALL_RECIPES_QUERY } from './Recipes';
import { SINGLE_RECIPE_QUERY } from './SingleRecipe';
import Form from './styles/Form';

const UPDATE_RECIPE_MUTATION = gql`
  mutation UPDATE_RECIPE_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $preparationTime: Int
    $cookingTime: Int
    $portions: Int
  ) {
    updateRecipe(
      id: $id
      data: {
        name: $name
        description: $description
        preparationTime: $preparationTime
        cookingTime: $cookingTime
        portions: $portions
      }
    ) {
      id
      name
      description
      preparationTime
      cookingTime
      portions
    }
  }
`;

export default function UpdateRecipe({ id }) {
  const { data, error, loading } = useQuery(SINGLE_RECIPE_QUERY, {
    variables: { id },
    fetchPolicy: 'cache-first',
  });
  const { inputs, handleChange, resetForm } = useForm(data?.Recipe);
  const [
    updateRecipe,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_RECIPE_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_RECIPES_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await updateRecipe({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
          cookingTime: inputs.cookingTime,
          preparationTime: inputs.preparationTime,
          portions: inputs.portions,
        },
      });
    } catch {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Recipe Name
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Recipe Name"
            value={inputs.name}
            onChange={handleChange}
            maxLength="130"
          />
        </label>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="preparationTime">
          Preparation Time
          <input
            type="number"
            id="preparationTime"
            name="preparationTime"
            placeholder="[min]"
            value={inputs.preparationTime}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="cookingTime">
          Cooking Time
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            placeholder="[min]"
            value={inputs.cookingTime}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="portions">
          Portions
          <input
            type="number"
            id="portions"
            name="portions"
            placeholder="per."
            value={inputs.portions}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Cooking description
          <textarea
            required
            type="textarea"
            id="description"
            name="description"
            placeholder="How to prepare this fantastic food?"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Recipe</button>
      </fieldset>
    </Form>
  );
}
