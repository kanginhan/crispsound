import React from "react";
import styled from "styled-components";
import media from "../utils/media";

import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";

const Wrapper = styled.div`
  width: 80%;
  height: 60%;
  max-width: 1000px;
  max-height: 600px;

  ${media.mobile`width: 100%;`}
`;

function Main() {
  return (
    <Wrapper>
      <Header></Header>
      <Contents></Contents>
      {/* <Footer></Footer> */}
    </Wrapper>
  );
}

export default Main;
