import { Button, Stack } from "@mui/material";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function SignInWithGoogle() {
  return (
    <Stack
      direction="row"
      gap=".5rem"
      justifyContent="center"
      alignItems="center"
      mt={3}
    >
      <GoogleLogin
        clientId="577010573173-0s4871vql16qrp6usuo25igk4ojovegj.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            size="small"
            variant="outlined"
          >
            LOGIN WITH GOOGLE
          </Button>
        )}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </Stack>
  );
}

export default SignInWithGoogle;
