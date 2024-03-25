import React, { useEffect, useState } from "react";
import userStore from "../../store/users";
import * as S from "./userPage.styles";
import { observer } from "mobx-react-lite";
import Burger from "../../components/BurgerMenu";
import {
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Form, Space, App, theme } from "antd";
import * as L from "../../components/Shared/Layout/index";
import Logo from "../../components/Shared/Logo";
import DropDown from "../../components/Dropdown";
import UploadPhotos from "../../components/UploadPhotos";
import { FileImageOutlined } from "@ant-design/icons";
import { MailOutlined, TeamOutlined } from "@ant-design/icons";
import AuthUserPhotoCarousel from "../../components/PhotoCarousel/authUserPhoto";

const AuthUserProfile = observer(() => {
  const isAuth = userStore.isAuth;
  const authUser = userStore.getAuthorizedUser();
  const [userAuthData, setAuthUserData] = useState([]);
  const [newInterest, setNewInterest] = useState(null);
  const [isSave, setIsSave] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { modal } = App.useApp();

  const onChange = (e) => {
    setIsSave(false);
    setAuthUserData({ ...userAuthData, [e.target.name]: e.target.value });
  };
  const onChangeGenderFromSelect = (e) => {
    setIsSave(false);
    setAuthUserData({ ...userAuthData, gender: e });
  };
  const handlerSubmitUserData = () => {
    userStore.saveNewUserData(userAuthData);
    setIsSave(true);
  };
  const getBase64 = (img, callback) => {
    setIsSave(false);
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      modal.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      modal.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setImgLoading(false);
      setImageUrl(url);
      setAuthUserData({ ...userAuthData, photo: url });
    });
  };
  const handleDeleteAvatar = () => {
    setImageUrl("");
    setAuthUserData({ ...userAuthData, photo: "" });
  };

  const addInterest = () => {
    if (newInterest) {
      setAuthUserData({
        ...userAuthData,
        interests: [...userAuthData.interests, newInterest],
      });
      setNewInterest("");
      setIsSave(false);
    } else {
      modal.error("type text");
    }
  };

  const handleInputChange = (e) => {
    setNewInterest(e.target.value);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button">
      {imgLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}>
        Upload Avatar
      </div>
    </button>
  );

  useEffect(() => {
    const authProfileUserData = JSON.parse(
      localStorage.getItem("authorizedUser")
    );
    setAuthUserData(authProfileUserData);
    setIsLoading(false);
  }, [isAuth]);

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
      {isLoading ? (
        ""
      ) : (
        <S.PageContent>
          <S.UserPageContainer>
            <S.LeftContentBlock>
              <S.ProfileImgContainer>
                <S.ImgUploadWrapper
                  name="photo"
                  listType="picture-circle"
                  className="avatar-uploader"
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}>
                  {userAuthData.photo ? (
                    <img
                      src={userAuthData?.photo ? userAuthData?.photo : imageUrl}
                      alt="avatar"
                      style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </S.ImgUploadWrapper>
                {userAuthData.photo ? (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: 8,
                      color: "white",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={handleDeleteAvatar}>
                    Delete Avatar
                    <DeleteOutlined />
                  </div>
                ) : (
                  ""
                )}
              </S.ProfileImgContainer>
              <div
                style={{
                  textAlign: "center",
                  marginTop: 30,
                  color: "white",
                  marginBottom: 10,
                }}>
                <TeamOutlined />
                <span>Friends: {authUser.friends.length}</span> <br />
                <MailOutlined />{" "}
                <span>Messages: {authUser.messages.length}</span>
                <br />@ <span>Email: {authUser.email}</span>
              </div>
            </S.LeftContentBlock>
            <S.ContentBlock>
              <Form
                wrapperCol={{
                  span: 18,
                }}>
                <Form.Item>
                  <Space>
                    <Form.Item
                      style={{
                        marginBottom: 0,
                        color: "white",
                      }}>
                      Name:
                      <S.StyledInput
                        name="name"
                        value={userAuthData?.name || ""}
                        onChange={onChange}
                        style={{
                          marginBottom: 0,
                        }}
                        placeholder="Your name"
                      />
                    </Form.Item>
                    <Form.Item
                      style={{
                        marginBottom: 0,
                        color: "white",
                      }}>
                      Age:
                      <S.StyledInput
                        name="age"
                        placeholder="Your age"
                        value={userAuthData?.age || ""}
                        onChange={onChange}
                      />
                    </Form.Item>
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Form.Item
                      style={{
                        color: "white",
                      }}>
                      City:
                      <S.StyledInput
                        name="city"
                        placeholder="City"
                        style={{
                          marginBottom: 0,
                        }}
                        value={userAuthData?.city || ""}
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      style={{
                        marginTop: -10,
                        color: "white",
                      }}>
                      Gender:
                      <S.StyledSelect
                        onChange={onChangeGenderFromSelect}
                        defaultValue={userAuthData.gender === "Male" && "Male"}
                        placeholder="Select a gender"
                        optionFilterProp="children"
                        options={[
                          {
                            value: "male",
                            label: "Male",
                          },
                          {
                            value: "female",
                            label: "Female",
                          },
                          {
                            value: "Not mentioned",
                            label: "Not mentioned",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Space>
                </Form.Item>
                <Space>
                  <Form.Item
                    style={{
                      display: "flex",
                      color: "white",
                    }}>
                    Description:
                    <S.StyledTextArea
                      placeholder="Profile description"
                      value={userAuthData?.description || ""}
                      onChange={onChange}
                      style={{ width: 410, resize: "none", height: 80 }}
                      name="description"
                    />
                  </Form.Item>
                </Space>
                <Space>
                  <Form.Item
                    style={{
                      display: "flex",
                      color: "white",
                      alignItems: "center",
                    }}>
                    Interests:
                    <S.StyledTextArea
                      value={userAuthData?.interests || ""}
                      readOnly
                      style={{ width: 410, resize: "none" }}
                    />
                  </Form.Item>
                </Space>
                <Space>
                  <S.StyledInput
                    value={newInterest}
                    placeholder="Add new interest"
                    onChange={handleInputChange}
                    name="interests"
                  />
                  <S.StyledButton
                    onClick={addInterest}
                    style={{ height: 40, margin: 4 }}>
                    Add
                  </S.StyledButton>
                </Space>
              </Form>
              <S.StyledButton
                type="primary"
                style={{
                  width: 200,
                  marginTop: 8,
                  position: "relative",
                }}
                htmlType="submit"
                disabled={isSave}
                onClick={handlerSubmitUserData}>
                {!isSave ? "Save" : "Saved!"}
              </S.StyledButton>
            </S.ContentBlock>
          </S.UserPageContainer>
          <S.UserUploadPhotos style={{ width: 260 }}>
            <div
              style={{
                textAlign: "center",
                color: "white",
                paddingBottom: 10,
              }}>
              <FileImageOutlined />
              <span>Upload photos to photo gallery</span>
            </div>
            <UploadPhotos />
          </S.UserUploadPhotos>
          <S.UserUploadPhotos>
            <div
              style={{
                textAlign: "center",
                color: "white",
                paddingBottom: 10,
              }}>
              <FileImageOutlined />
              <span>Your current photo gallery</span>
            </div>
            <AuthUserPhotoCarousel />
          </S.UserUploadPhotos>
        </S.PageContent>
      )}
    </L.SharedLayout>
  );
});

export default AuthUserProfile;
