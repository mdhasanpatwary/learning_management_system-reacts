import { Stack, styled } from "@mui/material";

export const CourseStyleCard = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: "1px solid",
  borderColor: theme.palette.border.main,
}));

export const StyledCourseContent = styled(Stack)(({ theme }) => ({
  padding: "1rem",
}));
