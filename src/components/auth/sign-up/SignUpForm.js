import React from "react";
import { onErrorResponse } from "../../../api-manage/api-error-response/ErrorResponses";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { t } from "i18next";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useSignUp } from "../../../api-manage/hooks/react-query/auth/useSignUp";
import {
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material"; 

const validationSchema = yup.object({
  name: yup.string("Enter your Name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirm_password: yup
    .string("Enter your Confirm Password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Confirm Password is required"),
});

function SignUpForm() {
  const router = useRouter();
  const signInClick = () => {
    router.push("/auth/sign-in");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        formSubmitHandler(values);
      } catch (err) {
        console.log("formSubmitHandler Try Failed", err);
      }
    },
  });

  const handleTokenAfterSignUp = (response) => {
    if (response) {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", response?.token);
      }
      toast.success(t("Signup successfully."));
      router.push("/");
    }
  };

  const { mutate, isLoading, error } = useSignUp();
  const formSubmitHandler = (values) => {
    mutate(values, {
      onSuccess: async (response) => {
        handleTokenAfterSignUp(response);
      },
      onError: onErrorResponse,
    });
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
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
        <TextField
          fullWidth
          id="confirm_password"
          name="confirm_password"
          label="Confirm Password"
          type="password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={
            formik.touched.confirm_password &&
            Boolean(formik.errors.confirm_password)
          }
          helperText={
            formik.touched.confirm_password && formik.errors.confirm_password
          }
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
