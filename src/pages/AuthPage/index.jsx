/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { AuthPageContainer } from "./authPage.styles";
import { useNavigate } from "react-router-dom";
import { MockedUsersData } from "../../components/MockedData";

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
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  const repeatPasswordHandler = (e) => {
    setRepeatedPassword(e.target.value);
    setError(null);
    if (!e.target.value) {
      setIsAuthLoading(true);
    } else {
      setIsAuthLoading(false);
    }
  };

  const submitHandlerRegistration = (event) => {
    if (
      userData.email !== "" &&
      userData.password !== "" &&
      userData.password === repeatedPassword
    ) {
      localStorage.setItem("userData", JSON.stringify(userData));
      const newUser = {
        id: MockedUsersData.length + 1,
        name: userData.name,
        email: userData.email,
      };
      MockedUsersData.push(newUser);
      console.log("Регистрация прошла успешно");
    } else {
      setError("Ошибка авторизации");
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      navigate("/", { replace: true });
    }
  }, [isAuthLoading]);

  return (
    <AuthPageContainer>
      {isLoginMode ? (
        <>
          <Form
            {...layout}
            name="nest-messages"
            style={{
              maxWidth: 600,
              width: 380,
              border: "1px solid #373C3F",
              borderRadius: 10,
              padding: 20,
            }}
            validateMessages={validateMessages}>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true, type: "email" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Пароль"
              rules={[{ required: true, type: "password" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
              style={{ display: "flex", textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
              <Button htmlType="submit" onClick={() => setIsLoginMode(false)}>
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : (
        <>
          <Form
            {...layout}
            name="nest-messages"
            style={{
              maxWidth: 600,
              width: 380,
              border: "1px solid #373C3F",
              borderRadius: 10,
              padding: 20,
            }}
            validateMessages={validateMessages}>
            <Form.Item
              name={["user", "name"]}
              label="Имя"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              rules={[{ required: true, type: "text" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              rules={[{ required: true, type: "email" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Пароль"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              rules={[{ required: true, type: "password" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "repeat-password"]}
              label="Повторите пароль"
              onChange={(e) => repeatPasswordHandler(e)}
              rules={[{ required: true, type: "password" }]}>
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
              style={{ display: "flex", textAlign: "center" }}>
              <Button htmlType="submit" onClick={submitHandlerRegistration}>
                Зарегистрироваться
              </Button>
              <Button htmlType="submit" onClick={() => setIsLoginMode(true)}>
                Назад
              </Button>
            </Form.Item>
            {error}
          </Form>
        </>
      )}
    </AuthPageContainer>
  );
};

export default AuthPage;
