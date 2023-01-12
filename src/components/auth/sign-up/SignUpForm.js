import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";

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

function SignUpForm() {
  const router = useRouter();
  const signInClick = () => {
    router.push("/auth/sign-in");
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          sx={{ mb: "2rem" }}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          sx={{ mb: "2rem" }}
        />
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
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mb: "1rem" }}
        />
        <Stack
          direction="row"
          mb={2}
          justifyContent="space-between"
          alignItems="center"
          gap=".5rem"
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I agree with terms & rules"
          />
        </Stack>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </form>

      <Stack
        direction="row"
        mt={3}
        justifyContent="center"
        alignItems="center"
        gap=".5rem"
      >
        <Typography variant="subtitle1">Already have an account?</Typography>
        <Typography
          onClick={signInClick}
          variant="h6"
          sx={{ cursor: "pointer" }}
        >
          Sign In
        </Typography>
      </Stack>
    </>
  );
}

export default SignUpForm;
