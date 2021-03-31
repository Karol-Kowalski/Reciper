import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.div`
  color: var(--orange);
  cursor: pointer;
`;

const HeaderStyle = styled.header``;

export default function Header() {
  return (
    <HeaderStyle>
      <div>
        <Logo>
          <Link href="/" passHref>
            <div>
              <h2>RECIPER</h2>
              <h3>Be ECO</h3>
            </div>
          </Link>
        </Logo>
        <Nav />
      </div>
    </HeaderStyle>
  );
}
