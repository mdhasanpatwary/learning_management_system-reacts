import { Stack, styled } from "@mui/material";

export const FooterWrapStyle = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.footer.backgroundColor,
  color: theme.palette.footer.color,
}));
