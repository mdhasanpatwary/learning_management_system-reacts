import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { NavMenuLink } from "./Navbar.style";
import NavPopover from "./NavPopover";
import { useTranslation } from "react-i18next";
import { NavMenuLink } from "./Navbar.style";

function NavCategoroy() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElSub, setAnchorElSub] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickSub = (event) => {
    setAnchorElSub(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElSub(null);
  };

  const open = Boolean(anchorEl);
  const openSub = Boolean(anchorElSub);

  return (
    <>
      <div onMouseEnter={handleClick} onMouseLeave={handleClose}>
        <NavMenuLink>
          {t("Categories")} <KeyboardArrowDownIcon />
        </NavMenuLink>
        <NavPopover
          open={open}
          anchorEl={anchorEl}
          openSub={openSub}
          anchorElSub={anchorElSub}
          handleClickSub={handleClickSub}
        />
      </div>
    </>
  );
}

export default NavCategoroy;
