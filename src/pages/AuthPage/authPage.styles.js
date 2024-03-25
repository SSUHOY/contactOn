import { Input, Form, Button } from "antd";
import styled from "styled-components";

export const AuthPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #101010;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  max-width: 600px;
  width: 380px;
  background: #212121;
  border: 1px solid #373c3f;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledFormItem = styled(Form.Item)``;

export const StyledInput = styled(Input)`
  background-color: #d9d9d9;
  color: black;
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
export const StyledInputPassword = styled(Input.Password)`
  background-color: #d9d9d9;
  color: black;
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

export const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  &:where(.css-dev-only-do-not-override-mik4fl).ant-btn-default {
    margin-bottom: 14px;
    padding: 4px;
    span {
      color: #d9d9d9;
    }
  }
  &:where(.css-dev-only-do-not-override-mik4fl).ant-btn-primary {
    margin-bottom: 14px;
    width: 150px;
    padding: 5px;
    span {
      color: white;
    }
  }
`;

export const Error = styled.p`
  color: coral;
`;
