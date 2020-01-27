import React from "react";
import Widget from "./Widget";
import styled from "styled-components";
import Moment from "react-moment";

const Time = styled.div`
  color: white;
  font-family: "Baloo Bhai", cursive;
  font-size: 4vw;
`;

const defaultRatio = {
  xratio: 0.75,
  yratio: 0.06
};

const ClockWidget = () => {
  return (
    <Widget type="clock" movable={true} defaultRatio={defaultRatio}>
      <Time>
        <Moment interval={1000 * 60} format="A hh:mm"></Moment>
      </Time>
    </Widget>
  );
};

export default ClockWidget;
