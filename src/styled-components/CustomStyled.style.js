import { Stack, Paper, styled } from "@mui/material";

// export const CustomPaperBigCard = styled(Paper)(
//   ({
//     theme,
//     nopadding,
//     minheight,
//     height,
//     backgroundColor,
//     padding,
//     width,
//     noboxshadow,
//   }) => ({
//     backgroundColor: theme.palette.background.paper,
//     padding: nopadding === "true" ? "none" : padding ? padding : "1.875rem",
//     width: width ? width : "100%",
//     height: height ? height : "100%",
//     minHeight: minheight && minheight,
//     borderRadius: "10px",
//     boxShadow:
//       noboxshadow === "true"
//         ? "none"
//         : `0px 0px 2px rgba(145, 158, 171, 0.2), 0px 5px 20px ${theme.palette.paperBoxShadow}`,
//     // marginBottom: '30px',
//   })
// );
export const LayoutWrap = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
}));

// export const FormControl = styled(Stack)(({ theme }) => ({
//   marginBottom: "2rem",
//   "& label": {
//     marginBottom: ".5rem",
//   },
//   "& input": {
//     inineSize: "100%",
//     padding: ".325rem 1rem",
//     borderRadius: ".25rem",
//   },
// }));

export const CustomContainer = styled(Stack)(({ theme, maxWidth }) => ({
  maxInlineSize: maxWidth ? maxWidth : "1448px",
  inlineSize: "100%",
  paddingInline: "1rem",
  marginInline: "auto",
}));
