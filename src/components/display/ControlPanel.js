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
`;

const ControlPanel = () => {
  const { dispatch } = useContext(context);

  const toggleFullScreen = () => {
    if (document.fullscreen) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  };

  function openFullscreen() {
    var elem = document.getElementById("display");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  const skipNext = () => {
    dispatch.video({ type: "NEXT" });
  };

  const skipPrev = () => {
    dispatch.video({ type: "PREV" });
  };

  return (
    <Panel>
      <Icon className="material-icons">playlist_play</Icon>
      <Icon
        className="material-icons"
        style={{ color: "#f44336", fontSize: "2.3vw" }}
      >
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
