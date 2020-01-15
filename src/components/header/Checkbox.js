import React from "react";
import styled from "styled-components";
import media from "../../utils/media";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;

  ${media.mobile`margin-left: 10px;`}
`;

const Box = styled.i`
  color: #22b8cf;

  ${media.mobile`font-size: 1rem;`}
`;

const Label = styled.div`
  margin-left: 5px;

  ${media.mobile`font-size: 0.7rem;`}
`;

const Checkbox = ({ children, check, onClick }) => {
  return (
    <Wrapper onClick={e => onClick && onClick(e)}>
      <Box className="material-icons">
        {check ? "check_box" : "check_box_outline_blank"}
      </Box>
      <Label>{children}</Label>
    </Wrapper>
  );
};

export default Checkbox;
