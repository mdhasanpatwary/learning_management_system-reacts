import Search from "../header/Search";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { BannerWrap } from "./Banner.style";
import CustomImage from "../utils/CustomImage";
const BannerImg = "/image/media/banner.png";

const Banner = () => {
  return (
    <BannerWrap>
      <Container maxWidth={false} sx={{ maxWidth: "1448px" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={5}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Learn on your schedule
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Study any topic, anytime. explore thousands of courses for the
              lowest price ever!
            </Typography>
            <Search />
          </Grid>
          <Grid item xs={12} lg={7} textAlign="center">
            <CustomImage
              src={BannerImg}
              altText="Banner Image"
              objectFit="contained"
            />
          </Grid>
        </Grid>
      </Container>
    </BannerWrap>
  );
};

export default Banner;
