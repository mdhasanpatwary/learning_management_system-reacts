import AboutUs from "./AboutUs";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";

function index() {
  return (
    <Stack sx={{ paddingTop: "80px", paddingBottom: "30px" }}>
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <AboutUs />
          </Grid>
        </Grid>
      </CustomContainer>
    </Stack>
  );
}

export default index;
