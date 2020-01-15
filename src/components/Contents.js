import React from "react";
import styled from "styled-components";

import Display from "./Display";
import Category from "./Category";

const Wrapper = styled.div`
  float: left;
  background: #fff;
  width: 100%;
  height: 100%;
`;

function Contents() {
  return (
    <Wrapper>
      <Display></Display>
      {/* <Category></Category> */}
    </Wrapper>
  );
}

export default Contents;
