import CustomImage from "./CustomImage";

const Logo = ({ logoURL, width, height }) => {
  return (
    <CustomImage atlText="logo" src={logoURL} width={width} height={height} />
  );
};

Logo.propTypes = {};

export default Logo;
