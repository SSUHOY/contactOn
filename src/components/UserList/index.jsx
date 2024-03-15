import React from "react";
import { Col, Row } from "antd";
import { MockedUsersData } from "../MockedData/index";
import { UserCard, UserImg, UserInformation } from "./userList.styles";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <>
      <Row gutter={[16, 24]}>
        {MockedUsersData.map((user) => (
          <Col className="gutter-row" span={6} key={user.id}>
            <Link to="/user">
              <UserCard>
                <UserImg src={user.photo} alt="Фотография" />
                <UserInformation>
                  <h3>{user.name}</h3>
                  <p>{user.age}</p>
                  <p>{user.description}</p>
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
