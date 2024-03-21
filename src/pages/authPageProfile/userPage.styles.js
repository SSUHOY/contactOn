import { Input, Upload } from "antd";
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
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;
export const RightContentBlock = styled.div`
  width: 100%;
  text-align: center;
`;

export const ProfileImgContainer = styled.div`
  margin-right: 20px;
  border-radius: 100%;
  border: 1px solid #37373d;
  width: 350px;
  height: 350px;
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
  flex-direction: row;
  width: 864px;
  height: 100%;
  padding: 20px;
  margin-bottom: 8px;
  background: #212121;
  justify-content: space-between;
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
  margin: 12px;
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

export const Error = styled.span`
  color: coral;
  z-index: 10000000;
  position: relative;
  left: 20%;
`;
