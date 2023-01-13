import AboutUs from "./AboutUs";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import {
  footerCategories,
  footerUsefulLinks,
  footerHelpLinks,
} from "./demoLinks";
import FooterLinksWidget from "./FooterLinksWidget";

function index() {
  return (
    <Stack sx={{ paddingTop: "80px", paddingBottom: "30px" }}>
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item sm={6} lg={3}>
            <AboutUs />
          </Grid>
          <Grid item sm={6} lg={3}>
            <FooterLinksWidget
              footerLinks={footerCategories}
              title="Top categories"
            />
          </Grid>
          <Grid item sm={6} lg={3}>
            <FooterLinksWidget
              footerLinks={footerUsefulLinks}
              title="Useful links"
            />
          </Grid>
          <Grid item sm={6} lg={3}>
            <FooterLinksWidget footerLinks={footerHelpLinks} title="Help" />
          </Grid>
        </Grid>
      </CustomContainer>
    </Stack>
  );
}

export default index;
