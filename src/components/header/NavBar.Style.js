import { styled, Link as MenuLink } from "@mui/material";

export const NavLinkStyle = styled("div")(({ theme, languageDirection }) => ({
  //   color: `${theme.palette.mode === "dark" ? "#fff" : "#000"}`,
  fontSize: "1rem",
  display: "flex",
  gap: ".25rem",
  alignItems: "center",

  // marginRight: languageDirection === 'rtl' ? '16px' : '0px',
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export const NavMenuLink = styled(MenuLink)(({ theme }) => ({
  // color: theme.palette.neutral[1000],
  color: theme.palette.primary.secondary,
  display: "flex",
  cursor: "pointer",
  fontSize: "16px",
  gap: "5px",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));
