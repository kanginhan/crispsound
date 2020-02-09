import React from "react";
import styled from "styled-components";
import {channels} from "../utils/consts";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  height: 40%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/crispsound/images/listening.png") no-repeat;
  background-size: cover;
  background-position-y: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

const Titles = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: "Hind Siliguri", sans-serif;
  letter-spacing: 0.2rem;
`;

const Expander = styled.div`
  font-size: 0.8rem;
  justify-self: flex-end;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Contents = styled.div`
  padding-top: 1rem;
`;

const PlayList = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  float: left;
  width: 45%;
  height: 45%;
  max-width: 300px;
  max-height: 300px;
  margin: 0.5rem;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  padding-top: 84.4%;
  cursor: pointer;
`;

const CardInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0.2rem 8px rgba(0, 0, 0, 0.06);
  transition: 0.2s linear;

  background-color: white;
  border-radius: 0.3rem;
  overflow: hidden;

  &:hover {
    margin-top: -0.2rem;
    box-shadow: 0 0.4rem 8px rgba(0, 0, 0, 0.06);
    margin-bottom: 0.2rem;
  }
`;

const ThumbNail = styled.div`
  width: 100%;
  height: 70%;
`;

const CardDesc = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardName = styled.div`
  display: flex;
  align-items: center;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  letter-spacing: 0.15rem;
  font-size: 0.8rem;
`;
const CardTags = styled.div`
  color: #aaa;
  font-size: 0.6rem;
`;

const Landing = ({ history }) => {
  return (
    <Wrapper>
      <Header>
        <Titles>
          <SubTitle>음악과 함께 하고 싶을 땐</SubTitle>
          <Title>CRISP SOUND</Title>
        </Titles>
        <Expander>
          백그라운드에서 재생하는 방법
          <i className="material-icons">expand_more</i>
        </Expander>
      </Header>
      <Contents>
        <PlayList>
          {channels.map(item => (
            <CardWrapper key={item.id}>
              <Card onClick={() => history.push(`/crispsound/${item.id}`)}>
                <CardInner>
                  <ThumbNail>
                    <img
                      src={item.img}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    ></img>
                  </ThumbNail>
                  <CardDesc>
                    <CardName>{item.name}</CardName>
                    <CardTags>{item.tags}</CardTags>
                  </CardDesc>
                </CardInner>
              </Card>
            </CardWrapper>
          ))}
        </PlayList>
      </Contents>
    </Wrapper>
  );
};

export default Landing;
