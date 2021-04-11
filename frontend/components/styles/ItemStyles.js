import styled from 'styled-components';

const ItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
`;

export default ItemStyles;
