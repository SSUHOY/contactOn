/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import * as S from "./authPage.styles";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/users";
import { Button, Input, message, theme } from "antd";
import * as L from "../../components/Shared/Layout/index";
import Burger from "../../components/BurgerMenu";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Auth = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const repeatPasswordHandler = (e) => {
    setRepeatedPassword(e.target.value);
  };

  const submitHandlerLogin = (event) => {
    setIsLoading(true);
    const allInputsIsCorrect = userList.some(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );
    if (allInputsIsCorrect) {
      const usersFromLocalStorage = JSON.parse(localStorage.getItem("users"));
      const authUser = usersFromLocalStorage.find(function (user) {
        return (
          user.email === userData.email && user.password === userData.password
        );
      });
      userStore.theUserIsAuth(true);
      localStorage.setItem("authorizedUser", JSON.stringify(authUser));
      navigate(`/profile`, { replace: true });
      setIsLoading(false);
    } else {
      messageApi.open({
        type: "error",
        content:
          "Error! User doesn't exist or the information you entered isn't correct",
      });
      setIsLoading(false);
    }
    event.preventDefault();
  };

  const submitHandlerRegistration = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const emailExists = userList.some((user) => user.email === userData.email);
    if (
      !emailExists &&
      userData.password === repeatedPassword &&
      userData.name !== "" &&
      userData.password !== ""
    ) {
      const newUser = {
        id: userList.length + 1,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        age: "",
        gender: "",
        location: "",
        interests: [],
        friends: [],
        messages: [],
        chats: [],
        receivedMessages: [],
        addToFriendsEvents: [],
        messagesEvents: [],
        photoGallery: [],
        description: "",
        photo: "",
      };
      localStorage.setItem("authorizedUser", JSON.stringify(newUser));
      userStore.addUser(newUser);
      setIsLoading(false);
      userStore.theUserIsAuth(true);
      navigate(`/profile`, { replace: true });
    } else if (
      emailExists &&
      userData.name !== "" &&
      userData.password !== "" &&
      repeatedPassword !== "" &&
      repeatedPassword === userData.password
    ) {
      messageApi.open({
        type: "error",
        content: "Email already exists",
      });
    } else if (
      userData.name === "" ||
      userData.password === "" ||
      userData.email === "" ||
      repeatedPassword === "" ||
      repeatedPassword !== userData.password
    ) {
      messageApi.open({
        type: "error",
        content: "Registration error",
      });
    }
  };

  const handleSetIsLoginMode = () => {
    setIsLoginMode(false);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    userStore.saveUsersToLocalStorage();
    setUserList(userStore.users);
    setIsLoading(false);
  }, [userData, isLoading]);

  return (
    <>
      {contextHolder}
      <L.SharedLayout style={{ background: colorBgContainer }}>
        <L.SharedHeader style={{ background: colorBgContainer }}>
          <Burger />
        </L.SharedHeader>
        <S.AuthPageContainer>
          {isLoginMode ? (
            <>
              <S.StyledForm
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}>
                <S.StyledFormItem
                  name={["email"]}
                  label={<span style={{ color: "white" }}>Email</span>}
                  rules={[{ required: true, type: "email" }]}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }>
                  <Input type="email" placeholder="enter email" />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["password"]}
                  label={<span style={{ color: "white" }}>Password</span>}
                  rules={[
                    {
                      required: true,
                      type: "password",
                      message: "Please, enter password",
                    },
                  ]}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }>
                  <Input
                    autoComplete="on"
                    type="password"
                    placeholder="enter password"
                  />
                </S.StyledFormItem>
                <S.StyledButtonBox>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={submitHandlerLogin}
                    disabled={isLoading}>
                    Log in
                  </Button>
                  <br />
                  <Button
                    htmlType="submit"
                    onClick={handleSetIsLoginMode}
                    disabled={isLoading}>
                    Register
                  </Button>
                </S.StyledButtonBox>
              </S.StyledForm>
            </>
          ) : (
            <>
              <S.StyledForm
                style={{ width: 410 }}
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}>
                <S.StyledFormItem
                  name={["name"]}
                  label={<span style={{ color: "white" }}>Name</span>}
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  rules={[{ required: true, type: "text" }]}>
                  <Input type="text" placeholder="Enter your name" />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["email"]}
                  label={<span style={{ color: "white" }}>Email</span>}
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  rules={[{ required: true, type: "email" }]}>
                  <Input type="email" placeholder="Enter your Email" />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["password"]}
                  autoComplete="on"
                  label={<span style={{ color: "white" }}>Password</span>}
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  rules={[{ required: true, type: "password" }]}>
                  <Input
                    autoComplete="on"
                    type="password"
                    placeholder="Enter your password"
                    rules={[
                      {
                        required: true,
                        message: "Please, enter password",
                      },
                    ]}
                  />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["user", "repeat-password"]}
                  label={
                    <span style={{ color: "white" }}>Repeat password</span>
                  }
                  onChange={(e) => repeatPasswordHandler(e)}
                  rules={[{ required: true, type: "password" }]}>
                  <Input
                    autoComplete="on"
                    type="password"
                    placeholder="Repeat password"
                  />
                </S.StyledFormItem>
                <S.StyledButtonBox>
                  <Button
                    disabled={isLoading}
                    type="primary"
                    htmlType="submit"
                    onClick={submitHandlerRegistration}>
                    Register
                  </Button>
                  <br />
                  <Button
                    htmlType="submit"
                    onClick={() => setIsLoginMode(true)}>
                    Back
                  </Button>
                </S.StyledButtonBox>
              </S.StyledForm>
            </>
          )}
        </S.AuthPageContainer>
      </L.SharedLayout>
    </>
  );
};

export default Auth;
