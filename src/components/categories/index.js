import Title from "../utils/Title";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import Category from "./Category";
import { useSelector } from "react-redux";

function Categories() {
  const { categoryData } = useSelector((state) => state.categoryData);

  return (
    <Stack sx={{ paddingBlockEnd: "2rem" }}>
      <CustomContainer>
        <Title title="Top categories" />
        <Grid container spacing={2} alignItems="center">
          {categoryData && categoryData?.length > 0 && (
            <>
              {categoryData?.slice(0, 8).map((category) => {
                return <Category key={category.id} category={category} />;
              })}
            </>
          )}
        </Grid>
      </CustomContainer>
    </Stack>
  );
}

export default Categories;
