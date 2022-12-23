import { styled } from "@mui/material";

export const NavLinkStyle = styled("span")(({ theme, languageDirection }) => ({
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
