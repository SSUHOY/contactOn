import React, { useEffect, useState } from "react";
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

const UserProfile = observer(() => {
  const isAuth = userStore.isAuth;
  const { id } = useParams();

  const user = userStore.getUserById(Number(id));
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  // useEffect(() => {
  //   if (isAuth) {
  //     const authUserData = localStorage.getItem("authorizedUser");
  //     console.log(authUserData);
  //     setUserIsAuth(true);
  //   } else {
  //     setUserIsAuth(false);
  //   }
  // });

  return (
    <S.SharedLayout style={{ background: colorBgContainer }}>
      <S.SharedHeader
        style={{
          background: colorBgContainer,
        }}>
        <Burger />
      </S.SharedHeader>
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
                ? [{ title: `${user.name}'s user page` }]
                : [{ title: `Your profile` }]
            }></Breadcrumb>
          <UserPageContainer>
            <Flex vertical gap={32}>
              <StyledInput
                showCount
                maxLength={15}
                onChange={onChange}
                value={user.name}
              />
              <StyledInput onChange={onChange} value={user.age} />
              <StyledTextArea
                showCount
                maxLength={100}
                value={user.location}
                onChange={onChange}
                placeholder="can resize"
              />
              <StyledTextArea
                showCount
                maxLength={100}
                onChange={onChange}
                value={user.interests}
                placeholder="disable resize"
                style={{ height: 120 }}
              />
              <StyledTextArea
                showCount
                maxLength={100}
                onChange={onChange}
                value={user.description}
                placeholder="disable resize"
                style={{ height: 120 }}
              />
            </Flex>
          </UserPageContainer>
        </Container>
      </Content>
    </S.SharedLayout>
  );
});

export default UserProfile;
