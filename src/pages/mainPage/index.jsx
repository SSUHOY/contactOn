import { Layout, Menu, Breadcrumb, theme } from "antd";
import React from "react";
import UserList from "../../components/UserList";
import { Container } from "./mainPage.styled";

const { Header, Content, Footer } = Layout;

const MainPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}></Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ path: "/", title: "Home" }]}></Breadcrumb>
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
