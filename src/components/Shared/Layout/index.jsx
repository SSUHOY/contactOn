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

export const UsersUI = styled.div`
  width: 50%;
  height: 50px;
`;
export const UsersEvents = styled.div`
  height: 68px;
  width: 50px;
  display: flex;
  justify-content: space-between;
  color: "white";
`;

export const FiltersBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchAndSortContainer = styled.div`
  width: 500px;
  align-items: center;
`;
