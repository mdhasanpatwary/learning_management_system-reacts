import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { CustomContainer } from "../../styled-components/CustomStyled.style";
import Course from "./Course";
import Title from "../utils/Title";

const courses = [
  {
    id: 1,
    img: "/image/media/react.jpg",
    title: "The Complete 2023 Web Development Bootcamp",
    subTitle:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
    author: "Jhon Doe",
    rating: 4.3,
    totalRating: 246,
    price: 29,
    badge: "Bestseller",
    duration: "73:33:12 Hours",
    level: "Beginer",
    update: "14 February 2023",
    lectures: 155,
  },
  {
    id: 2,
    img: "/image/media/react.jpg",
    title: "The Complete 2023 Web Development Bootcamp",
    subTitle:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
    author: "Jhon Doe",
    rating: 4.3,
    totalRating: 246,
    price: 29,
    badge: "Bestseller",
    duration: "73:33:12 Hours",
    level: "Beginer",
    update: "14 February 2023",
    lectures: 155,
  },
  {
    id: 3,
    img: "/image/media/react.jpg",
    title: "The Complete 2023 Web Development Bootcamp",
    subTitle:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
    author: "Jhon Doe",
    rating: 4.3,
    totalRating: 246,
    price: 29,
    badge: "Bestseller",
    duration: "73:33:12 Hours",
    level: "Beginer",
    update: "14 February 2023",
    lectures: 155,
  },
  {
    id: 4,
    img: "/image/media/react.jpg",
    title: "The Complete 2023 Web Development Bootcamp",
    subTitle:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
    author: "Jhon Doe",
    rating: 4.3,
    totalRating: 246,
    price: 29,
    badge: "Bestseller",
    duration: "73:33:12 Hours",
    level: "Beginer",
    update: "14 February 2023",
    lectures: 155,
  },
];

function TopTenLatestCourse() {
  return (
    <Stack sx={{ paddingBlock: "2rem" }}>
      <CustomContainer>
        <Title title="Top 10 Latest Course" />
        <Grid container spacing={2} alignItems="center">
          {courses && courses?.length > 0 && (
            <>
              {courses?.slice(0, 4).map((course) => {
                return <Course key={course.id} course={course} />;
              })}
            </>
          )}
        </Grid>
      </CustomContainer>
    </Stack>
  );
}

export default TopTenLatestCourse;
