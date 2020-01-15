import React from "react";
import styled from "styled-components";
import media from "../utils/media";

const Wrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.mobile`align-items: flex-start`}
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
