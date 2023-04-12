import Head from "next/head";
import Banner from "../src/components/banner";
import Categories from "../src/components/categories";
import Courses from "../src/components/course";
import TopTenLatestCourse from "../src/components/course/TopTenLatestCourse";
import Features from "../src/components/feature";
import { categories_api, config_api } from "../src/api-manage/ApiRoutes";
import MainApi from "../src/api-manage/MainApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Router } from "next/router";
import { setConfigData } from "../src/redux/slices/configData";
import { setCategoryData } from "../src/redux/slices/categoryData";

export default function Home({ categoryData, configData }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (configData && configData.length === 0) {
      Router.push("/404");
    } else {
      dispatch(setConfigData(configData));
    }
  }, [configData]);

  useEffect(() => {
    categoryData &&
      categoryData?.details?.length > 0 &&
      dispatch(setCategoryData(categoryData?.details));
  }, [categoryData]);

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
      <Features />
      <Categories />
      <Courses />
      <TopTenLatestCourse />
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
  const { data: categoryData } = await MainApi.get(`${categories_api}`);
  const { data: configData } = await MainApi.get(`${config_api}`);
  // const categoryRes = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${categories_api}`,
  //   {
  //     method: "GET",
  //     // headers: {
  //     //   "X-software-id": 33571750,
  //     //   "X-server": "server",
  //     //   origin: process.env.NEXT_CLIENT_HOST_URL,
  //     // },
  //   }
  // );
  // const configRes = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${config_api}`,
  //   {
  //     method: "GET",
  //   }
  // );
  // const category = await categoryRes.json();
  // const configData = await configRes.json();
  return {
    props: {
      categoryData,
      configData,
    },
  };
};
