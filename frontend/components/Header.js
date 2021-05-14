import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';

const Logo = styled.div`
  border: 1px solid white;
  border-radius: 1.5rem;
  width: 20rem;
  height: 15rem;
  padding: 2rem;
  margin-left: 5rem;
  color: var(--orange);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeaderStyle = styled.header`
  margin-bottom: 5rem;
  .bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .search {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Link href="/" passHref>
          <Logo>
            <h1>RECIPER</h1>
            <h3>be ECO</h3>
          </Logo>
        </Link>
        <Nav />
      </div>
      <div className="search">
        <Search />
      </div>
    </HeaderStyle>
  );
}
