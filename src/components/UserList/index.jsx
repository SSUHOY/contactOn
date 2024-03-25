import React from "react";
import { Col, Row } from "antd";
import {
  UserAge,
  UserCard,
  UserDescription,
  UserImageBlock,
  UserImg,
  UserInformation,
  UserName,
} from "./userList.styles";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
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
