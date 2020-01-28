import React, { useState, useEffect, useRef } from "react";
import Widget from "./Widget";
import styled from "styled-components";
import Moment from "react-moment";
import uuid from "uuid/v1";
import rn from "random";

const ChatPanel = styled.div`
  padding-bottom: 10%;
  padding-left: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const WriteMessage = styled.input`
  border: 0.5px solid white;
  padding: 0.5rem;
  background-color: ${props => (props.disabled ? "gray" : "black")};
  border-radius: 0.3rem;
  color: white;
  width: 100%;
  cursor: ${props => (props.disabled ? "not-allowed" : "auto")};
`;

const Icon = styled.i`
  margin: 0px 5px;
  cursor: pointer;
`;

const WriteContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  width: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 75%;
  margin-bottom: 3%;
  overflow: scroll;
  -ms-overflow-style: none;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const Message = styled.div`
  display: flex;
  justify-content: ${props => (props.mine ? "flex-end" : "flex-start")};

  & + & {
    margin-bottom: 5px;
  }
`;

const MHeader = styled.div`
  display: flex;
  align-items: center;
`;

const NickName = styled.div`
  font-size: 0.8rem;
  color: #696969;
  height: 0.9rem;
  line-height: 0.9rem;
`;

const MTime = styled.div`
  font-size: 0.7rem;
  color: #9e9e9e;
  margin-left: 10px;
  height: 0.9rem;
  line-height: 0.9rem;
`;

const MContents = styled.div`
  font-family: "Arial";
  font-size: 0.8rem;
  word-break: break-all;
`;

const MWrapper = styled.div`
  display: inline-block;
  background-color: ${props => (props.mine ? "#ffeb3b" : "white")};
  border-radius: 0.3rem;
  padding: 3px 7px;
  padding-top: 5px;
`;

const initialMessages = [
  {
    key: uuid(),
    nickName: "CRISPSOUND",
    time: new Date(),
    contents: "집중력을 높여주는 음악으로 최적의 환경을 만들어 보세요"
  }
];

const ChatWidget = () => {
  const [nickName, _setNickName] = useState(localStorage.nickName);
  const [messages, _setMessages] = useState(initialMessages);
  const [connected, _setConnected] = useState(false);
  const ref = useRef({ nickName, messages, connected, socket: null });
  const setNickName = data => {
    ref.current.nickName = data;
    _setNickName(data);
  };
  const setMessages = data => {
    ref.current.messages = data;
    _setMessages(data);
  };
  const setConnected = data => {
    ref.current.connected = data;
    _setConnected(data);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ref.current.socket = (window.io && window.io("http://localhost:8080")) || {
      on: () => {}
    };

    //채팅서버 접속
    ref.current.socket.on("connect", () => {
      setConnected(true);
      let realNick = ref.current.nickName;
      if (!realNick) {
        realNick = prompt("Please enter your nickname", "");
        if (realNick) {
          localStorage.nickName = realNick;
        } else {
          realNick = `anonymous${rn.int(1000, 9999)}`;
        }
        setNickName(realNick);
      }
    });

    //메세지 수신
    ref.current.socket.on("newMsg", data => {
      if (data.type === "newMsg") {
        setMessages([
          {
            key: uuid(),
            nickName: data.nick,
            time: new Date(),
            contents: data.message
          },
          ...ref.current.messages.slice(0, 99)
        ]);
      }
    });

    //채팅서버 접속해제
    ref.current.socket.on("disconnect", () => {
      setConnected(false);
    });
  }, []);

  const sendMessage = e => {
    if (e.key === "Enter" && e.target.value) {
      setMessages([
        {
          key: uuid(),
          nickName: nickName,
          time: new Date(),
          contents: e.target.value,
          mine: true
        },
        ...messages.slice(0, 99)
      ]);

      // 서버로 newMsg 이벤트 전달 + 데이터와 함께
      ref.current.socket.emit("newMsg", {
        type: "newMsg",
        message: e.target.value,
        nick: nickName
      });

      e.target.value = "";
    }
  };

  const changeNickName = () => {
    let realNick = prompt("Please enter your nickname", "");
    if (realNick) {
      localStorage.nickName = realNick;
      setNickName(realNick);
    }
  };

  return (
    <Widget type="chat" width="40" height="100">
      <ChatPanel>
        <MessageContainer>
          {messages.map(item => (
            <Message key={item.key} mine={item.mine}>
              <MWrapper mine={item.mine}>
                <MHeader>
                  <NickName>{item.nickName}</NickName>
                  <MTime>
                    <Moment format="A hh:mm">{item.time}</Moment>
                  </MTime>
                </MHeader>
                <MContents>{item.contents}</MContents>
              </MWrapper>
            </Message>
          ))}
        </MessageContainer>
        <WriteContainer>
          <Icon className="material-icons" onClick={changeNickName}>
            account_circle
          </Icon>
          <WriteMessage
            placeholder={nickName}
            onKeyUp={sendMessage}
            disabled={!connected}
          ></WriteMessage>
        </WriteContainer>
      </ChatPanel>
    </Widget>
  );
};

export default ChatWidget;
