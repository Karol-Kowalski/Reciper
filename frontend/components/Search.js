import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useForm } from '../lib/useForm';

const SEARCH_RECIPES_QUERY = gql`
  query SEARCH_RECIPES_QUERY($searchTerms: String!) {
    searchTerms: allRecipes(
      where: {
        OR: [
          { name_contains_i: $searchTerms }
          { description_contains_i: $searchTerms }
        ]
      }
    ) {
      id
      name
      description
      preparationTime
      cookingTime
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const SearchStyle = styled.div`
  min-width: 50rem;
  input {
    width: 100%;
    padding: 0.5rem;
  }
`;

export default function Search() {
  const { inputs, handleChange, resetForm } = useForm();
  const { data, error, loading } = useQuery(SEARCH_RECIPES_QUERY, { fetchPolicy: 'no-cache' });
  console.log(data);
  return (
    <SearchStyle>
      <input
        type="search"
        value={inputs.search}
        placeholder="Search"
        onChange={handleChange}
      />
    </SearchStyle>
  );
}
