import React, { useEffect, useMemo, useState } from "react";
import { Button, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import userStore from "../../store/users";

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
  const [collapsed, setCollapsed] = useState(false);
  const isAuth = userStore.isAuth;
  const authUser = userStore.getAuthorizedUser();

  const navigate = useNavigate();

  const handleLogOutUser = (e) => {
    if (e.key === "5") {
      userStore.handleLogOutUser();
      navigate("/");
    }
    if (e.key === "6") {
      window.location.reload();
      userStore.clearStorage();
    }
    toggleCollapsed();
  };

  const items = [
    isAuth && authUser ? getItem(`${authUser?.name}`) : "",
    getItem(
      "Home",
      "1",
      <Link to="/">
        <HomeOutlined />
      </Link>
    ),
    getItem(
      isAuth ? "My profile" : "Log in",
      "2",
      <Link to={isAuth ? `/profile` : "/login"}>
        <UserOutlined />
      </Link>
    ),
    isAuth
      ? getItem(
          "Friends",
          "3",
          <Link to={"/friends"}>
            <TeamOutlined />
          </Link>
        )
      : "",
    isAuth
      ? getItem(
          "Chats",
          "4",
          <Link to={"/messages"}>
            <MailOutlined />
          </Link>
        )
      : "",
    isAuth
      ? getItem(
          "Log out",
          "5",
          <Link to={"/login"}>
            <LogoutOutlined />
          </Link>
        )
      : "",
    getItem(
      "Clear Storage",
      "6",

      <UserOutlined />
    ),
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
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
        theme="dark"
        items={items}
        mode="inline"
        style={{
          display: collapsed ? "block" : "none",
          zIndex: 1000,
          position: "absolute",
          textAlign: "center",
          borderRadius: "20px",
          width: 180,
        }}></Menu>
    </div>
  );
};
export default Burger;
