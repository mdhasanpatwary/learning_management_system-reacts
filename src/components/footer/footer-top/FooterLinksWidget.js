import { Typography, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { PropTypes } from "prop-types";

function FooterLinksWidget({ footerLinks, title }) {
  const router = useRouter();
  function footerLinkClick(url) {
    router.push(url);
  }
  return (
    <>
      <Typography variant="h5" mb={2} sx={{ textTransform: "capitalize" }}>
        {title}
      </Typography>
      <Stack spacing={1}>
        {footerLinks.map((item, index) => {
          return (
            <Typography
              key={index}
              onClick={() => footerLinkClick(item.url)}
              sx={{
                cursor: "pointer",
                transition: "all .3s ease",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.linkText}
            </Typography>
          );
        })}
      </Stack>
    </>
  );
}

FooterLinksWidget.propTypes = {
  footerLinks: PropTypes.array,
  title: PropTypes.string,
};

export default FooterLinksWidget;
