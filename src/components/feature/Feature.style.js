import { Stack, styled } from "@mui/material";

export const FeaturedStyleCard = styled(Stack)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: theme.palette.background.paper,
  boxShadow: ".5rem .5rem 2rem rgba(0, 0, 0, .05)",
}));
