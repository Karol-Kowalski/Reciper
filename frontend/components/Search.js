import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useState } from 'react';

const SearchStyle = styled.div`
  min-width: 50rem;
  form {
    display: flex;
    input {
      width: 100%;
      padding: 0.5rem;
      margin-right: 1rem;
      &:focus {
        border: 0.3rem solid var(--orange);
        outline: 0;
      }
    }
    button[type='submit'] {
      font-weight: 600;
      font-size: 2rem;
      width: 4rem;
      border: 0;
      border-radius: 1rem;
      background: var(--orange);
      cursor: pointer;
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [searchTerms, setSearchTerms] = useState('');
  function executeSearch(e) {
    e.preventDefault();
    if (!searchTerms) return;
    router.push({
      pathname: '/search',
      query: { searchTerms },
    });
  }
  function changeSearchTerms(e) {
    setSearchTerms(e.target.value);
  }
  return (
    <SearchStyle>
      <form>
        <input
          type="text"
          name="search"
          value={searchTerms}
          placeholder="Search"
          onChange={changeSearchTerms}
        />
        <button type="submit" onClick={executeSearch}>
          &#8635;
        </button>
      </form>
    </SearchStyle>
  );
}
