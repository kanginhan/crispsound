import React from "react";
import styled from "styled-components";
import WidgetSelector from "./header/WidgetSelector";
import media from "../utils/media";

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

  ${media.mobile`font-size: 1rem;`}
`;

const WidgetSelectors = styled.div`
  display: flex;
`;

const widgets = ["colck", "studyTime"];

function Header() {
  return (
    <Wrapper>
      <Title>STUDY SOUND</Title>
      <WidgetSelectors>
        {widgets.map((item, i) => (
          <WidgetSelector key={i}>{item}</WidgetSelector>
        ))}
      </WidgetSelectors>
    </Wrapper>
  );
}

export default Header;
