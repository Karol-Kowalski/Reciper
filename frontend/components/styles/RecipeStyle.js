import styled from 'styled-components';

const RecipeStyle = styled.div`
  .details > * {
    display: flex;
    justify-content: space-around;
    border: 0.1rem solid;
    border-radius: 1rem;
    margin-bottom: 2rem;
    .stats {
      display: flex;
      align-items: center;
    }
  }
  .details > h2 {
    color: var(--orange);
  }
`;

export default RecipeStyle;
