import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import CustomImage from "../utils/CustomImage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGetCategories } from "../../api-manage/hooks/react-query/all-category/all-category";
import NavCategoryShimmer from "./NavCategoryShimmer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  textTruncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
  },
}));

function CategoryPopover({ handleCloseSub, handleClickSub }) {
  const { categoryData } = useSelector((state) => state.categoryData);
  const { configData } = useSelector((state) => state.configData);
  const app_url = configData?.details?.app_url;
  const classes = useStyles();
  const router = useRouter();

  // const { data: categoriesData, isFetching } = useGetCategories();
  const handleClick = (item) => {
    router.push({
      pathname: "/category/[id]",
      // query: { id: `${item?.id}-${getModuleId()}` },
      query: { id: `${item?.id}` },
    });
  };

  return (
    <Stack>
      {/* {isFetching ? (
        <NavCategoryShimmer />
      ) : (
        <> */}
      {categoryData && categoryData?.length > 0 && (
        <>
          {categoryData?.slice(0, 10)?.map((category) => {
            const imgUrl = app_url + category.thumbnail_image;

            return (
              <Stack
                key={category.id}
                onClick={() => handleClick(category)}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                padding=".5rem"
                gap="1rem"
                onMouseEnter={(event) => handleClickSub(event, category)}
                sx={{ cursor: "pointer" }}
              >
                <Stack direction="row" gap=".5rem" alignItems="center">
                  <CustomImage
                    src={imgUrl}
                    altText="Img Alt"
                    width="18"
                    height="18"
                    radius="5"
                  />
                  <Typography
                    variant="body2"
                    width="120px"
                    className={classes.textTruncate}
                  >
                    {category.title}
                  </Typography>
                </Stack>
                {category.has_child && (
                  <Stack direction="row" gap=".3rem" alignItems="center">
                    <Typography variant="body2">
                      ({category.total_subcategory})
                    </Typography>
                    <ArrowForwardIosIcon
                      style={{
                        width: "12px",
                        height: "12px",
                      }}
                      // color="primary"
                    />
                  </Stack>
                )}
              </Stack>
            );
          })}
        </>
      )}
      {/* </>
      )} */}
    </Stack>
  );
}

export default CategoryPopover;
