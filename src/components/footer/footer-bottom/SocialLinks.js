import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { Stack } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSelector } from "react-redux";

const SocialLinks = () => {
  const { configData } = useSelector((state) => state.configData);
  const socialMedia = configData?.details?.social_link;
  return (
    <Stack direction="row" gap="1.25rem">
      {socialMedia &&
        socialMedia?.length > 0 &&
        socialMedia?.map((item) => {
          const { url, id, name } = item;

          switch (name) {
            case "facebook":
              return <SocialLink url={url} icon={FacebookIcon} key={id} />;
            case "twitter":
              return <SocialLink url={url} icon={TwitterIcon} key={id} />;
            case "instagram":
              return <SocialLink url={url} icon={InstagramIcon} key={id} />;
            case "whatsapp":
              return <SocialLink url={url} icon={WhatsAppIcon} key={id} />;
            default:
              return null;
          }

          // return (
          //   <Link target="_blank" key={id} href={url}>
          //     <Typography
          //       component={icon}
          //       color="whiteContainer.main"
          //       sx={{ inlineSize: "1rem", blockSize: "1rem" }}
          //     />
          //   </Link>
          // );
        })}
    </Stack>
  );
};

const SocialLink = ({ url, icon }) => {
  return (
    <Link target="_blank" href={url}>
      <Typography
        component={icon}
        color="whiteContainer.main"
        sx={{ inlineSize: "1rem", blockSize: "1rem" }}
      />
    </Link>
  );
};

export default SocialLinks;
