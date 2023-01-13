import { Typography, useMediaQuery, useTheme } from "@mui/material";

function AboutUs() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Typography variant="h5" mb={2} sx={{ textTransform: "capitalize" }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ paddingRight: isLarge && "3rem" }}>
        React LMS is a fully-featured learning management system that helps you
        to run your education business in several hours. This platform helps
        instructors to create professional education materials and helps
        students to learn from the best instructors.
      </Typography>
    </>
  );
}

export default AboutUs;
