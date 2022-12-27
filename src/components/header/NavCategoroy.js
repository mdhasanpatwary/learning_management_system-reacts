import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavMenuLink } from "./Navbar.style";
import NavPopover from "./NavPopover";

function NavCategoroy() {
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
  // const handleCloseSub = () => {
  //   setAnchorElSub(null);
  // };

  const open = Boolean(anchorEl);
  const openSub = Boolean(anchorElSub);
  // const id = open ? "mouse-over-popover" : undefined;

  return (
    <>
      <div onMouseEnter={handleClick} onMouseLeave={handleClose}>
        <NavMenuLink>
          Categories <KeyboardArrowDownIcon />
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
