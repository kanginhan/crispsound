import React, { useEffect, useState } from "react";
import Widget from "./Widget";
import styled from "styled-components";
import Moment from "react-moment";
import { useWindowSize } from "../../utils/hooks";

const Time = styled.div`
  color: white;
  font-family: "Baloo Bhai", cursive;
  font-size: ${props => `${props.font}px`};
`;

const defaultRatio = {
  xratio: 0.75,
  yratio: 0.06
};

const ClockWidget = () => {
  const size = useWindowSize();
  const [font, setFont] = useState(0);

  useEffect(() => {
    const player_wrap = document.getElementById("player_wrap");
    setFont(player_wrap.clientWidth * 0.058);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  return (
    <Widget type="clock" movable={true} defaultRatio={defaultRatio}>
      <Time font={font}>
        <Moment interval={1000 * 60} format="A hh:mm"></Moment>
      </Time>
    </Widget>
  );
};

export default ClockWidget;
