import React, { useEffect, useMemo, useState } from "react";
import userStore from "../../store/users";
import {
  PageContent,
  ProfileImg,
  ProfileImgContainer,
  StyledInput,
  StyledTextArea,
  UserPageContainer,
  Wrapper,
} from "./userPage.styles";
import { observer } from "mobx-react-lite";
import { Content } from "../../components/Shared/Layout";
import Burger from "../../components/BurgerMenu";
import {
  Breadcrumb,
  Button,
  Flex,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  theme,
} from "antd";
import * as S from "../../components/Shared/Layout/index";
import { Container } from "../../components/Shared/Container";
import TextArea from "antd/es/input/TextArea";

const AuthUserProfile = observer(() => {
  const isAuth = userStore.isAuth;
  const [userAuthData, setAuthUserData] = useState(null);
  console.log("🚀 ~ AuthUserProfile ~ userAuthData:", userAuthData)
  const [loading, setLoading] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (e) => {
    setAuthUserData({ ...userAuthData, [e.target.name]: e.target.value });
  };
  const handlerSubmitUserData = () => {
    localStorage.setItem("authorizedUser", JSON.stringify(userAuthData));
  };

  useEffect(() => {
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
        <PageContent>
          <UserPageContainer>
            <ProfileImgContainer>
              <ProfileImg src="" alt="" />
            </ProfileImgContainer>
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
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Username is required",
                      },
                    ]}>
                    Name:
                    <StyledInput
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
                    <StyledInput placeholder="Your age" />
                  </Form.Item>
                </Space>
              </Form.Item>
              <Form.Item
                style={{
                  marginBottom: 0,
                }}>
                <Space>
                  <Form.Item
                    name="Location"
                    style={{
                      color: "white",
                    }}>
                    Location:
                    <StyledInput placeholder="Location" />
                  </Form.Item>
                  <Form.Item
                    name="Description"
                    style={{
                      display: "flex",
                      color: "white",
                      gap: 25,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}>
                    Short description:
                    <StyledInput placeholder="Short description" />
                  </Form.Item>
                </Space>
              </Form.Item>
              <Form.Item
                name="Interests"
                style={{
                  display: "flex",
                  color: "white",
                }}>
                Interests:
                <StyledTextArea
                  placeholder="Your interests"
                  value={
                    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, possimus id! Sit commodi tempora, perferendis dolorum inventore labore fugiat exercitationem. Maxime ad deserunt unde distinctio cupiditate in ut ipsa harum sapiente. Facilis autem sunt harum quia, quam, animi molestias, error blanditiis porro tempore quos! Fugiat, voluptate incidunt vel ipsam quidem ab provident ex? Vero animi magni asperiores molestias ipsum sed provident. Delectus deserunt vel dignissimos animi totam, aut tempora, cum eligendi cupiditate aliquam et! Nisi laudantium voluptates soluta dolorum! Cumque magnam sunt distinctio quibusdam similique magni natus doloribus laborum possimus maxime reiciendis tempore, quam laudantium eum ipsam ex enim! Vel officia incidunt quos temporibus sed repellat dolorem labore? Tempora maxime esse ex incidunt cupiditate eveniet debitis delectus impedit provident corrupti officiis nisi nemo obcaecati ratione vel adipisci, dolores placeat laudantium! Quos maiores eius numquam eligendi veniam! Cumque, fuga eaque accusantium assumenda inventore ullam minus iure deserunt, repudiandae magnam soluta placeat laudantium repellendus totam alias corrupti sunt voluptas ducimus aliquam. Illum at vel id, natus aut perferendis deserunt delectus praesentium, iure, reiciendis similique odio! Beatae, officia nihil assumenda qui reiciendis perferendis praesentium blanditiis quidem accusantium esse quasi itaque! Dolorum quisquam neque hic maiores odit ullam sequi voluptatibus ut officiis molestiae fuga quibusdam deleniti, rem nulla enim omnis, sed reiciendis eligendi, eos distinctio laborum laudantium. Aliquid error dolores laborum molestias eius illum, aliquam perferendis mollitia quisquam eligendi dolor tempore similique! Dolorem provident hic adipisci molestiae."
                  }
                  style={{ width: 406, resize: "none", height: 100 }}
                />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </UserPageContainer>
        </PageContent>
      )}
    </S.SharedLayout>
  );
});

export default AuthUserProfile;
