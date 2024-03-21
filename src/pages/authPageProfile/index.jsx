import React, { useEffect, useState } from "react";
import userStore from "../../store/users";
import * as S from "./userPage.styles";
import { observer } from "mobx-react-lite";
import Burger from "../../components/BurgerMenu";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Form, Space, theme } from "antd";
import * as L from "../../components/Shared/Layout/index";

const AuthUserProfile = observer(() => {
  const isAuth = userStore.isAuth;
  const [userAuthData, setAuthUserData] = useState([]);
  console.log(userAuthData);
  const [error, setError] = useState("");
  const [imgLoading, setImgLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e) => {
    setAuthUserData({ ...userAuthData, [e.target.name]: e.target.value });
  };
  const handlerSubmitUserData = () => {
    userStore.saveNewUserData(userAuthData);
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      setError("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      setError("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info, name) => {
    if (info.file.status === "uploading") {
      setImgLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (url) => {
        setImgLoading(false);
        setImageUrl(url);
        setAuthUserData({ ...userAuthData, photo: url });
      });
    }
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
        Upload
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
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}>
                  {userAuthData.photo ? (
                    <img
                      src={userAuthData.photo ? userAuthData.photo : imageUrl}
                      alt="avatar"
                      style={{
                        width: 350,
                        height: 350,
                        borderRadius: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </S.ImgUploadWrapper>
                {error ? <S.Error>{error}</S.Error> : ""}
              </S.ProfileImgContainer>
            </S.LeftContentBlock>
            <S.RightContentBlock>
              <Form
                name="complex-form"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}>
                <Form.Item>
                  <Space>
                    <Form.Item
                      name="name"
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
                      name="year"
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
                <Form.Item
                  style={{
                    marginBottom: 0,
                  }}>
                  <Space>
                    <Form.Item
                      name="location"
                      style={{
                        color: "white",
                      }}>
                      Location:
                      <S.StyledInput
                        name="location"
                        placeholder="Location"
                        value={userAuthData?.location || ""}
                        onChange={onChange}
                      />
                    </Form.Item>
                    <Form.Item
                      name="description"
                      style={{
                        display: "flex",
                        color: "white",
                        gap: 25,
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}>
                      Short description:
                      <S.StyledInput
                        name="description"
                        placeholder="Short description"
                        onChange={onChange}
                        value={userAuthData?.description || ""}
                      />
                    </Form.Item>
                  </Space>
                </Form.Item>
                <Form.Item
                  name="interests"
                  style={{
                    display: "flex",
                    color: "white",
                  }}>
                  Interests:
                  <S.StyledTextArea
                    placeholder="Your interests"
                    value={userAuthData?.interests || ""}
                    onChange={onChange}
                    style={{ width: 406, resize: "none", height: 100 }}
                    name="interests"
                  />
                </Form.Item>
              </Form>
              <Button
                type="primary"
                style={{
                  width: 200,
                  marginTop: 8,
                  position: "relative",
                  right: 66,
                  color: "white",
                }}
                htmlType="submit"
                onClick={handlerSubmitUserData}>
                Submit
              </Button>
            </S.RightContentBlock>
          </S.UserPageContainer>
        </S.PageContent>
      )}
    </L.SharedLayout>
  );
});

export default AuthUserProfile;
