import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import CustomImage from "../utils/CustomImage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useGetCategories } from "../../api-manage/hooks/react-query/all-category/all-category";
import NavCategoryShimmer from "./NavCategoryShimmer";
import { useRouter } from "next/router";

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
  const classes = useStyles();
  const router = useRouter();
  const { data: categoriesData, isFetching } = useGetCategories();
  const handleClick = (item) => {
    router.push({
      pathname: "/category/[id]",
      // query: { id: `${item?.id}-${getModuleId()}` },
    });
  };

  return (
    <Stack>
      {isFetching ? (
        <NavCategoryShimmer />
      ) : (
        <>
          {categoriesData && categoriesData?.data?.length > 0 && (
            <>
              {categoriesData?.data?.slice(0, 10)?.map((category, index) => {
                return (
                  <Stack
                    key={category.id}
                    onClick={() => handleClick(category)}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    padding=".5rem"
                    gap="1rem"
                    onMouseEnter={handleClickSub}
                    sx={{ cursor: "pointer" }}
                  >
                    <Stack direction="row" gap=".5rem" alignItems="center">
                      <CustomImage
                        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                    <Stack direction="row" gap=".3rem" alignItems="center">
                      <Typography variant="body2">(10)</Typography>
                      <ArrowForwardIosIcon
                        style={{
                          width: "12px",
                          height: "12px",
                        }}
                        // color="primary"
                      />
                    </Stack>
                  </Stack>
                );
              })}
            </>
          )}
        </>
      )}
    </Stack>
  );
}

export default CategoryPopover;
