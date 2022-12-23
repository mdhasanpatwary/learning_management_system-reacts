import CustomLogo from "./CustomLogo";

const Logo = ({ logoURL, width, height }) => {
  return (
    <CustomLogo
      atlText="logo"
      logoURL={logoURL}
      width={width}
      height={height}
    />
  );
};

Logo.propTypes = {};

export default Logo;
