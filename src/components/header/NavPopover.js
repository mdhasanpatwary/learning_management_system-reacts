import { Popover, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import CategoryPopover from "./CategoryPopover";

import CustomImage from "../utils/CustomImage";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
  },
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
  },
}));
let numbers = [1, 2, 3, 4, 5];

function NavPopover({ open, anchorEl, openSub, anchorElSub, handleClickSub }) {
  const classes = useStyles();
  return (
    <Stack>
      <Popover
        open={open}
        anchorEl={anchorEl}
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
        <CategoryPopover handleClickSub={handleClickSub} />
      </Popover>

      {anchorElSub && (
        <Popover
          open={openSub}
          anchorEl={anchorElSub}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
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
          <Stack padding=".5rem" gap=".5rem">
            {numbers?.map((number) => {
              return (
                <Link href="/" key={number.toString()}>
                  <Stack direction="row" gap=".5rem" alignItems="center">
                    <CustomImage
                      src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      altText="Img Alt"
                      width="18"
                      height="18"
                      radius="5"
                    />
                    <Typography
                      variant="body2"
                      width="120px"
                      className={classes.textTruncate}
                    >
                      Sub Category Item
                    </Typography>
                  </Stack>
                </Link>
              );
            })}
          </Stack>
        </Popover>
      )}
    </Stack>
  );
}
export default NavPopover;
