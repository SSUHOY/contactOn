import styled from "styled-components";

export const Age = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  width: 150px;
  height: 32px;
  background: #101010;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 4px 11px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &.input[type="number"] {
    -moz-appearance: textfield;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }
`;
