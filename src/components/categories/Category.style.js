import { Stack, styled } from "@mui/material";

export const CategoryStyleCard = styled(Stack)(({ theme }) => ({
  padding: "1rem",
  //   backgroundColor: theme.palette.background.paper,
  border: "1px solid",
  borderColor: theme.palette.border.main,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "border 200ms ease",
  h5: {
    transition: "color 200ms ease",
  },
  "&:hover": {
    borderColor: theme.palette.primary.main,
    h5: {
      color: theme.palette.primary.main,
    },
  },
}));
