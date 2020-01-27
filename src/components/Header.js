import React, { useState } from "react";
import styled from "styled-components";
import WidgetSelector from "./header/WidgetSelector";
import media from "../utils/media";
import { widgetList } from "../utils/consts";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Baloo Bhai", cursive;
  padding: 5px 5px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 2rem;
  cursor: pointer;

  ${media.mobile`font-size: 1rem;`}
`;

const WidgetSelectors = styled.div`
  display: flex;
`;

const Warning = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.7rem;
  padding: 0.3rem;

  ${media.mobile`display: flex;`}
`;

const Icon = styled.i`
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const Tip = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  background-color: #ffeb3b;

  .marker {
    height: 2rem;
    width: 0.5rem;
    background-color: #ff9800;
  }

  ${media.mobile`display: flex;`}
`;

function Header() {
  const [showTip, setShowTip] = useState(true);

  return (
    <>
      {showTip && (
        <Tip>
          <div className="marker"></div>
          <a
            href="https://www.digitaltrends.com/mobile/how-to-play-youtube-in-the-background/"
            className="title"
          >
            Tip: How to listen in mobile background
          </a>
          <Icon className="material-icons" onClick={() => setShowTip(false)}>
            close
          </Icon>
        </Tip>
      )}
      <Warning>
        <Icon className="material-icons">screen_rotation</Icon>
        <div>We only support landscape screen. Please turn your device</div>
      </Warning>
      <Wrapper>
        <Title className="handle" onClick={() => window.history.go("/")}>STUDY SOUND</Title>
        <WidgetSelectors>
          {widgetList.map((item, i) => (
            <WidgetSelector key={i}>{item}</WidgetSelector>
          ))}
        </WidgetSelectors>
      </Wrapper>
    </>
  );
}

export default Header;
