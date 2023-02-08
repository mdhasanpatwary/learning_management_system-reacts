import { Popover, Skeleton, Typography } from "@mui/material";
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

function NavPopover({
  open,
  anchorEl,
  openSub,
  anchorElSub,
  handleClickSub,
  subCategory,
}) {
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

      {subCategory && (
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
            {subCategory?.details?.length > 0 ? (
              <>
                {subCategory?.details?.map((subCategory) => {
                  return (
                    <Link href="/" key={subCategory.id}>
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
                          {subCategory.title}
                        </Typography>
                      </Stack>
                    </Link>
                  );
                })}
              </>
            ) : (
              <>
                <Stack width="100%" spacing={1} paddingRight="8px">
                  <Stack direction="row" spacing={1}>
                    <Skeleton variant="rounded" width="10%" height={15} />
                    <Skeleton variant="rounded" width="100%" height={15} />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Skeleton variant="rounded" width="10%" height={15} />
                    <Skeleton variant="rounded" width="100%" height={15} />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Skeleton variant="rounded" width="10%" height={15} />
                    <Skeleton variant="rounded" width="100%" height={15} />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Skeleton variant="rounded" width="10%" height={15} />
                    <Skeleton variant="rounded" width="100%" height={15} />
                  </Stack>
                </Stack>
              </>
            )}
          </Stack>
        </Popover>
      )}
    </Stack>
  );
}
export default NavPopover;
