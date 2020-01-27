import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { useWindowSize } from "../../utils/hooks";
import context from "../../contexts";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  opacity: 0.8;
  cursor: pointer;
  transform: ${props => {
    return `translate(${props.xp}px, ${props.yp}px)`;
  }};

  &:hover {
    opacity: 0.9;
  }

  ${props =>
    !props.movable &&
    css`
      cursor: auto;
    `}

    ${props =>
      props.width &&
      css`
        width: ${props.width}%;
      `}
    ${props =>
      props.height &&
      css`
        height: ${props.height}%;
      `}
`;

const Widget = ({ children, type, movable, width, height, defaultRatio }) => {
  const { widget } = useContext(context);

  let userSetting;
  try {
    userSetting = JSON.parse(localStorage[`${type}`]);
  } catch (e) {
    userSetting = {};
  }
  const [xp, setXp] = useState(0);
  const [yp, setYp] = useState(0);
  const [xratio, setXratio] = useState(userSetting.xratio || (defaultRatio && defaultRatio.xratio) || 0);
  const [yratio, setYratio] = useState(userSetting.yratio || (defaultRatio && defaultRatio.yratio) || 0);
  const [drag, setDrag] = useState(false);
  const [org, setOrg] = useState({
    clientX: 0,
    xratio: 0
  });
  const size = useWindowSize();

  const down = e => {
    setDrag(true);
    setOrg({
      clientX: e.clientX || e.touches[0].clientX,
      xratio: xratio,
      clientY: e.clientY || e.touches[0].clientY,
      yratio: yratio
    });
  };

  const move = e => {
    if (drag) {
      const player_wrap = document.getElementById("player_wrap");
      const diffX =
        ((e.clientX || e.touches[0].clientX) - org.clientX) /
        player_wrap.clientWidth;
      setXratio(org.xratio + diffX);
      setXp(player_wrap.clientWidth * (org.xratio + diffX));

      const diffY =
        ((e.clientY || e.touches[0].clientY) - org.clientY) /
        player_wrap.clientWidth;
      setYratio(org.yratio + diffY);
      setYp(player_wrap.clientWidth * (org.yratio + diffY));
    }
  };

  const up = e => {
    setDrag(false);
    userSetting.xratio = xratio;
    userSetting.yratio = yratio;
    try {
      localStorage.setItem(type, JSON.stringify(userSetting));
    } catch (e) {}
  };

  useEffect(() => {
    const player_wrap = document.getElementById("player_wrap");
    setXp(player_wrap.clientWidth * xratio);
    setYp(player_wrap.clientWidth * yratio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  if (!movable) {
    return (
      <Wrapper movable={false} width={width} height={height}>
        {widget[type] ? children : null}
      </Wrapper>
    );
  }
  return (
    <Wrapper
      movable={true}
      width={width}
      height={height}
      onMouseDown={down}
      onTouchStart={down}
      onMouseMove={move}
      onTouchMove={move}
      onMouseUp={up}
      onTouchEnd={up}
      xp={xp}
      yp={yp}
    >
      {widget[type] ? children : null}
    </Wrapper>
  );
};

export default Widget;
