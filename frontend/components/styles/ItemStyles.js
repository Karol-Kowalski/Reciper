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
      width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: grid;
      grid-template-columns: 2fr 2fr auto;
      & > * {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        text-decoration: none;
        color: var(--white);
        font-weight: 600;
      }
      & > *:hover {
        background-color: rgba(0, 0, 0, 1);
      }
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
