import { Stack } from "@mui/system";
import Logo from "../../logo/Logo";
const logoURL = "/image/logo.png";
import { CustomContainer } from "../../../styled-components/CustomStyled.style";
import { FooterBottomStyle } from "../Footer.style";
import { Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";

function index() {
  return (
    <FooterBottomStyle>
      <Stack pt={2} pb={2}>
        <CustomContainer>
          <Stack
            direction="row"
            gap="2rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo src={logoURL} width="120px" />
            <Typography>© 2023 react-lms, All rights reserved</Typography>
            <SocialLinks />
          </Stack>
        </CustomContainer>
      </Stack>
    </FooterBottomStyle>
  );
}

export default index;
