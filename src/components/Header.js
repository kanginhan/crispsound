import React, { useContext } from "react";
import styled from "styled-components";
import WidgetSelector from "./header/WidgetSelector";
import media from "../utils/media";
import { widgetList } from "../utils/consts";
import context from "../contexts";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Baloo Bhai", cursive;
  padding: 5px 5px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 1.7rem;
  cursor: pointer;

  ${media.mobile`font-size: 1rem;`}
`;

const WidgetSelectors = styled.div`
  display: flex;
`;

function Header() {
  const {channel} = useContext(context);

  return (
    <Wrapper>
      <Title className="handle" onClick={() => window.history.go("/")}>
        {channel.title} <span className="subTitle">SOUND</span>
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
