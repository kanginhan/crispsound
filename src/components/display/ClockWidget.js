import React, { useContext } from "react";
import Widget from "./Widget";
import styled from "styled-components";
import context from "../../contexts";
import Moment from "react-moment";

const Time = styled.div`
  color: white;
  font-family: "Baloo Bhai", cursive;
  font-size: 4vw;
`;

const ClockWidget = () => {
  const { widget } = useContext(context);

  return (
    <Widget type="colock" movable={true}>
      {widget.colck ? (
        <Time>
          <Moment interval={1000 * 60} format="A hh:mm"></Moment>
        </Time>
      ) : null}
    </Widget>
  );
};

export default ClockWidget;
