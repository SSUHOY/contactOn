import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import {
  UserAge,
  UserCard,
  UserCity,
  UserDescription,
  UserImageBlock,
  UserImg,
  UserInformation,
  UserName,
} from "./userList.styles";
import { TeamOutlined } from "@ant-design/icons";
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
                  <UserCity>
                    <span style={{ color: " #9F9F9F", fontSize: 16 }}>
                      city:
                    </span>
                    &nbsp;
                    {user.city ? user.city : "-"}
                  </UserCity>
                  <UserDescription>
                    <p>{user.description}</p>
                  
                  </UserDescription>
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
                    </div>
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
