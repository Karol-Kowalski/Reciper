import styled from 'styled-components';

const RecipeTag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  * {
    text-align: center;
    padding: 1rem;
    border: 0.2rem solid var(--white);
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
`;

export default RecipeTag;
