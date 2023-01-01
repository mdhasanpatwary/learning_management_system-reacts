import React, { useEffect, useRef, useState } from "react";
// import PropTypes from "prop-types";
import { ListItemIcon, MenuItem, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import eng from "../../../public/image/us.svg";
import arabicImg from "../../../public/image/arabic-flag-svg.svg";
import banglaImg from "../../../public/image/bangla.png";
//import { CustomColouredTypography } from "../styled-components/CustomStyles.style";

// import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import i18n, { t } from "i18next";
import { useTheme } from "@mui/material/styles";
import { StyledMenu, TopBarButton } from "./Navbar.style";
import { useSettings } from "../../contexts/use-settings";

// const getValues = (settings) => ({
//   direction: settings.direction,
//   responsiveFontSizes: settings.responsiveFontSizes,
//   theme: settings.theme,
// });

let configData = {
  language: [
    {
      key: "en",
      value: "English",
    },
    {
      key: "ar",
      value: "عربى",
    },
    {
      key: "bn",
      value: "বাংলা",
    },
  ],
};

const CustomLanguage = ({ frommobilemenu }) => {
  //   const { configData } = useSelector((state) => state.configData);
  const theme = useTheme();
  const [language, setLanguage] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const { settings, saveSettings } = useSettings();
  // const [values, setValues] = useState(getValues(settings));
  const [values, setValues] = useState(settings);
  // const anchorRef = useRef(null);
  //const { global } = useSelector((state) => state.globalSettings);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let languageSetting = JSON.parse(
        localStorage.getItem("language-setting")
      );
      if (languageSetting) {
        setLanguage(languageSetting);
        i18n.changeLanguage(languageSetting);
      }
    }
  }, [language]);

  const handleClick = (event) => {
    // i18n.changeLanguage(language)
    setAnchorEl(event.currentTarget);
  };
  // let languageDirection = undefined;
  // if (typeof window !== "undefined") {
  //   languageDirection = localStorage.getItem("direction");
  // }
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // settings && setValues(getValues(settings));
    settings && setValues(settings);
  }, [settings]);
  const open = Boolean(anchorEl);

  const handleChangeLanguage = (lan) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
    localStorage.setItem("language-setting", JSON.stringify(lan));
    if (lan === "en" || lan === "bn") {
      saveSettings({
        ...values,
        direction: "ltr",
      });
    } else {
      saveSettings({
        ...values,
        direction: "rtl",
      });
    }
    toast.success(t("Language Changed"));
    handleClose?.();
  };

  return (
    <>
      <TopBarButton
        frommobilemenu={frommobilemenu}
        // id="demo-customized-button"
        variant="text"
        size="small"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        startIcon={
          <Stack color={theme.palette.secondary[1000]}>
            <img
              width="20px"
              src={
                language === "en"
                  ? eng.src
                  : language === "bn"
                  ? banglaImg.src
                  : arabicImg.src
              }
            />
          </Stack>
        }
        endIcon={
          <Stack color={theme.palette.secondary[1000]}>
            <KeyboardArrowDownIcon />
          </Stack>
        }
      >
        <Typography color={theme.palette.secondary[1000]}>
          {language === "en" ? "English" : language === "bn" ? "বাংলা" : "عربى"}
        </Typography>
      </TopBarButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {configData?.language?.map((lan, index) => (
          <MenuItem
            onClick={() => handleChangeLanguage(lan.key)}
            disableRipple
            key={index}
            sx={{
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <ListItemIcon>
              <img
                width="20px"
                src={
                  lan.key === "en"
                    ? eng.src
                    : lan.key === "bn"
                    ? banglaImg.src
                    : arabicImg.src
                }
              />
            </ListItemIcon>
            {lan.value}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

CustomLanguage.propTypes = {};

export default CustomLanguage;
