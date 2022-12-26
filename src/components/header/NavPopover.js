import { Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CategoryPopover from "./CategoryPopover";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
    padding: ".5rem",
  },
}));

function NavPopover({ open, anchorEl, handleClose, id }) {
  const classes = useStyles();
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
      >
        <CategoryPopover />
      </Popover>
    </div>
  );
}
export default NavPopover;
