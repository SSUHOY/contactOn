import styled from "styled-components";

export const MessagesUi = styled.div`
  width: 800px;
  height: 400px;
  padding: 20px;
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

export const Message = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-direction: column;
  gap: 10px;
`;
export const MessageItem = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 2px;
`;

export const SendMessagesBox = styled.div`
  height: auto;
  padding: 10px;
  margin: 5px;
  color: white;
  background-color: #8774e1;
  border-radius: 20px;
`;
export const ReceivedMessage = styled.div`
  width: auto;
`;
export const SendMessage = styled.div`
  width: auto;
`;

export const ReceivedMessagesBox = styled.div`
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  padding: 10px;
  margin: 5px;
  color: white;
  background-color: #8e8e8e;
  border-radius: 20px;
`;
