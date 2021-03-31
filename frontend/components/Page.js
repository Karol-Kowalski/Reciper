import propTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
:root {
  --max-width: 1000px;
  --black: #393939;
  --grey: #3A3A3A;
  --orange: orange;
  --white: #dddddd;
}

html {
  background-color: var(--black);
  color: var(--white);
}
`;

const InnerStyle = styled.div``;

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
