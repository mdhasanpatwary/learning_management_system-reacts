import Search from "../header/Search";
import { Button, Grid, Typography, Paper } from "@mui/material";
import { BannerWrap } from "./Banner.style";
import CustomImage from "../utils/CustomImage";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
const BannerImg = "/image/media/banner.png";

const Banner = () => {
  return (
    <CustomContainer>
      <BannerWrap>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={4} sx={{ paddingX: "3rem" }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Learn on your schedule
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Study any topic, anytime. explore thousands of courses for the
              lowest price ever!
            </Typography>
            <Button variant="outlined">View All Courses</Button>
          </Grid>
          {/* <Grid item xs={12} lg={8} textAlign="center">
              <CustomImage
                src={BannerImg}
                altText="Banner Image"
                objectFit="contained"
              />
            </Grid> */}
        </Grid>
      </BannerWrap>
    </CustomContainer>
  );
};

export default Banner;
