import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useWindowSize } from "../../utils/hooks";

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

const Widget = ({ children, type, movable, width, height }) => {
  let userSetting;
  try {
    userSetting = JSON.parse(localStorage[`${type}`]);
  } catch (e) {
    userSetting = {};
  }
  const [xp, setXp] = useState(userSetting.xp);
  const [yp, setYp] = useState(userSetting.yp);
  const [xratio, setXratio] = useState(userSetting.xratio);
  const [yratio, setYratio] = useState(userSetting.yratio);
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
    userSetting.xp = xp;
    userSetting.yratio = yratio;
    userSetting.yp = yp;
    localStorage.setItem(type, JSON.stringify(userSetting));
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
        {children}
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
      {children}
    </Wrapper>
  );
};

export default Widget;
