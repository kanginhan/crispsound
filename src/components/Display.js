import React from "react";
import styled from "styled-components";
import Player from "./display/Player";
import ControlPanel from "./display/ControlPanel";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  background-color: black;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

function Display() {
  return (
    <Wrapper>
      <Container id="display">
        <Player />
        <ControlPanel />
      </Container>
    </Wrapper>
  );
}

export default Display;
