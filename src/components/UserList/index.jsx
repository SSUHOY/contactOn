import React from "react";
import { Col, Row } from "antd";
import { MockedUsersData } from "../MockedData/index";
import { UserCard } from "./userList.styles";

const UserList = () => {
  return (
    <>
      <Row gutter={[16, 24]}>
        {MockedUsersData.map((user) => (
          <Col className="gutter-row" span={6} key={user.id}>
            <UserCard>
              <img src={user.photo} alt="Фотография" />
              <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.description}</p>
              </div>
            </UserCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default UserList;
