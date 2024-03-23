import { Select } from "antd";
import styled from "styled-components";

export const CenterBlock = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &.input[type="number"] {
    -moz-appearance: textfield; /* Для Firefox */
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }
`;

export const StyledSelect = styled(Select)`
  margin-right: 20px;
  &:where(.css-dev-only-do-not-override-mik4fl).ant-select-single {
    width: 150px;
    height: 100%;
    .ant-select-selector {
      background-color: #d9d9d9;
      border-radius: 3px;
      .ant-select-selection-item {
        color: black;
      }
      .ant-select-selection-placeholder {
        color: black;
      }
    }
    .and-input {
      height: 100%;
    }
  }
`;
