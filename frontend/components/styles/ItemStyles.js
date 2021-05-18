import styled from 'styled-components';

const ItemStyles = styled.div`
  .photo {
    background-color: var(--grey);
    cursor: pointer;
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    .heart {
      position: absolute;
      right: 0;
    }
  }
  .photo > img {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
  }
  .photo > :first-child {
    opacity: 0;
    transition: opacity ease-in-out 0.05s;
  }
  .photo:hover > :first-child {
    opacity: 1;
  }
`;

export default ItemStyles;
