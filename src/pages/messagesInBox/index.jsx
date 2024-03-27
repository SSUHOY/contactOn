import React from "react";
import * as L from "../../components/Shared/Layout/index";
import * as S from "../messagesPage/messagesPage.styles";
import { InboxOutlined, MailOutlined } from "@ant-design/icons";
import { theme } from "antd";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import userStore from "../../store/users";
import { Link } from "react-router-dom";
import DropDown from "../../components/Dropdown";
import { observer } from "mobx-react-lite";

const MessagesInBox = observer(() => {
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
      <L.PageContainer
        style={{ flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ color: "white" }}>
          {" "}
          <MailOutlined />
          &nbsp; Chats &nbsp; {user.chats.length}
        </h2>
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
                  <Link
                    to={`/message/${
                      user.id === chats.receiverID
                        ? chats.senderID
                        : chats.receiverID
                    }`}>
                    <div
                      style={{
                        display: "flex",
                        color: "white",
                        alignItems: "center",
                      }}>
                      <div style={{ marginRight: 50 }}>
                        {chats.photo ? (
                          <img
                            src={chats.photo}
                            alt="avatar"
                            style={{
                              borderRadius: "50%",
                              height: 50,
                              width: 50,
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              height: 50,
                              width: 50,
                              borderRadius: "50%",
                              border: "1px solid gray",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}>
                            <S.AvatarAltText>No photo</S.AvatarAltText>
                          </div>
                        )}
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}>
              <InboxOutlined style={{ fontSize: 80, color: "white" }} />
              <p>Mailbox is empty</p>
            </div>
          )}
        </S.BoxUi>
      </L.PageContainer>
    </L.SharedLayout>
  );
});

export default MessagesInBox;
