import Link from "next/link";
import { NavLinkStyle } from "./Navbar.style";
import { useTranslation } from "react-i18next";

function NavLinks() {
  const { t } = useTranslation();
  return (
    <>
      <NavLinkStyle>
        <Link href="/">{t("Instructor")}</Link>
      </NavLinkStyle>
      <NavLinkStyle>
        <Link href="/about">{t("My Courses")}</Link>
      </NavLinkStyle>
    </>
  );
}

export default NavLinks;
