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
            colorPrimary: "#EC3223",
            borderRadius: 2,
            colorBgContainer: "#E6E3E4",
          },
        }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
