import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { Search, SearchIconWrapper, StyledInputBase } from "./Navbar.style";

function SearchBox() {
  const { t } = useTranslation();
  return (
    <Box flexGrow="1">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("Search for Courses…")}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}

export default SearchBox;
