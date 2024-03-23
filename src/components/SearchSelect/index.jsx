import React from "react";
import { StyledSelect } from "../SearchBar/searchBar.styled";

const SelectSearchType = ({ typeSelection }) => {
  return (
    <>
      <StyledSelect
        placeholder="Search by"
        optionFilterProp="children"
        onChange={(e) => typeSelection(e)}
        options={[
          {
            value: "name",
            label: "Name",
          },
          {
            value: "age",
            label: "Age",
          },
          {
            value: "city",
            label: "City",
          },
          {
            value: "interests",
            label: "Interests",
          },
          {
            value: "gender",
            label: "Gender",
          },
        ]}
      />
    </>
  );
};

export default SelectSearchType;
