import styled from 'styled-components';

const RecipeTag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid var(--white);
    border-radius: 0.5rem;
    margin: 0.2rem;
    * {
      margin: 0.5rem;
    }
  }
`;

export default RecipeTag;
