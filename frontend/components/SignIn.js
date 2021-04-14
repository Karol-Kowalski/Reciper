import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from '../lib/useForm';
import { CURRENT_USER_QUERY } from '../lib/useUser';
import Form from './styles/Form';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm();

  const [signIn, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signIn();
    resetForm();
    router.push('./recipes');
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <div>Sing Into Your Profile</div>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </Form>
  );
}
