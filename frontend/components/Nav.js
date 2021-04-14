import Link from 'next/link';
import NavStyle from './styles/NavStyle';
import Search from './Search';
import SignOut from './SignOut';

export default function Nav() {
  return (
    <NavStyle>
      <Link href="/myrecipes">My Recipes</Link>
      <Link href="/likes">Likes</Link>
      <Link href="/account">Account</Link>
      <Link href="/newrecipe">New Recipe</Link>
      <SignOut />
      <Link href="/signin">Sign In</Link>
      <Search />
    </NavStyle>
  );
}
