import { Button } from "antd";
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
  width: 340px;
  text-align: center;
  height: 400px;
  padding: 20px;
  background-color: #212121;
  margin-left: 20px;
  border-radius: 20px;
`;
export const UserUploadPhotos = styled.div`
  width: 320px;
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

export const StyledButton = styled(Button)`
  .ant-button > span {
    color: "white";
  }

  .ant-btn-default {
    margin-bottom: 14px;
    padding: 4px;
    span {
      color: #d9d9d9;
    }
  }
  .ant-btn-primary {
    margin-bottom: 14px;
    width: 150px;
    padding: 5px;
  }
`;

export const Error = styled.span`
  color: coral;
  z-index: 10000000;
  position: relative;
  left: 20%;
`;
