import React from "react";
import { Link } from "react-router-dom";
import userStore from "../../store/users";
import * as S from "../Shared/Layout/index";
import { MailOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

const Messages = () => {
  const authUser = userStore.getAuthorizedUser();

  const clearEvents = () => {
    userStore.clearMessagesEvents(authUser.id);
  };

  const items = [
    {
      key: "1",
      label: (
        <>
          <p>You have {authUser.messagesEvents.length} new messages</p>
          {authUser.messagesEvents.length !== 0 ? (
            <Link to={"/messages"}>
              <u>Click to show messages</u>
            </Link>
          ) : (
            ""
          )}
        </>
      ),
    },
  ];

  return (
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
          <MailOutlined
            style={{
              color: "#8774E1",
              fontSize: "28px",
              marginLeft: 5,
            }}
          />
        </Dropdown>
      </button>
      {authUser?.messagesEvents.length !== 0 ? (
        <S.MessageInBoxEvents>
          <div style={{ width: 50, textAlign: "center" }}>
            {authUser?.messagesEvents.length}
          </div>
        </S.MessageInBoxEvents>
      ) : (
        ""
      )}
    </div>
  );
};

export default Messages;
