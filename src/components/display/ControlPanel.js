import React, { useContext, useEffect, useRef } from "react";
import context from "../../contexts";
import styled from "styled-components";
import { useWindowSize } from "../../utils/hooks";

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
  const ref = useRef({ orientationType: window.screen.orientation.type });
  const size = useWindowSize();

  useEffect(() => {
    const orientationType = window.screen.orientation.type;
    if (orientationType !== ref.current.orientationType) {
      ref.current.orientationType = orientationType;
      isFullscreen() && toggleFullScreen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const isFullscreen = () => {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    );
  };

  const toggleFullScreen = e => {
    if (isFullscreen()) {
      if (document.exitFullscreen) {
        return document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        return document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        return document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        return document.msExitFullscreen();
      }
    } else {
      var elem = document.getElementById("display");
      if (elem.requestFullscreen) {
        return elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        return elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        return elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        return elem.msRequestFullscreen();
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
      <Icon
        className="material-icons"
        onClick={toggleFullScreen}
        id="fullscreenBtn"
      >
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