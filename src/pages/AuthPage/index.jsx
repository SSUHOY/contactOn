import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { AuthPageContainer } from "./authPage.styles";

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
  return (
    <AuthPageContainer>
      <Form
        {...layout}
        name="nest-messages"
        style={{
          maxWidth: 600,
          width: 380,
          border: "1px solid #373C3F",
          borderRadius: 10,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        validateMessages={validateMessages}>
        <Form.Item
          name={["user", "Имя"]}
          label="Имя"
          rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "Возраст"]}
          label="Возраст"
          rules={[{ type: "number", min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "О тебе"]} label="О тебе">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </AuthPageContainer>
  );
};

export default AuthPage;
