import { Stack } from "@mui/system";
import dynamic from "next/dynamic";
import { LayoutWrap } from "../../styled-components/CustomStyled.style";
import Footer from "../footer";
// import Header from "../header/index";

function Layout({ children }) {
  const DynamicHeadear = dynamic(() => import("../header/index"), {
    ssr: false,
  });
  return (
    <LayoutWrap>
      <DynamicHeadear />
      <main>{children}</main>
      <Footer />
    </LayoutWrap>
  );
}

export default Layout;
