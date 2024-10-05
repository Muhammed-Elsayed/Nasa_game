import styled from "styled-components";
import AiResult from "./components/AiResult";
import BackGround from "./components/BackGround";
import "./index.css";
import AppLayout from "./ui/AppLayout";
import { useEffect, useState } from "react";

const FILE = "/";
const VIDEO = "";
const IMAGE = "stars";

const Div = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-top: 5px white solid;
  /* background: rgba(255, 255, 255, 0.2); Optional: semi-transparent white */
  margin-top: 20px;
`;

function App() {
  return (
    <>
      <BackGround
        url={`/istockphoto-1690940931-640_adpp_is.mp4`}
        playbackSpeed="0.8"
        img={`${FILE}nasa data/${IMAGE}.png`}
      />

      <AppLayout />
      <Div style={{ justifyContent: "space-between" }}>
        <AiResult />
      </Div>
    </>
  );
}
export default App;
