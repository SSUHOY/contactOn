import styled from "styled-components";

export const MessagesUi = styled.div`
  width: 800px;
  height: 400px;
  background-color: #1e1e1e;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;

export const LeftUserUi = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileImgContainer = styled.div`
  width: 200px;
  height: 200px;
`;
export const AvatarAltText = styled.p`
  font-size: 10px;
`;

export const RightMessageUi = styled.div`
  width: 60%;
  color: #b4cad6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RecipientInformation = styled.div`
  padding: 20px;
  color: #b4cad6;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;
export const MessagesField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 400px;
  overflow-y: auto;
  background-color: #323233;
  border-radius: 2px;
  border: 1px solid gray;
`;

export const MessageBox = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
  margin: 5px;
  color: white;
  background-color: #8774e1;
  border-radius: 20px;
`;
