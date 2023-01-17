import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider, Hidden, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import Search from "./Search";
import NavCategoroy from "./NavCategoroy";
import Profile from "./Profile";
import { Stack } from "@mui/system";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
const logoURL = "/image/logo.png";

function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  const signInClick = () => {
    router.push("/auth/sign-in");
  };
  const signUpClick = () => {
    router.push("/auth/sign-up");
  };
  return (
    <header>
      <AppBar position="static" color="inherit" elevation={1}>
        <CustomContainer>
          <Toolbar
            sx={{
              gap: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingInline: "0rem !important",
            }}
          >
            <Stack direction="row" gap="1rem" alignItems="center" flexGrow="1">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Logo src={logoURL} width="120px" />
              <Hidden mdDown>
                <NavCategoroy />
              </Hidden>
              <Search />
            </Stack>

            <Stack direction="row" gap="1rem" alignItems="center">
              <Hidden lgDown>
                <NavLinks />
              </Hidden>
              <MenuItem>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
              <Hidden mdDown>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Button onClick={signInClick} size="small" color="inherit">
                  {t("Login")}
                </Button>
                <Button onClick={signUpClick} size="small" variant="contained">
                  {t("Sign Up")}
                </Button>
              </Hidden>
              <ThemeSwitch />
              {/* <Profile /> */}
            </Stack>
          </Toolbar>
        </CustomContainer>
      </AppBar>
    </header>
  );
}

export default Header;
