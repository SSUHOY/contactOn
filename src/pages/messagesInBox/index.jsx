import React, { useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import * as S from "../messagesPage/messagesPage.styles";
import { InboxOutlined } from "@ant-design/icons";
import { theme } from "antd";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import userStore from "../../store/users";
import { Link } from "react-router-dom";
import DropDown from "../../components/Dropdown";

const MessagesInBox = () => {
  const isAuth = userStore.isAuth;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = userStore.getAuthorizedUser();

  return (
    <L.SharedLayout>
      <L.SharedHeader
        style={{
          background: colorBgContainer,
        }}>
        <Burger />
        {isAuth ? (
          <L.UsersUI>
            <DropDown />
          </L.UsersUI>
        ) : (
          ""
        )}
        <Logo />
      </L.SharedHeader>
      <L.PageContainer>
        <S.BoxUi>
          {user?.chats?.length !== 0 ? (
            <div
              style={{
                width: "100%",
                padding: 15,
                marginBottom: 10,
                overflowY: "auto",
                maxHeight: "400px",
              }}>
              {user?.chats?.map((chats, index) => (
                <S.Item key={index}>
                  <Link to={`/message/${chats.receiverID}`}>
                    <div
                      style={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                      }}>
                      <div style={{ marginRight: 50 }}>
                        <img
                          src={chats.photo}
                          alt="avatar"
                          style={{ borderRadius: "50%", height: 50, width: 50 }}
                        />
                      </div>
                      <div>
                        <p>{chats.name}</p>
                        <span>{chats.email}</span>
                      </div>
                    </div>
                  </Link>
                </S.Item>
              ))}
            </div>
          ) : (
            <div
              style={{
                color: "gray",
                textAlign: "center",
              }}>
              <InboxOutlined style={{ fontSize: 80, color: "white" }} />
              <p>Mailbox is empty</p>
            </div>
          )}
        </S.BoxUi>
      </L.PageContainer>
    </L.SharedLayout>
  );
};

export default MessagesInBox;
