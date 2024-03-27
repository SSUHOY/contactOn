import React, { useEffect } from "react";
import userStore from "../../store/users";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Burger from "../../components/BurgerMenu";
import {
  PlusOutlined,
  TeamOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { Button, theme } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import * as L from "../../components/Shared/Layout/index";
import * as Shared from "../authUserProfile/userPage.styles";
import * as S from "./userProfilePage.styles";
import TextArea from "antd/es/input/TextArea";
import Logo from "../../components/Shared/Logo";
import DropDown from "../../components/Dropdown";
import PhotoCarousel from "../../components/PhotoCarousel";

const UserProfile = observer(() => {
  const { id } = useParams();

  const user = userStore.getUserById(Number(id));
  const authUser = userStore.getAuthorizedUser();
  const alreadyFriends = userStore.alreadyFriends;

  const isAuth = userStore.isAuth;

  const handleAddToFriends = () => {
    userStore.addFriend(authUser?.id, user?.id);
  };
  const handleDeleteFromFriends = () => {
    userStore.deleteFriend(authUser?.id, user?.id);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (isAuth) {
      userStore.isFriends(authUser.id, user);
    }
  }, [user, authUser, isAuth]);

  return (
    <L.SharedLayout style={{ background: colorBgContainer }}>
      <L.SharedHeader
        style={{
          background: colorBgContainer,
        }}>
        <Burger />
        {isAuth ? (
          <L.UsersUI>
            <DropDown />
          </L.UsersUI>
        ) : (
          ""
        )}
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
                    width: 200,
                    height: 200,
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
              {isAuth ? (
                <div>
                  {authUser.id === user.id ? (
                    ""
                  ) : (
                    <div>
                      {alreadyFriends ? (
                        <>
                          <Link to={`/message/${id}`}>
                            <S.UserMessageBox>
                              <Button style={{ borderRadius: 20 }}>
                                Send a message
                              </Button>
                            </S.UserMessageBox>
                          </Link>
                          <Button
                            onClick={handleDeleteFromFriends}
                            style={{ borderRadius: 20 }}>
                            <UserDeleteOutlined style={{ color: "white" }} />
                            Remove {user.name} from friends
                          </Button>
                        </>
                      ) : (
                        <>
                          <Link to={`/message/${id}`}>
                            <S.UserMessageBox>
                              <Button style={{ borderRadius: 20 }}>
                                Send a message
                              </Button>
                            </S.UserMessageBox>
                          </Link>
                          <Button
                            onClick={handleAddToFriends}
                            style={{ borderRadius: 20 }}>
                            <PlusOutlined style={{ color: "white" }} />
                            Add {user.name} to friends
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <p style={{ color: "#9f9f9f" }}>
                    Log in to add friends and write messages
                  </p>
                  <Link to={"/login"}>
                    <Button style={{ borderRadius: 20 }}>Log In</Button>
                  </Link>
                </>
              )}
            </S.UserFriendsBox>
          </Shared.LeftContentBlock>
          <Shared.ContentBlock>
            <S.UserName>{user.name}</S.UserName>
            <S.UserInformation>Age: {user.age}</S.UserInformation>
            <S.UserInformation>City: {user.city}</S.UserInformation>
            <S.UserInformation>Gender: {user.gender}</S.UserInformation>
            <br />
            <S.UserContent>
              <S.UserDescriptionTitle>Description:</S.UserDescriptionTitle>
              <table>
                <tr>
                  <td>
                    <TextArea
                      id="description"
                      name="description"
                      rows="5"
                      style={{
                        resize: "none",
                        color: "white",
                        borderBottomLeftRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                      value={user.description || "no description yet"}
                      readOnly></TextArea>
                  </td>
                </tr>
                <S.UserDescriptionTitle>Interests:</S.UserDescriptionTitle>
                <tr>
                  <td>
                    <TextArea
                      id="interests"
                      name="interests"
                      rows="2"
                      style={{
                        resize: "none",
                        color: "white",
                      }}
                      value={user.interests || "no interests yet"}
                      readOnly></TextArea>
                  </td>
                </tr>
              </table>
            </S.UserContent>
          </Shared.ContentBlock>
        </Shared.UserPageContainer>
        <Shared.RightContentBlock>
          <div
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: 10,
            }}>
            <FileImageOutlined />
            <span>{user.name}'s photo gallery</span>
          </div>
          <PhotoCarousel userID={id} />
        </Shared.RightContentBlock>
      </Shared.PageContent>
    </L.SharedLayout>
  );
});

export default UserProfile;
