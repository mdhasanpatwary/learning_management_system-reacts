import { Paper, Stack, Box } from "@mui/material";
import AuthHeader from "../AuthHeader";
import SignInForm from "./SignInForm";
const logoURL = "/image/logo.png";

function SignIn() {
  return (
    <Stack justifyContent="center" alignItems="center" mt="3rem" pb="2rem">
      <Box maxWidth="700px" width="100%">
        <Paper sx={{ padding: "3rem" }}>
          <AuthHeader title="Sign In Form" imgUrl={logoURL} />
          <div style={{ marginTop: "2rem" }}>
            <SignInForm />
          </div>
        </Paper>
      </Box>
    </Stack>
  );
}

export default SignIn;
