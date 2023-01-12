import { Button, Stack, Typography } from "@mui/material";

function SignInAs({ setSignInCredentials }) {
  return (
    <Stack mt={3} justifyContent="center" gap=".8rem">
      <Typography variant="subtitle1" align="center">
        Login As-
      </Typography>
      <Stack
        direction="row"
        gap=".5rem"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            setSignInCredentials({
              email: "studen@gmail.com",
              password: "12345678",
            })
          }
        >
          Student
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            setSignInCredentials({
              email: "admin@gmail.com",
              password: "12345678",
            })
          }
        >
          Admin
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            setSignInCredentials({
              email: "instructor@gmail.com",
              password: "12345678",
            })
          }
        >
          Instructor
        </Button>
      </Stack>
    </Stack>
  );
}

export default SignInAs;
