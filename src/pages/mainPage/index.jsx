import { Layout, Breadcrumb, theme } from "antd";
import React from "react";
import UserList from "../../components/UserList";
import { Container } from "./mainPage.styled";
import Burger from "../../components/BurgerMenu";

const { Header, Content, Footer } = Layout;

const MainPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex" }}>
        <Burger />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ path: "/", title: "Главная" }]}></Breadcrumb>
        <Container
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}>
          <UserList />
        </Container>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default MainPage;
