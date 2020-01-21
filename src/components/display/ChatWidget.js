import React, { useContext } from "react";
import Widget from "./Widget";
import styled from "styled-components";
import context from "../../contexts";

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
  background-color: black;
  border-radius: 0.3rem;
  color: white;
  width: 100%;
`;

const Icon = styled.i`
  margin: 0px 5px;
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
  flex-direction: column;
  /* background-color: black; */
  width: 100%;
  height: 50%;
  margin-bottom: 1%;
`;

const Message = styled.div`
  position: relative;
`;

const MHeader = styled.div`
  display: flex;
  align-items: center;
`;

const NickName = styled.div``;

const MTime = styled.div`
  font-size: 0.8rem;
  margin-left: 5%;
  color: #9e9e9e;
`;

const MContents = styled.div`
  margin-left: 10%;
`;

const MWrapper = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0.3rem;
`;

const MWrapperU = styled.div`
  position: relative;
`;

const ChatWidget = () => {
  const { widget } = useContext(context);

  return (
    <Widget type="chat" width="40" height="100">
      {widget.chat && (
        <ChatPanel>
          <MessageContainer>
            <Message>
              <MWrapperU>
                <MWrapper>
                  <MHeader>
                    <Icon className="material-icons">account_circle</Icon>
                    <NickName>Son.H.M</NickName>
                    <MTime>PM 07:57</MTime>
                  </MHeader>
                  <MContents>asdfasdf</MContents>
                </MWrapper>
              </MWrapperU>
            </Message>
            <Message>
              <MWrapperU>
                <MWrapper>
                  <MHeader>
                    <Icon className="material-icons">account_circle</Icon>
                    <NickName>Son.H.M</NickName>
                    <MTime>PM 07:57</MTime>
                  </MHeader>
                  <MContents>asdfasdasdfasdff</MContents>
                </MWrapper>
              </MWrapperU>
            </Message>
          </MessageContainer>
          <WriteContainer>
            <Icon className="material-icons">account_circle</Icon>
            <WriteMessage placeholder="본부장"></WriteMessage>
          </WriteContainer>
        </ChatPanel>
      )}
    </Widget>
  );
};

export default ChatWidget;
