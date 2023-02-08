import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavPopover from "./NavPopover";
import { useTranslation } from "react-i18next";
import { NavMenuLink } from "./Navbar.style";
import { useGetSubCategories } from "../../api-manage/hooks/react-query/all-category/useGetSubCategory";

function NavCategoroy() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSub, setAnchorElSub] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [enable, setEnable] = useState(false);

  const { data: subCategory } = useGetSubCategories(categoryId, enable);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickSub = (event, category) => {
    // if (category?.childes.length > 0) {
    if (category) {
      setAnchorElSub(event.currentTarget);
      setCategoryId(category?.id);
      setEnable(true);
    } else {
      handlePopoverCloseSub();
    }

    // handlePopoverOpen();
  };

  const handlePopoverCloseSub = () => {
    setAnchorElSub(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElSub(null);
  };

  const open = Boolean(anchorEl);
  const openSub = Boolean(anchorElSub);

  return (
    <>
      <div onMouseEnter={handleClick} onMouseLeave={handleClose}>
        <NavMenuLink>
          {t("Categories")} <KeyboardArrowDownIcon />
        </NavMenuLink>
        <NavPopover
          open={open}
          anchorEl={anchorEl}
          openSub={openSub}
          anchorElSub={anchorElSub}
          handleClickSub={handleClickSub}
          subCategory={subCategory}
        />
      </div>
    </>
  );
}

export default NavCategoroy;
