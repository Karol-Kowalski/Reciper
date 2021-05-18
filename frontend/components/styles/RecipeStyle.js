import styled from 'styled-components';

const RecipeStyle = styled.div`
  .details > * {
    display: flex;
    justify-content: space-around;
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding: 2rem;
    .stats {
      display: flex;
      align-items: center;
    }
  }
  .details > div {
    border: 0.1rem solid;
  }
  .details > h2 {
    color: var(--orange);
  }
`;

export default RecipeStyle;
