import Router from 'next/router';
import { gql, useMutation } from '@apollo/client';
import Form from './styles/Form';
import { ALL_RECIPES_QUERY } from './Recipes';

// add mutation
const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $image: Upload
    $name: String!
    $preparationTime: Int
    $cookingTime: Int
    $portions: Int
    $description: String!
  ) {
    createRecipe(
      data: {
        photo: { create: { image: $image, altText: $name } }
        name: $name
        preparationTime: $preparationTime
        cookingTime: $cookingTime
        portions: $portions
        description: $description
      }
    ) {
      id
      description
      id
      name
      preparationTime
      cookingTime
      portions
    }
  }
`;

export default function CreateRecipe() {
  // add custom hook useForm

  const [createRecipe, { loading, error, data }] = useMutation(
    CREATE_RECIPE_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_RECIPES_QUERY }],
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await createRecipe();

    Router.push({
      pathname: `/recipe/${res.data.createRecipe.id}`,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" />
        </label>
        <label htmlFor="preparationTime">
          Preparation Time
          <input type="number" id="preparationTime" name="preparationTime" />
        </label>
        <label htmlFor="cookingTime">
          Cooking Time
          <input type="number" id="cookingTime" name="cookingTime" />
        </label>
        <label htmlFor="portions">
          Portions
          <input type="number" id="portions" name="portions" />
        </label>
        <label htmlFor="description">
          Cooking description
          <input type="number" id="description" name="description" />
        </label>
      </fieldset>
    </Form>
  );
}
