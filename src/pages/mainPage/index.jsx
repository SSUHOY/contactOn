import { Breadcrumb, theme } from "antd";
import React, { useEffect, useState } from "react";
import * as S from "../../components/Shared/Layout/index";
import UserList from "../../components/UserList";
import Burger from "../../components/BurgerMenu";
import { observer } from "mobx-react-lite";
import userStore from "../../store/users";
import { Content } from "../../components/Shared/Layout/index";
import Logo from "../../components/Shared/Logo";
import { Container } from "../../components/Shared/Container";

const MainPage = observer(() => {
  const [userList, setUserList] = useState([]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    userStore.saveUsersToLocalStorage();
    setUserList(userStore.users);
  }, []);

  return (
    <S.SharedLayout style={{ background: colorBgContainer }}>
      <S.SharedHeader style={{ background: colorBgContainer }}>
        <Burger />
        <Logo />
      </S.SharedHeader>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Container
          style={{
            borderRadius: borderRadiusLG,
            background: colorBgContainer,
          }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Home" }]}></Breadcrumb>
          <UserList users={userList} />
        </Container>
      </Content>
    </S.SharedLayout>
  );
});

export default MainPage;
