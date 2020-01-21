import React, { useContext } from "react";
import context from "../../contexts";
import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  padding: 20px 5px;
`;

const Icon = styled.i`
  color: white;
  font-size: 3vw;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: all 0.2s linear;
  }

  @media (min-width: 1300px) {
    font-size: 40px;
  }
`;

const ControlPanel = () => {
  const { dispatch } = useContext(context);

  const toggleFullScreen = () => {
    if (document.fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      var elem = document.getElementById("display");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  const skipNext = () => {
    dispatch.video({ type: "NEXT" });
  };

  const skipPrev = () => {
    dispatch.video({ type: "PREV" });
  };

  return (
    <Panel>
      <Icon className="material-icons">playlist_play</Icon>
      <Icon className="material-icons" style={{ color: "#ff5722" }}>
        favorite
      </Icon>
      <Icon className="material-icons" onClick={toggleFullScreen}>
        fullscreen
      </Icon>
      <Icon className="material-icons" onClick={skipNext}>
        skip_next
      </Icon>
      <Icon className="material-icons" onClick={skipPrev}>
        skip_previous
      </Icon>
    </Panel>
  );
};

export default ControlPanel;
