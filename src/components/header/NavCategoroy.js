import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavMenuLink } from "./NavBar.Style";
import NavPopover from "./NavPopover";

function NavCategoroy() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "mouse-over-popover" : undefined;

  return (
    <>
      <div
        onMouseEnter={handleClick}
        // onMouseLeave={handleClose}
        aria-owns={id}
        aria-haspopup="true"
      >
        <NavMenuLink>
          Categories <KeyboardArrowDownIcon />
        </NavMenuLink>
        <NavPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}

export default NavCategoroy;
