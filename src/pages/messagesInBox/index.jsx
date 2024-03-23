import React, { useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import * as S from "../messagesPage/messagesPage.styles";
import { InboxOutlined } from "@ant-design/icons";
import { theme } from "antd";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import userStore from "../../store/users";

const MessagesInBox = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = userStore.getAuthorizedUser();
  console.log(user.messages);
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
          <S.LeftUserUi
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <InboxOutlined style={{ fontSize: 80, color: "white" }} />
          </S.LeftUserUi>
          {user.messages ? (
            <S.Message>
              {user?.messages?.map((messages, index) => (
                <S.MessageItem key={index}>
                  <div>{messages.sender}</div>
                  <div>{messages.content}</div>
                </S.MessageItem>
              ))}
            </S.Message>
          ) : (
            "Сообщений нет"
          )}
        </S.MessagesUi>
      </L.MessagePageContainer>
    </L.SharedLayout>
  );
};

export default MessagesInBox;
