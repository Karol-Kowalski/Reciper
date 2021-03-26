import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

`;

const InnerStyle = styled.div``;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <InnerStyle>{children}</InnerStyle>
    </>
  );
}
