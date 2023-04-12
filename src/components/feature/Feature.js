import { Grid, Typography } from "@mui/material";
import { Media, MediaBody } from "../../styled-components/CustomStyled.style";
import CustomImage from "../utils/CustomImage";
import { FeaturedStyleCard } from "./Feature.style";

function Feature({ feature }) {
  return (
    <Grid key={feature.title} item xs={12} sm={6} lg={4}>
      <FeaturedStyleCard>
        <Media>
          <CustomImage
            src={feature.icon}
            altText="Img Alt"
            width="36"
            height="36"
          />
          <MediaBody>
            <Typography variant="h5">{feature.title}</Typography>
            <Typography variant="subtitle2">{feature.subTitle}</Typography>
          </MediaBody>
        </Media>
      </FeaturedStyleCard>
    </Grid>
  );
}

Feature.prototype = {};

export default Feature;
