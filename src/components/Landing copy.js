import React from "react";
import styled from "styled-components";
import background from "../static/concert.jpg";
import media from "../utils/media";

const Wrapper = styled.div`
  text-align: center;
  color: white;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem 0;
  display: flex;
`;

const Contents = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Descript = styled.div`
  height: 15rem;

  font-family: "Nanum Gothic", sans-serif;
  font-size: 1rem;
  text-align: left;
  line-height: 1.5rem;

  margin-left: 6.6rem;
  padding-top: 6rem;
`;

const Logo = styled.div`
  flex: 1;
  font-size: 2rem;

  ${media.mobile`font-size: 1.5rem;`}
`;

const Nav = styled.ul`
  flex: 1;
  font-family: "Maven Pro", sans-serif;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  cursor: pointer;
  font-weight: bold;

  & + & {
    margin-left: 2rem;
  }
`;

const Tip = styled.div`
  flex: 1;
  cursor: pointer;
  font-weight: bold;
  font-family: "Maven Pro", sans-serif;
  display: flex;
  align-items: center;
  color: #009688;
`;

const Landing = () => {
  return (
    <Wrapper>
      <Header>
        <Logo>CRISPY LIST</Logo>
        {/* <Nav>
         <NavItem>LIST</NavItem>
          <NavItem>TIP</NavItem>
        </Nav> */}
        {/* <Tip>TIP: How to play in background</Tip> */}
      </Header>
      <Contents>
        <Descript>
          {/* 당신을 위한 모든 LIST
          <br />
          무료로 다양한 음악을 즐기세요 */}
        </Descript>
      </Contents>
    </Wrapper>
  );
};

export default Landing;
