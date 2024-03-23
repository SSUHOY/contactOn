import React, { useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import * as S from "./messagesPage.styles";
import { Button, theme } from "antd";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";

import userStore from "../../store/users";

const MessagesInBox = () => {
  const [messageContent, setMessageContent] = useState("");
  const [isSend, setIsSend] = useState(false);

  const { id } = useParams();
  const user = userStore.getUserById(Number(id));
  let sender = JSON.parse(localStorage.getItem("authorizedUser")) || [];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleTextAreaChange = (e) => {
    setMessageContent(e.target.value);
    setIsSend(false);
  };

  const handleSendMessage = () => {
    userStore.sendMessage(sender.id, user.id, messageContent);
    setMessageContent("");
    setIsSend(true);
  };

  return (
    <L.SharedLayout>
      <L.SharedHeader
        style={{
          background: colorBgContainer,
        }}>
        <Burger />
        <Logo />
      </L.SharedHeader>
      <L.MessagePageContainer>
        <S.MessagesUi>
          <S.LeftUserUi>
            <S.RecipientInformation>
              Message to: <h3>{user?.name ? user.name : "-"}</h3>
              <S.ProfileImgContainer>
                {user.photo ? (
                  <img
                    src={!user.photo ? "" : user.photo}
                    alt="avatar"
                    style={{
                      width: 200,
                      height: 200,
                      borderRadius: "100%",
                    }}
                  />
                ) : (
                  <S.AvatarAltText>No photo</S.AvatarAltText>
                )}
              </S.ProfileImgContainer>
            </S.RecipientInformation>
          </S.LeftUserUi>
          <S.RightMessageUi>
            <S.MessagesField>
              {user.receivedMessages.map((message, index) => (
                <S.SendMessagesBox key={index}>
                  <S.SendMessage>
                    <p>{message.content}</p>
                  </S.SendMessage>
                </S.SendMessagesBox>
              ))}
            </S.MessagesField>
            <p>Your message:</p>
            <TextArea
              rows={4}
              value={messageContent}
              placeholder="Type your message"
              style={{ background: "#D9D9D9", resize: "none" }}
              onChange={handleTextAreaChange}
            />
            <Button
              type="primary"
              style={{ width: 150, marginTop: 5 }}
              onClick={handleSendMessage}>
              Send
            </Button>
          </S.RightMessageUi>
        </S.MessagesUi>
      </L.MessagePageContainer>
    </L.SharedLayout>
  );
};

export default MessagesInBox;
