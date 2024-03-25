import React from "react";
import { Dropdown } from "antd";
import * as S from "../Shared/Layout/index";

import userStore from "../../store/users";

import { BellOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Messages from "./messagesEvents";

const DropDown = () => {
  const authUser = userStore.getAuthorizedUser();
  const isAuth = userStore.isAuth;

  const clearEvents = () => {
    userStore.clearFriendsEvents(authUser.id);
  };

  const items = [
    {
      key: "1",
      label: (
        <>
          {isAuth ? (
            <>
              {" "}
              <p>You have {authUser.addToFriendsEvents.length} new friends</p>
              {authUser.addToFriendsEvents.length !== 0 ? (
                <Link to={"/friends"}>
                  <u>Click to show friends</u>
                </Link>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </>
      ),
    },
  ];

  return (
    <S.UsersEvents>
      <div>
        <button
          onClick={clearEvents}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            style={{ textAlign: "center" }}>
            <BellOutlined
              style={{
                color: "#8774E1",
                fontSize: "28px",
                marginRight: 20,
              }}
            />
          </Dropdown>
          {authUser?.addToFriendsEvents.length !== 0 ? (
            <S.AddToFriendsEvents>
              <div style={{ width: 50, textAlign: "center" }}>
                {authUser?.addToFriendsEvents.length}
              </div>
            </S.AddToFriendsEvents>
          ) : (
            ""
          )}
        </button>
      </div>
      <Messages />
    </S.UsersEvents>
  );
};

export default DropDown;
