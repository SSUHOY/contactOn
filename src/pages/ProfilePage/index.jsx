import React, { useEffect, useState } from "react";
import userStore from "../../store/users";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Burger from "../../components/BurgerMenu";
import {
  PlusOutlined,
  TeamOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Flex, theme } from "antd";
import * as L from "../../components/Shared/Layout/index";
import * as Shared from "../authPageProfile/userPage.styles";
import * as S from "./userProfilePage.styles";
import TextArea from "antd/es/input/TextArea";
import Logo from "../../components/Shared/Logo";

const UserProfile = observer(() => {
  const [authUserUI, setAuthUserUI] = useState(false);
  const [userIsYourFriend, setUserIsYourFriend] = useState();

  const { id } = useParams();

  const user = userStore.getUserById(Number(id));
  console.log(user);
  const authUser = JSON.parse(localStorage.getItem("authorizedUser"));
  const isAuth = userStore.isAuth;
  // Show UI for authorized user only
  useEffect(() => {
    if (authUser.id === user.id && isAuth) {
      setAuthUserUI(true);
    }
  }, [authUser]);

  const handleAddToFriends = () => {
    const authUser = JSON.parse(localStorage.getItem("authorizedUser"));
    userStore.addFriend(authUser.id, user.id);
    setUserIsYourFriend(true);
  };
  const handleDeleteFromFriends = () => {
    const authUser = JSON.parse(localStorage.getItem("authorizedUser"));
    userStore.deleteFriend(authUser.id, user.id);
    setUserIsYourFriend(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <L.SharedLayout style={{ background: colorBgContainer }}>
      <L.SharedHeader
        style={{
          background: colorBgContainer,
        }}>
        <Burger />
        <Logo />
      </L.SharedHeader>
      <Shared.PageContent>
        <Shared.UserPageContainer>
          <Shared.LeftContentBlock>
            <Shared.ProfileImgContainer>
              {user.photo ? (
                <img
                  src={!user.photo ? "" : user.photo}
                  alt="avatar"
                  style={{
                    width: 350,
                    height: 350,
                    borderRadius: "100%",
                  }}
                />
              ) : (
                <Shared.AvatarAltText>No photo</Shared.AvatarAltText>
              )}
            </Shared.ProfileImgContainer>
            <S.UserFriendsBox>
              <S.UserFriendsCount>
                <TeamOutlined style={{ marginRight: 10 }} />
                {user.name} has {!user.friends ? "" : user.friends.length}{" "}
                {user.friends.length > 1 || user.friends.length === 0
                  ? "friends"
                  : "friend"}
              </S.UserFriendsCount>
              {userIsYourFriend ? (
                <Button
                  style={{ textTransform: "uppercase" }}
                  onClick={handleDeleteFromFriends}>
                  <UserDeleteOutlined style={{ color: "white" }} />
                  Remove {user.name} from friends
                </Button>
              ) : (
                <Button
                  style={{ textTransform: "uppercase" }}
                  onClick={handleAddToFriends}>
                  <PlusOutlined style={{ color: "white" }} />
                  Add {user.name} to friends
                </Button>
              )}
            </S.UserFriendsBox>
          </Shared.LeftContentBlock>
          <Shared.RightContentBlock>
            <S.UserName>{user.name}</S.UserName>
            <S.UserAge>Age: {user.age}</S.UserAge>
            <S.UserLocation>Location: {user.location}</S.UserLocation>
            <br />
            <S.UserContent>
              <S.UserDescriptionTitle>Description:</S.UserDescriptionTitle>
              <table class="form-table">
                <tr>
                  <td>
                    <TextArea
                      id="description"
                      name="description"
                      rows="5"
                      style={{ resize: "none", color: "white" }}
                      value={user.description || ""}
                      readOnly></TextArea>
                  </td>
                </tr>
                <S.UserDescriptionTitle>Interests:</S.UserDescriptionTitle>
                <tr>
                  <td>
                    <TextArea
                      id="interests"
                      name="interests"
                      rows="4"
                      style={{ resize: "none", color: "white" }}
                      value={user.interests || ""}
                      readOnly></TextArea>
                  </td>
                </tr>
              </table>
            </S.UserContent>
          </Shared.RightContentBlock>
        </Shared.UserPageContainer>
      </Shared.PageContent>
    </L.SharedLayout>
  );
});

export default UserProfile;
