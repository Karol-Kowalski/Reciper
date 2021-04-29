import styled from 'styled-components';

const NavStyle = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-self: end;
  a,
  button {
    padding: 1rem;
    margin: 1rem;
    border: none;
    background: none;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    border: 0.2rem solid green;
    border-radius: 2rem;
  }
`;

export default NavStyle;
