import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
const BannerImg = "/image/media/banner.jpg";

export const BannerWrap = styled(Box)(
  ({ theme, paddingTop, paddingBottom }) => ({
    paddingTop: paddingTop ? paddingTop : "2.5rem",
    paddingBottom: paddingBottom ? paddingBottom : "3rem",
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  })
);
