import React from "react";
import { Select } from "antd";

const SelectSearchType = ({ typeSelection }) => {
  return (
    <>
      <Select
style={{color: 'black'}}
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
