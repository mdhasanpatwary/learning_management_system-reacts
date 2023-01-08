import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const BannerWrap = styled(Box)(
  ({ theme, paddingTop, paddingBottom }) => ({
    paddingTop: paddingTop ? paddingTop : "2.5rem",
    paddingBottom: paddingBottom ? paddingBottom : "2rem",
    backgroundColor: "rgba(3, 157, 85, 0.3)",
  })
);
