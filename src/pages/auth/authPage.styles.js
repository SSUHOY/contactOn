import { Input, Form, Button } from "antd";
import styled from "styled-components";

export const AuthPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #101010;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  max-width: 600px;
  width: 380px;
  background: #212121;
  border: 1px solid #373c3f;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledFormItem = styled(Form.Item)`
  box-sizing: border-box;
`;


export const StyledButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.p`
  color: coral;
  text-align: center;
`;
