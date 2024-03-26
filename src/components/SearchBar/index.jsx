import * as S from "./searchBar.styled";
import { SearchOutlined } from "@ant-design/icons";
import SelectSearchType from "../SearchSelect";
import { Select } from "antd";

const SearchBar = ({ onChange, typeSelection, searchType, changeGender }) => {
  return (
    <S.CenterBlock>
      <p style={{ color: "white", marginRight: 10 }}>Search by:</p>
      <SelectSearchType typeSelection={typeSelection} />

      {searchType === "Gender" ? (
        <>
          <Select
            placeholder="Select gender"
            onChange={changeGender}
            optionFilterProp="children"
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
              {
                value: "Not mentioned",
                label: "Not mentioned",
              },
              {
                value: "",
                label: "Clear filter",
              },
            ]}
          />
        </>
      ) : (
        <>
          {searchType === "" ? (
            ""
          ) : (
            <>
              <SearchOutlined style={{ color: "white" }} />
              <S.SearchText
                type={searchType === "Age" ? "number" : "search"}
                placeholder={
                  searchType === "Name"
                    ? "Search by name"
                    : searchType === "Age"
                    ? "Search by age"
                    : searchType === "City"
                    ? "Search by city"
                    : searchType === "Interests"
                    ? "Search by interests"
                    : ""
                }
                name="search"
                id="search-bar"
                onChange={(e) => onChange(e.target.value)}
              />
            </>
          )}
        </>
      )}
    </S.CenterBlock>
  );
};

export default SearchBar;
