import styled from "styled-components";
import MainBG from "../components/MainBG";
import useStore from "../../store";
import MapEarth from "../components/MapEearth";
import GameGrid from "../components/GameGrid";

const StyledMap = styled.section`
  width: 810px;
  height: 514px;

  justify-content: space-around;
  /* background-image: url("../../public/nasa data/lawn-253616_1280.jpg"); */
  background-repeat: repeat; /* Repeat the image horizontally */

  /* Scale the image so that it repeats 3 times across the width */
  background-size: calc(100% / 60) auto; /* This divides the width into 3 equal parts */
  position: relative;
  gap: 5rem;
`;
function Map() {
  const isVideoFinished = useStore((state) => state.isVideoFinished);

  return (
    <StyledMap>
      {!isVideoFinished ? (
        <MainBG url={`../../public/nasa data/MainBG.mp4`} />
      ) : (
        <GameGrid />
      )}
      {/* <GameGrid /> */}
    </StyledMap>
  );
}

export default Map;
