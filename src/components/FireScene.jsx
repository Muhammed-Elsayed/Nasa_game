import styled from "styled-components";
import useStore from "../../store";

// Styled component for the image
const Image = styled.img`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: 150px;
  height: 70px;
  border-radius: 100%;

  z-index: 10;
`;

// Function to generate random numbers within a range
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

function FireScene() {
  // Randomize top (0 to 150px) and left (0 to 300px)
  const factoryEmissions = useStore((state) => state.factoryEmissions);

  const top = getRandomNumber(0, 150);
  const left = getRandomNumber(0, 300);

  return (
    <>
      {factoryEmissions > 4 ? (
        <Image
          src="../../public/nasa data/pureFirePro.gif"
          top={top}
          left={left}
        />
      ) : null}
    </>
  );
}

export default FireScene;
