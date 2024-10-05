import styled from "styled-components";
import SeaRow from "./SeaRow";
import "animate.css";
import useStore from "../../store";
const Div = styled.div`
  width: 310px;
  height: 230px;
  /* background-color: blue; */
  display: flex;
  background: url("/nasa data/SeaPixel.gif");
  flex-direction: column;
  gap: 2px;

  border-bottom-left-radius: 30px; /* Bottom left corner */

  /* border: 1px white solid; */
`;

function Sea() {
  const gameStarted = useStore((state) => state.gameStarted);

  return (
    <Div
      className={`animate__animated ${gameStarted ? "animate__fadeIn" : ""}`}
    >
      <SeaRow />
      <SeaRow />
      <SeaRow />
      <SeaRow />
      <SeaRow />
      <SeaRow />
      <SeaRow />
      <SeaRow />
      <SeaRow />
    </Div>
  );
}

export default Sea;
