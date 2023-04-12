import { Grid, Link, Typography } from "@mui/material";
import CustomImage from "../utils/CustomImage";
import { CategoryStyleCard } from "./Category.style";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";

function Category({ category }) {
  const theme = useTheme();
  const { configData } = useSelector((state) => state.configData);
  const app_url = configData?.details?.app_url;

  const imgUrl = app_url + category.thumbnail_image;

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <Link href="/category" color={theme.palette.text.primary}>
        <CategoryStyleCard>
          <CustomImage src={imgUrl} altText="Img Alt" width="60" />
          <Typography variant="h5" mt={3}>
            {category.title}
          </Typography>
          <Typography variant="subtitle2">
            {category.total_course} course
          </Typography>
        </CategoryStyleCard>
      </Link>
    </Grid>
  );
}

Category.prototype = {};

export default Category;
