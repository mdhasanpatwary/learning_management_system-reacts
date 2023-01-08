import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomImage from "../logo/CustomImage";

const AuthHeader = ({ title, imgUrl }) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <CustomImage atlText="logo" src={imgUrl} width="200px" />
      <Typography variant="h4" textTransform="uppercase">
        {title}
      </Typography>
    </Stack>
  );
};

export default AuthHeader;
