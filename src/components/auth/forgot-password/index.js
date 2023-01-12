import { Paper, Stack, Box } from "@mui/material";
import AuthHeader from "../AuthHeader";
import ForgotPasswordForm from "./ForgotPasswordForm";
const logoURL = "/image/logo.png";

function ForgotPassword() {
  return (
    <Stack justifyContent="center" alignItems="center" mt="3rem" pb="2rem">
      <Box maxWidth="700px" width="100%">
        <Paper sx={{ padding: "3rem" }}>
          <AuthHeader title="Forgot password" imgUrl={logoURL} />
          <div style={{ marginTop: "2rem" }}>
            <ForgotPasswordForm />
          </div>
        </Paper>
      </Box>
    </Stack>
  );
}

export default ForgotPassword;
