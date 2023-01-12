import React from "react";
import { FooterWrapStyle } from "./Footer.style";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

function FooterWrap() {
  return (
    <FooterWrapStyle>
      <FooterTop />
      <FooterBottom />
    </FooterWrapStyle>
  );
}

export default FooterWrap;
