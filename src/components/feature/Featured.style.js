import { Stack, styled } from "@mui/material";

export const FeaturedCard = styled(Stack)(({ theme }) => ({
  padding: "1rem",
  borderRadius: ".5rem",
  backgroundColor: theme.palette.background.paper,
  boxShadow: ".5rem .5rem 2rem rgba(0, 0, 0, .1)",
}));
