import { useRouter } from "next/router";
import Image from "next/image";
import { styled } from "@mui/material";
export const LogoWrap = styled("div")(({ theme, height, width }) => ({
  inlineSize: width,
  blockSize: height,
  //   justifyContent: "center",
  cursor: "pointer",
  //   "& img": {
  //     width: "100%",
  //     height: "100%",
  //     objectFit: "contain",
  //   },
}));

const CustomImage = ({ src, atlText, height, width }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/").then();
  };
  return (
    <LogoWrap width={width} height={height} onClick={handleClick}>
      <img width={width} src={src} alt={atlText} />
      {/* <Image src={logoURL} alt={atlText} layout="fill" objectFit="contain" /> */}
    </LogoWrap>
  );
};
export default CustomImage;
