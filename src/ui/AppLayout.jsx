import styled from "styled-components";
import Controller from "../components/Controller";
import GameGrid from "../components/GameGrid";
import MainBG from "../components/MainBG";
import Map from "./Map";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90dvh;
`;

const Section = styled.section`
  width: 450px;
  height: 500px;
  margin-left: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;
const Image = styled.img`
  width: 80px;
  height: auto;
  margin-top: 10px;
`;
function AppLayout() {
  return (
    <>
      <Header>
        <H1>Mini Earth </H1>
        <Image src="../../public/nasa data/istockphoto-1226218465-640-adp-unscreen.gif"></Image>
      </Header>
      <Container>
        <Map />

        <Section style={{ flexDirection: "column" }}>
          <Div>
            <Controller />
          </Div>
        </Section>
      </Container>
    </>
  );
}

export default AppLayout;

// src/App.js
