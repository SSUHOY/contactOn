import { Button, Input, Select, Upload } from "antd";
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
`;

export const LeftContentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`;
export const ContentBlock = styled.div`
  width: 100%;
  text-align: center;
`;
export const RightContentBlock = styled.div`
  width: 500px;
  text-align: center;
  height: 500px;
  padding: 20px;
  background-color: #212121;
  margin-left: 20px;
  border-radius: 20px;
`;
export const UserUploadPhotos = styled.div`
  width: 260px;
  height: 400px;
  overflow: auto;
  background-color: lightblue;
  border-radius: 10px;
  padding: 10px;
  padding-top: 15px;
  margin-left: 10px;
  background-color: #212121;
`;

export const ProfileImgContainer = styled.div`
  border-radius: 100%;
  border: 1px solid #37373d;
  width: 200px;
  height: 200px;
`;

export const ImgUploadWrapper = styled(Upload)`
  &:where(
      .css-dev-only-do-not-override-mik4fl
    ).ant-upload-wrapper.ant-upload-picture-card-wrapper,
  &:where(
      .css-dev-only-do-not-override-mik4fl
    ).ant-upload-wrapper.ant-upload-picture-circle-wrapper {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  &:where(
      .css-dev-only-do-not-override-mik4fl
    ).ant-upload-wrapper.ant-upload-picture-circle-wrapper
    .ant-upload.ant-upload-select {
    width: 100%;
    height: 100%;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
`;

export const AvatarAltText = styled.p`
  z-index: 10000;
  color: #b4cad6;
  position: relative;
  z-index: 10000;
  top: 48%;
  left: 36%;
  position: relative;
`;

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 340px;
  padding: 20px;
  margin-bottom: 8px;
  background: #212121;
  border-radius: 10px;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.3);
`;

export const UserPageTitle = styled.h4`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
`;

export const StyledInput = styled(Input)`
  background-color: #d9d9d9;
  color: black;
  width: 150px;
  padding: 10px;
  height: auto;
  border-radius: 3px;
  .ant-space-item {
    .ant-input {
      &.placeholder-shown {
        color: "red";
      }
    }
  }
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
export const StyledSelect = styled(Select)`
  &:where(
      .css-dev-only-do-not-override-mik4fl
    ).ant-select.ant-select-in-form-item {
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

export const Error = styled.span`
  color: coral;
  z-index: 10000000;
  position: relative;
  left: 20%;
`;
