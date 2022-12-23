const About = () => {
  return <div>About</div>;
};
export default About;

About.getLayout = function (page) {
  return (
    <>
      <div>About Layout</div>
      {page}
      <div>About Layout</div>
    </>
  );
};
