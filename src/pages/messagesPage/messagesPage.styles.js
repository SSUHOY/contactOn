import styled from "styled-components";

export const BoxUi = styled.div`
  width: 350px;
  display: flex;
  gap: 10px;
  height: 400px;
  margin-top: 20px;
  background-color: #1e1e1e;
  border-radius: 20px;
`;

export const LeftUserUi = styled.div`
  width: 40%;
  height: 100%;
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
  width: 100%;
  overflow: auto;
  max-height: 200px;
  height: 100%;
  background-color: #323233;
  border-radius: 2px;
`;
export const MessagesAligner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-end;
`;

export const Message = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
`;

export const SendMessagesBox = styled.div`
  padding: 10px;
  margin: 5px;
  max-width: 435px;
  min-width: 50px;
  color: white;
  background-color: #8774e1;
  border-radius: 20px;
`;
export const SendMessage = styled.div`
  width: auto;
  margin: 2px;
  padding: 2px;
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
