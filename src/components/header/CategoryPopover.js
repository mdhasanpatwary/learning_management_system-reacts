import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import CustomImage from "../utils/CustomImage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
  },
}));

function CategoryPopover() {
  const classes = useStyles();
  return (
    <>
      <Link href="/">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding=".5rem"
          gap="1rem"
        >
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
              Categoroy Item
            </Typography>
          </Stack>
          <Stack direction="row" gap=".3rem" alignItems="center">
            <Typography variant="body2">(10)</Typography>
            <ArrowForwardIosIcon
              style={{
                width: "12px",
                height: "12px",
              }}
              // color="primary"
            />
          </Stack>
        </Stack>
      </Link>
      <Link href="/">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding=".5rem"
          gap="1rem"
        >
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
              Categoroy Item
            </Typography>
          </Stack>
          <Stack direction="row" gap=".3rem" alignItems="center">
            <Typography variant="body2">(10)</Typography>
            <ArrowForwardIosIcon
              style={{
                width: "12px",
                height: "12px",
              }}
              // color="primary"
            />
          </Stack>
        </Stack>
      </Link>
      <Link href="/">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          padding=".5rem"
          gap="1rem"
        >
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
              Categoroy Item
            </Typography>
          </Stack>
          <Stack direction="row" gap=".3rem" alignItems="center">
            <Typography variant="body2">(10)</Typography>
            <ArrowForwardIosIcon
              style={{
                width: "12px",
                height: "12px",
              }}
              // color="primary"
            />
          </Stack>
        </Stack>
      </Link>
    </>
  );
}

export default CategoryPopover;
