import React, { useEffect, useMemo, useState } from "react";
import userStore from "../../store/users";
import { useParams } from "react-router-dom";
import {
  StyledInput,
  StyledTextArea,
  UserPageContainer,
} from "./userPage.styles";
import { observer } from "mobx-react-lite";
import { Content } from "../../components/Shared/Layout";
import Burger from "../../components/BurgerMenu";
import { Breadcrumb, Flex, theme } from "antd";
import * as S from "../../components/Shared/Layout/index";
import { Container } from "../MainPage/mainPage.styled";

const AuthUserProfile = observer(() => {
  const isAuth = userStore.isAuth;
  const [userAuthData, setAuthUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  useEffect(() => {
    // setLoading(true);
    const authProfileUserData = JSON.parse(
      localStorage.getItem("authorizedUser")
    );
    setAuthUserData(authProfileUserData);
    setLoading(false);
  }, [isAuth]);

  return (
    <S.SharedLayout style={{ background: colorBgContainer }}>
      <S.SharedHeader
        style={{
          background: colorBgContainer,
        }}>
        <Burger />
      </S.SharedHeader>
      {loading ? (
        ""
      ) : (
        <Content
          style={{
            padding: "0 48px",
            display: "flex",
            flexDirection: "column",
          }}>
          <Container
            style={{
              background: colorBgContainer,
            }}>
            <Breadcrumb
              style={{ margin: "16px 0" }}
              items={
                isAuth
                  ? [{ title: `${userAuthData.name}'s user page` }]
                  : [{ title: `Your profile` }]
              }></Breadcrumb>
            <UserPageContainer>
              <div>{userAuthData.name}</div>
              <Flex vertical gap={32}>
                <StyledInput
                  showCount
                  maxLength={15}
                  onChange={onChange}
                  value={userAuthData.name}
                />
                <StyledInput onChange={onChange} value={userAuthData.age} />
                <StyledTextArea
                  showCount
                  maxLength={100}
                  value={userAuthData.location}
                  onChange={onChange}
                  placeholder="can resize"
                />
                <StyledTextArea
                  showCount
                  maxLength={100}
                  onChange={onChange}
                  value={userAuthData.interests}
                  placeholder="disable resize"
                  style={{ height: 120 }}
                />
                <StyledTextArea
                  showCount
                  maxLength={100}
                  onChange={onChange}
                  value={userAuthData.description}
                  placeholder="disable resize"
                  style={{ height: 120 }}
                />
              </Flex>
            </UserPageContainer>
          </Container>
        </Content>
      )}
    </S.SharedLayout>
  );
});

export default AuthUserProfile;
