import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#8774E1",
            borderRadius: 2,
            colorBgContainer: "#101010",
          },
        }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
