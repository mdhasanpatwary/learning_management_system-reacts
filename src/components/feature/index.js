import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import {
  CustomContainer,
  Media,
  MediaBody,
} from "../../styled-components/CustomStyled.style";
import CustomImage from "../utils/CustomImage";
import { FeaturedCard } from "./Featured.style";

const features = [
  {
    icon: "/image/icons/online-learning.png",
    title: "15 Online courses",
    subTitle: "Explore a variety of fresh topics",
  },
  {
    icon: "/image/icons/online-learning.png",
    title: "Expert instruction",
    subTitle: "Find the right course for you",
  },
  {
    icon: "/image/icons/online-learning.png",
    title: "Lifetime access",
    subTitle: "Learn on your schedule",
  },
];

function Feature() {
  return (
    <Stack sx={{ paddingBlock: "2rem" }}>
      <CustomContainer>
        <Grid container spacing={2} alignItems="center">
          {features && features?.length > 0 && (
            <>
              {features?.slice(0, 3).map((feature, index) => {
                return (
                  <Grid item xs={12} sm={6} lg={4}>
                    <FeaturedCard>
                      <Media>
                        <CustomImage
                          src={feature.icon}
                          altText="Img Alt"
                          width="36"
                          height="36"
                        />
                        <MediaBody>
                          <Typography variant="h5">{feature.title}</Typography>
                          <Typography variant="subtitle2">
                            {feature.subTitle}
                          </Typography>
                        </MediaBody>
                      </Media>
                    </FeaturedCard>
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
      </CustomContainer>
    </Stack>
  );
}

export default Feature;
