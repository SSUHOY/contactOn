import { Layout, theme } from "antd";
import styled from "styled-components";

export const { Header, Content, Footer } = Layout;

export const SharedLayout = styled(Layout)`
  height: 100vh;
  width: 100%;
`;

export const SharedHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`;
