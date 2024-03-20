import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5%;
  height: 100vh;
`;

export const UserPageContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin-bottom: 8px;
  background: #212121;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
`;

export const UserPageTitle = styled.h4`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;

export const UserPageImageBox = styled.div``;

export const UserPageImage = styled.img``;

export const UserPageContent = styled.div`
  padding-top: 10px;
`;

export const StyledInput = styled(Input)`
  background-color: #d9d9d9;
  color: black;
  width: 150px;
  padding: 10px;
  height: auto;
  border-radius: 3px;
  &:where(
      .css-dev-only-do-not-override-mik4fl
    ).ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) {
    background-color: #d9d9d9;
  }
  &:focus-within {
    background-color: #d9d9d9;
    border-color: #8774e1;
  }
  &:hover {
    background-color: #d9d9d9;
    border-radius: 3px solid #8774e1;
  }
`;
export const StyledTextArea = styled(TextArea)`
  background-color: #d9d9d9;
  color: black;
  padding: 10px;
  height: auto;
  border-radius: 3px;
  width: 150px;
  &:where(
      .css-dev-only-do-not-override-mik4fl
    ).ant-input-outlined.ant-input-status-error:not(.ant-input-disabled) {
    background-color: #d9d9d9;
  }
  &:focus-within {
    background-color: #d9d9d9;
    border-color: #8774e1;
  }
  &:hover {
    background-color: #d9d9d9;
    border-radius: 3px solid #8774e1;
  }
`;
