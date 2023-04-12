import { Typography } from "@mui/material";
import React from "react";

function Title({ title }) {
  return (
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  );
}

export default Title;
