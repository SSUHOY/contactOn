import React, { useEffect, useState } from "react";
import { Button, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { handleLogOutUser } from "./helpers";

function getItem(label, key, icon, children, type, onClick) {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick,
  };
}

const Burger = () => {
  const [userIsAuth, setUserIsAuth] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem(
      "Домой",
      "1",
      <Link to="/">
        <HomeOutlined />
      </Link>
    ),
    getItem(
      userIsAuth ? "Мой профиль" : "Войти",
      "2",
      <Link to={userIsAuth ? "/user" : "/login"}>
        <UserOutlined />
      </Link>
    ),
    getItem("Выйти", "3", <LogoutOutlined />),
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserIsAuth(true);
    }
  }, [userIsAuth]);

  return (
    <div
      style={{
        width: 256,
      }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        onClick={handleLogOutUser}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        theme="dark"
        items={items}
        inlineCollapsed={collapsed}
        mode="inline"
        style={{
          display: collapsed ? "none" : "block",
          zIndex: 1000000,
          position: "relative",
          textAlign: "center",
        }}>
      </Menu>
    </div>
  );
};
export default Burger;
