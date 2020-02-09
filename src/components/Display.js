import React from "react";
import styled from "styled-components";
import Player from "./display/Player";
import ControlPanel from "./display/ControlPanel";
import ChatWidget from "./display/ChatWidget";
import ClockWidget from "./display/ClockWidget";
import PlayingTimeWidget from "./display/PlayingTimeWidget";
import media from "../utils/media";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 53%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  background-color: black;
  font-family: "Baloo Bhai", cursive;

  ${media.mobile`
    border-radius: 0;
    padding-top: 64%;
  `}
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FlexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.mobile`
    flex-direction: column;
  `}
`;

function Display() {
  return (
    <Wrapper>
      <Container id="display">
        <FlexContainer>
          <Player>
            <ChatWidget />
            <ClockWidget />
            <PlayingTimeWidget />
          </Player>
          <ControlPanel />
        </FlexContainer>
      </Container>
    </Wrapper>
  );
}

export default Display;
