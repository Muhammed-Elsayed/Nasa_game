import styled from "styled-components";
import { memo } from "react";
import Sea from "./Sea";
import Ice from "./Ice";
import Forest from "./Forest";
import Factory from "./Factory";

// import useStore from "../../store";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  gap: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const GameGrid = memo(function GameGrid() {
  return (
    <Container>
      <Column>
        {/* first div is 310X250 */}
        <Ice></Ice>
        {/* second div is 310X250 */}
        <Sea></Sea>
      </Column>
      <Column>
        {/* first div is 485X330 */}
        <Forest></Forest>

        {/* second div is 485X165 */}
        <Factory></Factory>
      </Column>
    </Container>
  );
});

export default GameGrid;
