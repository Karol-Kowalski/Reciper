import styled from 'styled-components';

const ItemStyles = styled.div`
  .photo {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .photo > img {
    width: 100%;
    object-fit: cover;
  }
  .photo > :first-child {
    opacity: 0;
    transition: opacity ease-in-out 0.15s;
  }
  .photo:hover > :first-child {
    opacity: 1;
  }
`;

export default ItemStyles;
