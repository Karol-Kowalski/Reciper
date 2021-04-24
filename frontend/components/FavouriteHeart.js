import styled from 'styled-components';

const Favourite = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function FavouriteHeart({ favourite }) {
  const url = favourite
    ? '/favorite_white_24dp.svg'
    : '/favorite_border_white_24dp.svg';
  return (
    <Favourite>
      <img src={url} alt="favourite heart" />
    </Favourite>
  );
}
