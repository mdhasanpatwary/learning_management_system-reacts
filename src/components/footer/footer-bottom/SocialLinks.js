import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { Stack } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const socialMedia = [
  {
    icon: FacebookIcon,
    url: "https://facebook.com/",
  },
  {
    icon: TwitterIcon,
    url: "https://twitter.com/",
  },
  {
    icon: InstagramIcon,
    url: "https://instagram.com/",
  },
  {
    icon: WhatsAppIcon,
    url: "https://whatsapp.com/",
  },
];

const SocialLinks = () => {
  return (
    <Stack direction="row" gap="1.25rem">
      {socialMedia.map((item, index) => {
        const { icon, url } = item;
        return (
          <Link target="_blank" key={index} href={url}>
            <Typography
              component={icon}
              color="whiteContainer.main"
              sx={{ inlineSize: "1rem", blockSize: "1rem" }}
            />
          </Link>
        );
      })}
    </Stack>
  );
};

export default SocialLinks;
