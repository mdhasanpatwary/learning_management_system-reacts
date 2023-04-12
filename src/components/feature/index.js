import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import Feature from "./Feature";

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

function Features() {
  return (
    <Stack sx={{ paddingBlock: "2rem" }}>
      <CustomContainer>
        <Grid container spacing={2} alignItems="center">
          {features && features?.length > 0 && (
            <>
              {features?.slice(0, 3).map((feature) => {
                return <Feature key={feature.title} feature={feature} />;
              })}
            </>
          )}
        </Grid>
      </CustomContainer>
    </Stack>
  );
}

export default Features;
