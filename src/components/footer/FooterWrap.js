import React from "react";
import { FooterWrapStyle } from "./Footer.style";
import FooterBottom from "./Footer-bottom";
import FooterTop from "./Footer-top";

function FooterWrap() {
  return (
    <FooterWrapStyle>
      <FooterTop />
      <FooterBottom />
    </FooterWrapStyle>
  );
}

export default FooterWrap;
