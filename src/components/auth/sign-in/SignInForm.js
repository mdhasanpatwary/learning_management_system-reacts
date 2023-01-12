import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/router";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInAs from "./SignInAs";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function SignInForm() {
  const router = useRouter();
  const signUpClick = () => {
    router.push("/auth/sign-up");
  };
  const forgotPassClick = () => {
    router.push("/auth/forgot-password");
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function setSignInCredentials({ email, password }) {
    formik.setFieldValue("email", email);
    formik.setFieldValue("password", password);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: "2rem" }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          autoComplete="on"
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: "1rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ cursor: "pointer" }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />
        <Stack
          direction="row"
          mb={2}
          justifyContent="space-between"
          alignItems="center"
          gap=".5rem"
        >
          <FormControlLabel
            control={<Checkbox checked={formik.values.rememberMe} />}
            label="Remembar Me"
            name="rememberMe"
            onChange={formik.handleChange}
          />
          <Typography
            onClick={forgotPassClick}
            variant="h6"
            sx={{ cursor: "pointer" }}
          >
            Forgot Password?
          </Typography>
        </Stack>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign In
        </Button>
      </form>
      <SignInAs setSignInCredentials={setSignInCredentials} />
      <SignInWithGoogle />
      <Stack
        direction="row"
        mt={3}
        justifyContent="center"
        alignItems="center"
        gap=".5rem"
      >
        <Typography variant="subtitle1">Do not have an account?</Typography>
        <Typography
          onClick={signUpClick}
          variant="h6"
          sx={{ cursor: "pointer" }}
        >
          Sign up
        </Typography>
      </Stack>
    </>
  );
}

export default SignInForm;
