import styled from "styled-components";
import ForestRow from "./ForestRow";
import FireScene from "./FireScene";
import useStore from "../../store";
import FireOverLay from "./FireOverLay";

const Div = styled.div`
  width: 485px;
  height: 280px;
  gap: 2px;
  display: flex;
  background: url("/public/nasa data/Grass.jpg");
  background-size: calc(100% / 4) calc(100% / 11); /* Dynamically calculate background size */
  flex-direction: column;
  margin-top: 60px;
  position: relative;
`;

function Forest() {
  return (
    <Div>
      {Array.from({ length: 20 }, () => (
        <>
          <ForestRow url={"../../public/nasa data/longTree.png"} />
          <FireScene />
        </>
      ))}
      <FireOverLay />
    </Div>
  );
}

export default Forest;
