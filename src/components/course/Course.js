import { useState } from "react";
import { Grid, Link, Typography, Box, Rating } from "@mui/material";
import CustomImage from "../utils/CustomImage";
import { CourseStyleCard, StyledCourseContent } from "../course/Course.style";
import { useTheme } from "@mui/material";
import { Stack } from "@mui/system";

function Course({ course }) {
  const { title, img, author, rating, price, totalRating } = course;
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <CourseStyleCard>
        <Link href="/course" color={theme.palette.text.primary}>
          <CustomImage src={img} altText="Img Alt" />
          <StyledCourseContent>
            <Box sx={{ mb: 1 }}>
              <Stack direction="row" alignItems="center" gap={1}>
                <Typography variant="h6" color={theme.palette.primary.main}>
                  {rating}
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="body2">({totalRating} Reviews)</Typography>
              </Stack>
            </Box>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle2">{author}</Typography>
            <Typography variant="h5">${price}</Typography>
          </StyledCourseContent>
        </Link>
      </CourseStyleCard>
    </Grid>
  );
}

Course.prototype = {};

export default Course;
