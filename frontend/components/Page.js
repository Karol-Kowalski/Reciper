import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
:root {
  --maxWidth: 1000px;
  --black: #393939;
  --grey: #3A3A3A;
  --orange: orange;
  --white: #dddddd;
  --red: #F00F0F;
  --loader: #2872FB;
}
  html {
    background-color: var(--black);
    color: var(--white);
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
    }
  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }
`;

const InnerStyle = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyle>{children}</InnerStyle>
    </>
  );
}

Page.propTypes = {
  children: propTypes.any,
};
