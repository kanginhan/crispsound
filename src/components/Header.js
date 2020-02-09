import React, { useContext } from "react";
import styled from "styled-components";
import WidgetSelector from "./header/WidgetSelector";
import media from "../utils/media";
import { widgetList } from "../utils/consts";
import context from "../contexts";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Baloo Bhai", cursive;
  padding: 5px 5px;

  ${media.mobile`
  flex-direction: column-reverse;
  `}
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 1.7rem;

  align-self: flex-start;
  cursor: pointer;

  ${media.mobile`font-size: 1rem;`}
`;

const WidgetSelectors = styled.div`
  display: flex;
`;

const Icon = styled.i`
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;

  ${media.mobile`font-size: 0.8rem;`}
`;

function Header({ history }) {
  const { channel } = useContext(context);

  return (
    <Wrapper>
      <ButtonContainer>
        <Icon
          className="material-icons"
          onClick={() => history.push("/crispsound")}
        >
          arrow_back_ios
        </Icon>
        <WidgetSelectors>
          {widgetList.map((item, i) => (
            <WidgetSelector key={i}>{item}</WidgetSelector>
          ))}
        </WidgetSelectors>
      </ButtonContainer>
      <Title
        className="handle"
        onClick={() => history.push(`/crispsound/${channel.id}`)}
      >
        {channel.title} <span className="subTitle">SOUND</span>
      </Title>
    </Wrapper>
  );
}

export default withRouter(Header);
