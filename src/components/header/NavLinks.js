import Link from "next/link";
import { NavLinkStyle } from "./Navbar.style";
import NavCategoroy from "./NavCategoroy";

function NavLinks() {
  return (
    <>
      {/* <NavLinkStyle>
        <Link href="/">Home</Link>
      </NavLinkStyle>
      <NavLinkStyle>
        <Link href="/about">About</Link>
      </NavLinkStyle>
      <NavLinkStyle>
        <Link href="/contact">Contact</Link>
      </NavLinkStyle> */}
      <NavCategoroy />
    </>
  );
}

export default NavLinks;
