import React from "react";
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

function Header() {
  return (
    <Wrapper>
      <Title className="handle" onClick={() => window.history.go("/")}>
        STUDY SOUND
      </Title>
      <WidgetSelectors>
        {widgetList.map((item, i) => (
          <WidgetSelector key={i}>{item}</WidgetSelector>
        ))}
      </WidgetSelectors>
    </Wrapper>
  );
}

export default Header;
