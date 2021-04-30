import Link from 'next/link';
import NavStyle from './styles/NavStyle';
import Search from './Search';
import SignOut from './SignOut';
import { useUser } from '../lib/useUser';

export default function Nav() {
  const user = useUser();
  return (
    <NavStyle>
      <Link href="/recipes">Recipes</Link>
      {user && (
        <>
          <Link href="/myrecipes">My Recipes</Link>
          <Link href="/likes">Likes</Link>
          <Link href="/account">Account</Link>
          <Link href="/newrecipe">New Recipe</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/singup">Sign Up</Link>
          <Link href="/signin">Sign In</Link>
        </>
      )}
      <Search />
    </NavStyle>
  );
}
