/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import * as S from "./authPage.styles";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/users";
import { message, theme } from "antd";
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

const AuthPage = () => {
  const [error, setError] = useState("");
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
      message.error(
        "Error! User doesn't exist or the information you entered isn't correct"
      );
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
      message.error("Email already exists");
    } else if (
      userData.name === "" ||
      userData.password === "" ||
      userData.email === "" ||
      repeatedPassword === "" ||
      repeatedPassword !== userData.password
    ) {
      message.error("Registration error");
    }
  };

  const handleSetIsLoginMode = (e) => {
    setIsLoginMode(false);
    setError("");
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    userStore.saveUsersToLocalStorage();
    setUserList(userStore.users);
  }, [userData, isLoading]);

  return (
    <>
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
                  label={<span style={{ color: "white" }}>Email:</span>}
                  rules={[{ required: true, type: "email" }]}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }>
                  <S.StyledInput type="email" placeholder="enter email" />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["password"]}
                  label={<span style={{ color: "white" }}>Password:</span>}
                  rules={[{ required: true, type: "password" }]}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }>
                  <S.StyledInputPassword
                    autocomplete="on"
                    type="password"
                    placeholder="enter password"
                  />
                </S.StyledFormItem>
                <S.StyledButtonBox>
                  <S.StyledButton
                    type="primary"
                    htmlType="submit"
                    onClick={submitHandlerLogin}>
                    Log in
                  </S.StyledButton>
                  <S.StyledButton
                    htmlType="submit"
                    onClick={handleSetIsLoginMode}>
                    Register
                  </S.StyledButton>
                </S.StyledButtonBox>
                <S.Error>{error}</S.Error>
              </S.StyledForm>
            </>
          ) : (
            <>
              <S.StyledForm
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}>
                <S.StyledFormItem
                  name={["name"]}
                  label={<span style={{ color: "white" }}>Name:</span>}
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  rules={[{ required: true, type: "text" }]}>
                  <S.StyledInput type="text" placeholder="Enter your name" />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["email"]}
                  label={<span style={{ color: "white" }}>Email:</span>}
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  rules={[{ required: true, type: "email" }]}>
                  <S.StyledInput type="email" placeholder="Enter your Email" />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["password"]}
                  autocomplete="on"
                  label={<span style={{ color: "white" }}>Password:</span>}
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  rules={[{ required: true, type: "password" }]}>
                  <S.StyledInputPassword
                    autocomplete="on"
                    type="password"
                    placeholder="Enter your password"
                  />
                </S.StyledFormItem>
                <S.StyledFormItem
                  name={["user", "repeat-password"]}
                  label={
                    <span style={{ color: "white" }}>Repeat password:</span>
                  }
                  onChange={(e) => repeatPasswordHandler(e)}
                  rules={[{ required: true, type: "password" }]}>
                  <S.StyledInputPassword
                    autocomplete="on"
                    type="password"
                    placeholder="Repeat password"
                  />
                </S.StyledFormItem>
                <S.StyledButtonBox>
                  <S.StyledButton
                    type="primary"
                    htmlType="submit"
                    onClick={submitHandlerRegistration}>
                    Register
                  </S.StyledButton>
                  <S.StyledButton
                    htmlType="submit"
                    onClick={() => setIsLoginMode(true)}>
                    Back
                  </S.StyledButton>
                </S.StyledButtonBox>
              </S.StyledForm>
            </>
          )}
        </S.AuthPageContainer>
      </L.SharedLayout>
    </>
  );
};

export default AuthPage;
