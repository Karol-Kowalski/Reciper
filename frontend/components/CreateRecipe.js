import Router from 'next/router';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { ALL_RECIPES_QUERY } from './Recipes';
import { useForm } from '../lib/useForm';
import Form from './styles/Form';

// add mutation
const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $userID: ID!
    $image: Upload
    $name: String!
    $preparationTime: Int
    $cookingTime: Int
    $portions: Int
    $description: String!
  ) {
    createRecipe(
      data: {
        user: { connect: { id: $userID } }
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
      name
      preparationTime
      cookingTime
      portions
    }
  }
`;

const USER = gql`
  query {
    authenticatedItem {
      ... on User {
        id
      }
    }
  }
`;

export default function CreateRecipe() {
  const { data: userData, error: userError, loading: userLoading } = useQuery(
    USER,
    {
      fetchPolicy: 'cache-first',
    }
  );
  const id = userData?.authenticatedItem?.id;
  const { inputs, handleChange, resetForm } = useForm();

  const [createRecipe, { loading, error, data }] = useMutation(
    CREATE_RECIPE_MUTATION,
    {
      variables: { ...inputs, userID: id },
      refetchQueries: [{ query: ALL_RECIPES_QUERY }],
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await createRecipe();
    resetForm();
    Router.push({
      pathname: `/recipe/${res.data.createRecipe.id}`,
    });
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
        <button type="submit">+ Add Recipe</button>
      </fieldset>
    </Form>
  );
}
