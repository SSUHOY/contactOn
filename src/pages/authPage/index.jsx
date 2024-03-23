/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import * as S from "./authPage.styles";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/users";

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
      setError(
        "Ошибка авторизации, проверьте правильность введенных вами данных"
      );
      setIsLoading(false);
    }
    event.preventDefault();
  };

  const submitHandlerRegistration = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const emailExists = userList.some((user) => user.email === userData.email);
    if (!emailExists && userData.password === repeatedPassword) {
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
        receivedMessages: [],
        unReadMessages: [],
        addToFriendsEvents: [],
        messagesEvents: [],
        description: "",
        photo: "",
      };
      localStorage.setItem("authorizedUser", JSON.stringify(newUser));
      userStore.addUser(newUser);
      setIsLoading(false);
      userStore.theUserIsAuth(true);
      navigate(`/profile`, { replace: true });
    } else if (emailExists) {
      setError("Ошибка регистрации, данный пользователь уже есть в системе");
      console.log("Ошибка");
    } else {
      setError("Ошибка регистрации, пароли не совпадают");
    }
  };

  const handleSetIsLoginMode = (e) => {
    setIsLoginMode(false);
    setError("");
  };

  useEffect(() => {
    userStore.saveUsersToLocalStorage();
    setUserList(userStore.users);
  }, [userData, isLoading]);

  return (
    <S.AuthPageContainer>
      {isLoginMode ? (
        <>
          <S.StyledForm
            {...layout}
            name="nest-messages"
            validateMessages={validateMessages}>
            <S.StyledFormItem
              name={["user", "email"]}
              label={<span style={{ color: "white" }}>Email:</span>}
              rules={[{ required: true, type: "email" }]}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }>
              <S.StyledInput type="email" placeholder="enter email" />
            </S.StyledFormItem>
            <S.StyledFormItem
              name={["user", "password"]}
              label={<span style={{ color: "white" }}>Password:</span>}
              rules={[{ required: true, type: "password" }]}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }>
              <S.StyledInputPassword
                type="password"
                placeholder="enter password"
              />
            </S.StyledFormItem>
            <S.StyledButtonBox>
              <S.StyledButton
                type="primary"
                htmlType="submit"
                onClick={submitHandlerLogin}>
                Войти
              </S.StyledButton>
              <S.StyledButton htmlType="submit" onClick={handleSetIsLoginMode}>
                Зарегистрироваться
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
              name={["user", "name"]}
              label={<span style={{ color: "white" }}>Name:</span>}
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              rules={[{ required: true, type: "text" }]}>
              <S.StyledInput type="text" placeholder="Enter your name" />
            </S.StyledFormItem>
            <S.StyledFormItem
              name={["user", "email"]}
              label={<span style={{ color: "white" }}>Email:</span>}
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              rules={[{ required: true, type: "email" }]}>
              <S.StyledInput type="email" placeholder="Enter your Email" />
            </S.StyledFormItem>
            <S.StyledFormItem
              name={["user", "password"]}
              label={<span style={{ color: "white" }}>Password:</span>}
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              rules={[{ required: true, type: "password" }]}>
              <S.StyledInputPassword
                type="password"
                placeholder="Enter your password"
              />
            </S.StyledFormItem>
            <S.StyledFormItem
              name={["user", "repeat-password"]}
              label={<span style={{ color: "white" }}>Repeat password:</span>}
              onChange={(e) => repeatPasswordHandler(e)}
              rules={[{ required: true, type: "password" }]}>
              <S.StyledInputPassword
                type="password"
                placeholder="Repeat password"
              />
            </S.StyledFormItem>
            <S.StyledButtonBox>
              <S.StyledButton
                type="primary"
                htmlType="submit"
                onClick={submitHandlerRegistration}>
                Зарегистрироваться
              </S.StyledButton>
              <S.StyledButton
                htmlType="submit"
                onClick={() => setIsLoginMode(true)}>
                Назад
              </S.StyledButton>
            </S.StyledButtonBox>
            <S.Error>{error}</S.Error>
          </S.StyledForm>
        </>
      )}
    </S.AuthPageContainer>
  );
};

export default AuthPage;
