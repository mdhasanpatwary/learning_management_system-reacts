import Head from "next/head";
import Banner from "../src/components/banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Next.Js LMS</title>
        <meta
          name="description"
          content="Our Dream LMS Project for Codecanyon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </>
  );
}

// Home.getLayout = function (page) {
//   return (
//     <>
//       <Layout>{page}</Layout>
//     </>
//   );
// };
