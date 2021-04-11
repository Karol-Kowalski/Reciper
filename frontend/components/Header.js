import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.div`
  color: var(--orange);
  cursor: pointer;
`;

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Logo>
        <Link href="/" passHref>
          <div>
            <h2>RECIPER</h2>
            <h3>be ECO</h3>
          </div>
        </Link>
      </Logo>
      <Nav />
    </HeaderStyle>
  );
}
