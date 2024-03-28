import React, { useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import { Link } from "react-router-dom";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import { BoxUi, Item } from "../messagesPage/messagesPage.styles";
import userStore from "../../store/users";
import { Button } from "antd";

const Requests = ({ requestsPage, setRequestPage }) => {
  // const [user, setUser] = useState({});

  const user = userStore.getAuthorizedUser();

  const handleRequestPage = () => {
    setRequestPage(!requestsPage);
  };

  const handleAddToFriends = (friend, e) => {
    e.stopPropagation();
    e.preventDefault();
    userStore.addFriend(user.id, friend.id);
  };

  // useEffect(() => {
  //   const user = userStore.getAuthorizedUser();
  //   console.log("🚀 ~ useEffect ~ user:", user);

  //   setUser(user);
  // });

  return (
    <L.PageContainer style={{ flexDirection: "column", alignItems: "center" }}>
      <L.FriendsBlock>
        <h2 style={{ color: "white" }}>
          {" "}
          <TeamOutlined />
          &nbsp; Requests &nbsp; {user ? user?.inFriendRequest?.length : ""}
        </h2>
        <Button onClick={handleRequestPage}>Friends</Button>
      </L.FriendsBlock>
      <BoxUi style={{ width: 600 }}>
        {user.inFriendRequest.length !== 0 ? (
          <div
            style={{
              width: "100%",
              marginBottom: 10,
              overflowY: "auto",
              maxHeight: "400px",
            }}>
            {user?.inFriendRequest?.map((friends, index) => (
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
                  <L.RequestsHandlers>
                    <Button
                      type="primary"
                      onClick={(e) => handleAddToFriends(friends, e)}>
                      Add
                    </Button>
                    <Button
                    // onClick={handleRemoveRequest}
                    >
                      Remove
                    </Button>
                  </L.RequestsHandlers>
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
  );
};

export default Requests;
