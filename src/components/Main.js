import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import media from "../utils/media";
import context from "../contexts";

import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  ${media.mobile`
    width: 100%;
    flex-direction: column-reverse;
    padding-top: 0;
  `}
`;

function Main({ match }) {
  const { channel, dispatch } = useContext(context);

  useEffect(() => {
    dispatch.channel({ type: "SET", id: match.params.id });

    return () => {
      dispatch.channel({ type: "CLEAR" });
    };
  }, []);

  if (!channel) {
    return null;
  }

  return (
    <Wrapper>
      <Header></Header>
      <Contents></Contents>
      {/* <Footer></Footer> */}
    </Wrapper>
  );
}

export default withRouter(Main);
