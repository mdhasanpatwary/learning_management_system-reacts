import dynamic from "next/dynamic";
import Footer from "../footer";
// import Header from "../header/index";

function Layout({ children }) {
  const DynamicHeadear = dynamic(() => import("../header/index"), {
    ssr: false,
  });
  return (
    <>
      <DynamicHeadear />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
