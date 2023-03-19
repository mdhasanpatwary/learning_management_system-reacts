import Head from "next/head";
import Banner from "../src/components/banner";
import Categories from "../src/components/categories";
import Feature from "../src/components/feature";

export default function Home({ category }) {
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
      <Feature />
      <Categories />
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

export const getServerSideProps = async () => {
  const categoryRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/mega-categories`,
    {
      method: "GET",
      // headers: {
      //   "X-software-id": 33571750,
      //   "X-server": "server",
      //   origin: process.env.NEXT_CLIENT_HOST_URL,
      // },
    }
  );
  const category = await categoryRes.json();
  return {
    props: {
      category,
    },
  };
};
