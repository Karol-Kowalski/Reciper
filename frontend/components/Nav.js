import Link from 'next/link';
import NavStyle from './styles/NavStyle';
import Search from './Search';
import SignOut from './SignOut';

export default function Nav() {
  return (
    <NavStyle>
      <Link href="/myrecepies">My Recepies</Link>
      <Link href="/likes">Likes</Link>
      <Link href="/account">Account</Link>
      <SignOut />
      <Link href="/signin">Sign In</Link>
      <Search />
    </NavStyle>
  );
}
