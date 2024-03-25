import React from "react";
import * as L from "../../components/Shared/Layout/index";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import { theme } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { BoxUi, Item } from "../messagesPage/messagesPage.styles";
import userStore from "../../store/users";

const Friends = () => {
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
        <Logo />
      </L.SharedHeader>
      <L.PageContainer>
        <BoxUi>
          {user.friends.length !== 0 ? (
            <div
              style={{
                width: "100%",

                marginBottom: 10,
                overflowY: "auto",
                maxHeight: "400px",
              }}>
              {user?.friends?.map((friends) => (
                <Link to={`/users/${friends.id}`}>
                  <Item key={friends.receiverID}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 20,
                        width: "100%",
                        padding: 10,
                      }}>
                      <div>
                        {friends.photo ? (
                          <img
                            src={friends.photo}
                            alt="avatar"
                            style={{
                              borderRadius: "50%",
                              height: 50,
                              width: 50,
                            }}
                          />
                        ) : (
                          <UserOutlined />
                        )}
                      </div>
                      <p>{friends.name}</p>
                      <p>{friends.email}</p>
                      {friends.city ? <p>{friends.city}</p> : "-"}
                    </div>
                  </Item>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                color: "gray",
                textAlign: "center",
              }}>
              <p>No friends yet</p>
            </div>
          )}
        </BoxUi>
      </L.PageContainer>
    </L.SharedLayout>
  );
};

export default Friends;
