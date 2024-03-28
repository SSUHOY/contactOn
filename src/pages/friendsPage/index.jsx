import React, { useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import { Button, theme } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import { BoxUi, Item } from "../messagesPage/messagesPage.styles";
import userStore from "../../store/users";
import Requests from "./requests";

const Friends = () => {
  const [requestsPage, setRequestPage] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = userStore.getAuthorizedUser();

  const handleRequestPage = () => {
    setRequestPage(!requestsPage);
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
      {requestsPage ? (
        <Requests
          requestsPage={requestsPage}
          setRequestPage={setRequestPage}
          user={user}
        />
      ) : (
        <L.PageContainer
          style={{ flexDirection: "column", alignItems: "center" }}>
          <L.FriendsBlock>
            <h2 style={{ color: "white" }}>
              <TeamOutlined />
              &nbsp; Friends &nbsp; {user.friends.length}
            </h2>
            <Button onClick={handleRequestPage}>
              Requests: {user.inFriendRequest.length}
            </Button>
          </L.FriendsBlock>{" "}
          <BoxUi style={{ width: 700 }}>
            {user.friends.length !== 0 ? (
              <div
                style={{
                  width: "100%",
                  marginBottom: 10,
                  overflowY: "auto",
                  maxHeight: "400px",
                }}>
                {user?.friends?.map((friends, index) => (
                  <Link to={`/users/${friends.id}`} key={index}>
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
              <L.NoFriendsAlertBlock>
                <p>No friends yet</p>
              </L.NoFriendsAlertBlock>
            )}
          </BoxUi>
        </L.PageContainer>
      )}
    </L.SharedLayout>
  );
};

export default Friends;
