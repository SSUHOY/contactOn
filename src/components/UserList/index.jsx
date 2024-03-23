import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import {
  UserAge,
  UserCard,
  UserDescription,
  UserImageBlock,
  UserImg,
  UserInformation,
  UserName,
} from "./userList.styles";
import { TeamOutlined, UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import userStore from "../../store/users";

const UserList = ({ users }) => {

  // const handleAddToFriends = () => {
  //   const authUser = JSON.parse(localStorage.getItem("authorizedUser"));
  //   userStore.addFriend(authUser?.id, user?.id);
  //   setUserIsYourFriend(true);
  // };

  return (
    <>
      <Row gutter={[16, 24]}>
        {users.map((user) => (
          <Col className="gutter-row" span={6} key={user.id}>
            <Link to={`/users/${user.id}`}>
              <UserCard>
                <UserImageBlock>
                  {user.photo ? (
                    <UserImg src={user.photo} alt="Фотография" />
                  ) : (
                    <p style={{ color: "#9F9F9F" }}>No photo</p>
                  )}
                </UserImageBlock>
                <UserInformation>
                  <UserName>{user.name}</UserName>
                  <UserAge>
                    <span style={{ color: " #9F9F9F", fontSize: 16 }}>
                      age:
                    </span>
                    &nbsp;
                    {user.age ? user.age : "-"}
                  </UserAge>
                  <UserDescription>
                    <p>{user.description}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        rowGap: 10,
                      }}>
                      <p>
                        {" "}
                        <TeamOutlined /> Friends: {user.friends.length}
                      </p>
                      {userStore.isAuth ? (
                        <Button>
                          <UserAddOutlined style={{ color: "white" }} />
                          to friends
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </UserDescription>
                </UserInformation>
              </UserCard>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default UserList;
