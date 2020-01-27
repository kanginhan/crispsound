import React, { useState, useEffect } from "react";
import Widget from "./Widget";
import styled from "styled-components";

const Time = styled.div`
  color: white;
  font-family: "Baloo Bhai", cursive;
  font-size: 4vw;
`;

const defaultRatio = {
  xratio: 0.75,
  yratio: 0.12,
}

const StudyTimeWidget = () => {
  const [startTime] = useState(new Date());
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const studyTime = new Date().getTime() - startTime.getTime();
      setStudyTime(studyTime);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getTimes(time) {
    let tmpSeconds = Math.floor(time / 1000);
    const hours = Math.floor(tmpSeconds / (60 * 60));
    tmpSeconds -= hours * 60 * 60;
    const minutes = Math.floor(tmpSeconds / 60);
    tmpSeconds -= minutes * 60;
    const seconds = tmpSeconds;
    return {
      hours,
      minutes,
      seconds
    };
  }

  function format(time) {
    const { hours, minutes, seconds } = getTimes(time);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <Widget type="studyTime" movable={true} defaultRatio={defaultRatio}>
      <Time>{format(studyTime)}</Time>
    </Widget>
  );
};

export default StudyTimeWidget;
