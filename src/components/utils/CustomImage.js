import { Box, styled } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

export const CustomImageWrap = styled(Box)(
  ({ theme, width, borderRadius }) => ({
    display: "grid",
    placeItems: "center",
    backgroundColor: "#ddd",
    position: "relative",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: borderRadius,
    },
  })
);

function CustomImage({ src, altText, width, height, radius }) {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <CustomImageWrap
      width={width && `${width / 16}rem`}
      minWidth={width && `${width / 16}rem`}
      height={height && `${height / 16}rem`}
      borderRadius={radius && `${radius / 16}rem`}
    >
      <img
        src={imgSrc}
        alt={altText}
        onError={() => {
          // currentTarget.onerror = null; // prevents looping
          //   setImgSrc(placeholder.src);
          setImgSrc("https://via.placeholder.com/300");
        }}
      />
      {/* <Image
        src={imgSrc}
        alt={altText}
        width={width}
        minWidth={width}
        height={height}
        borderRadius={radius}
      /> */}
    </CustomImageWrap>
  );
}

export default CustomImage;
