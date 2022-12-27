import { styled, alpha, Link as MenuLink } from "@mui/material";
import InputBase from "@mui/material/InputBase";

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

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #ddd",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
