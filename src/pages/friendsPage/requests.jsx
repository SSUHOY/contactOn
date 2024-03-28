import React, { useEffect, useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import { Link } from "react-router-dom";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import { BoxUi, Item } from "../messagesPage/messagesPage.styles";
import userStore from "../../store/users";
import { Button } from "antd";

const Requests = ({ requestsPage, setRequestPage }) => {
  const [userData, setUser] = useState({});
  const [requestType, setRequestType] = useState("incoming");

  const handleRequestPage = () => {
    setRequestPage(!requestsPage);
  };

  const handleAddToFriends = (friend, e) => {
    e.stopPropagation();
    e.preventDefault();
    userStore.addFriend(userData.id, friend.id);
    const updatedUserData = {
      ...userData,
      inFriendRequest: userData.inFriendRequest.filter(
        (f) => f.id !== friend.id
      ),
    };
    setUser(updatedUserData);
  };

  const handleRemoveRequest = (friend, e) => {
    e.stopPropagation();
    e.preventDefault();
    userStore.removeRequest(friend.id, userData.id);
    const updatedUserData = {
      ...userData,
      inFriendRequest: userData.inFriendRequest.filter(
        (f) => f.id !== friend.id
      ),
    };
    setUser(updatedUserData);
  };
  const handleRemoveOutRequest = (friend, e) => {
    e.stopPropagation();
    e.preventDefault();
    userStore.removeOutRequest(friend.id, userData.id);
    const updatedUserData = {
      ...userData,
      outFriendRequest: userData.outFriendRequest.filter(
        (f) => f.id !== friend.id
      ),
    };
    setUser(updatedUserData);
  };

  useEffect(() => {
    const authProfileUserData = userStore.getAuthorizedUser();
    setUser(authProfileUserData);
  }, [requestType]);

  return (
    <L.PageContainer style={{ flexDirection: "column", alignItems: "center" }}>
      <L.FriendsBlock>
        <h2 style={{ color: "white" }}>
          <TeamOutlined />
          &nbsp; Requests &nbsp;{" "}
        </h2>
        <Button onClick={handleRequestPage}>Friends</Button>
      </L.FriendsBlock>
      <select
        value={requestType}
        onChange={(e) => setRequestType(e.target.value)}>
        <option value="incoming">
          {" "}
          {userData &&
            userData.inFriendRequest &&
            userData.inFriendRequest.length}
          &nbsp; Incoming Requests
        </option>
        <option value="outgoing">
          {" "}
          {userData &&
            userData.outFriendRequest &&
            userData.outFriendRequest.length}
          &nbsp; Outgoing Requests
        </option>
      </select>
      <BoxUi style={{ width: 700 }}>
        {userData ||
        userData.inFriendRequest.length !== 0 ||
        userData.outFriendRequest.length !== 0 ? (
          <div
            style={{
              width: "100%",
              marginBottom: 10,
              overflowY: "auto",
              maxHeight: "400px",
            }}>
            {requestType === "incoming" ? (
              <>
                {" "}
                {userData.inFriendRequest?.map((friends, index) => (
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
                          onClick={(e) => handleRemoveRequest(friends, e)}>
                          Remove
                        </Button>
                      </L.RequestsHandlers>
                    </Item>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {" "}
                {userData.outFriendRequest?.map((friends, index) => (
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
                      <L.RequestsHandlers style={{ justifyContent: "center" }}>
                        <Button
                          onClick={(e) => handleRemoveOutRequest(friends, e)}>
                          Remove
                        </Button>
                      </L.RequestsHandlers>
                    </Item>
                  </Link>
                ))}
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </BoxUi>
    </L.PageContainer>
  );
};

export default Requests;
