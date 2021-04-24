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
`;

export default ItemStyles;
