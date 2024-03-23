import React, { useEffect, useMemo, useState } from "react";
import { Button, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  UserOutlined,
  HomeOutlined,
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

  const navigate = useNavigate();

  const handleLogOutUser = (e) => {
    if (e.key === "3") {
      userStore.theUserIsAuth(false);
      localStorage.clear("authorizedUser");
      toggleCollapsed();
      navigate("/login");
    }
  };

  const items = [
    getItem(
      "Домой",
      "1",
      <Link to="/">
        <HomeOutlined />
      </Link>
    ),
    getItem(
      isAuth ? "Мой профиль" : "Войти",
      "2",
      <Link to={isAuth ? `/profile` : "/login"}>
        <UserOutlined />
      </Link>
    ),
    isAuth ? getItem("Выйти из системы", "3", <LogoutOutlined />) : "",
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
