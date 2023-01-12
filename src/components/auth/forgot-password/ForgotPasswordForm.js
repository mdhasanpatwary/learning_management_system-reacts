import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

function ForgotPasswordForm() {
  const router = useRouter();
  const signInClick = () => {
    router.push("/auth/sign-in");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
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
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: "2rem" }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Send Request
        </Button>
      </form>

      <Stack
        direction="row"
        mt={3}
        justifyContent="center"
        alignItems="center"
        gap=".5rem"
      >
        <Typography variant="subtitle1">Want to go back?</Typography>
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

export default ForgotPasswordForm;
