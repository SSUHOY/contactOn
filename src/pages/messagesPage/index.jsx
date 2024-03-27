import React, { useEffect, useRef, useState } from "react";
import * as L from "../../components/Shared/Layout/index";
import * as S from "./messagesPage.styles";
import { Button, message, theme } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Burger from "../../components/BurgerMenu";
import Logo from "../../components/Shared/Logo";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";
import userStore from "../../store/users";
import DropDown from "../../components/Dropdown";
import { observer } from "mobx-react-lite";

const MessagesInBox = observer(() => {
  const isAuth = userStore.isAuth;

  const [messageContent, setMessageContent] = useState("");
  const [isSend, setIsSend] = useState(false);

  const { id } = useParams();
  const user = userStore.getUserById(Number(id));
  let sender = JSON.parse(localStorage.getItem("authorizedUser")) || [];

  const filteredMessages = user.messages.filter(
    (message) =>
      (message.senderID === user.id && message.receiverID === sender.id) ||
      (message.senderID === sender.id && message.receiverID === user.id)
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleTextAreaChange = (e) => {
    setMessageContent(e.target.value);
    setIsSend(false);
  };

  const handleSendMessage = () => {
    userStore.sendMessage(
      sender.id,
      user.id,
      messageContent,
      sender.name,
      user.name,
      sender.photo,
      user.photo,
      sender.email,
      user.email,
      user.id
    );
    setMessageContent("");
    setIsSend(true);
    success();
  };

  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const updateReceiverMessages = () => {
    const updatedMessages = user.messages.map((message) => {
      if (message.receiverID === sender.id && message.unread) {
        return { ...message, unread: false };
      }
      return message;
    });

    userStore.updateUserMessages(user.id, updatedMessages);
  };

  useEffect(() => {
    updateReceiverMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [isSend]);

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Message successfully  delivered!",
    });
  };

  return (
    <>
      {contextHolder}
      <L.SharedLayout>
        <L.SharedHeader
          style={{
            background: colorBgContainer,
          }}>
          <Burger />
          {isAuth ? (
            <L.UsersUI>
              <DropDown />
            </L.UsersUI>
          ) : (
            ""
          )}
          <Logo />
        </L.SharedHeader>
        <L.PageContainer>
          <S.BoxUi style={{ width: 700 }}>
            <S.LeftUserUi>
              <S.RecipientInformation>
                Message to: <h3>{user?.name ? user.name : "-"}</h3>
                <br />
                <S.ProfileImgContainer>
                  {user.photo ? (
                    <img
                      src={!user.photo ? "" : user.photo}
                      alt="avatar"
                      style={{
                        width: 200,
                        height: 200,
                        borderRadius: "100%",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: 200,
                        width: 200,
                        borderRadius: "50%",
                        border: "1px solid gray",
                        display: "flex",
                        marginBottom: 20,
                        flexDirection: "column",
                        justifyContent: "center",
                      }}>
                      <S.AvatarAltText>No photo</S.AvatarAltText>
                    </div>
                  )}
                  <span>Email:</span>
                  <h3>{user?.email ? user.email : "-"}</h3>
                </S.ProfileImgContainer>
              </S.RecipientInformation>
            </S.LeftUserUi>
            <S.RightMessageUi>
              <S.MessagesField ref={containerRef}>
                <S.MessagesAligner>
                  {filteredMessages.map((message, index) => (
                    <S.SendMessagesBox
                      key={index}
                      style={{
                        alignSelf:
                          message.senderID === sender.id
                            ? "flex-end"
                            : "flex-start",
                        backgroundColor:
                          message.senderID === sender.id
                            ? "#8774e1"
                            : "#212121",
                      }}>
                      <S.SendMessage>
                        <p style={{ wordWrap: "break-word" }}>
                          {message.content}
                        </p>
                        <div>
                          {" "}
                          {message.unread ? (
                            <span
                              style={{
                                fontSize: 11,
                                color: "#2A3E48",
                              }}>
                              unread &nbsp;
                              <CheckOutlined />
                            </span>
                          ) : (
                            <span
                              style={{
                                fontSize: 11,
                                color: "#9AD745",
                              }}>
                              read &nbsp;
                              <CheckOutlined style={{ color: "#9AD745" }} />
                            </span>
                          )}
                        </div>
                      </S.SendMessage>
                    </S.SendMessagesBox>
                  ))}
                </S.MessagesAligner>
              </S.MessagesField>
              <p>Your message:</p>
              <TextArea
                rows={4}
                value={messageContent}
                placeholder="Type your message"
                style={{ resize: "none" }}
                onChange={handleTextAreaChange}
              />
              <Button
                type="primary"
                disabled={messageContent === ""}
                style={{ width: 150, marginTop: 5 }}
                onClick={handleSendMessage}>
                Send
              </Button>
            </S.RightMessageUi>
          </S.BoxUi>
        </L.PageContainer>
      </L.SharedLayout>
    </>
  );
});

export default MessagesInBox;
