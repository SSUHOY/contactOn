import * as S from "./searchBar.styled";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ onChange }) => {
  return (
    <S.CenterBlock>
      <SearchOutlined style={{ color: "white" }} />
      <S.SearchText
        type="search"
        placeholder="Search by user name"
        name="search"
        id="search-bar"
        onChange={(e) => onChange(e.target.value)}
      />
    </S.CenterBlock>
  );
};

export default SearchBar;
