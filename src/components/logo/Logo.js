import CustomImage from "./CustomImage";

const Logo = ({ src, width, height }) => {
  return <CustomImage atlText="logo" src={src} width={width} height={height} />;
};

Logo.propTypes = {};

export default Logo;
