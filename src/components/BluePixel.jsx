import styled from "styled-components";
import "animate.css";

import useStore from "../../store";

// Styled Image component
const Image = styled.img`
  width: 28px;
  height: 23px;
  margin: 1px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  border-radius: 3px;
`;

function BluePixel({ image }) {
  const gameStarted = useStore((state) => state.gameStarted);
  const randomDelay = () => `${Math.random() * 3}s`;

  return (
    <Image
      className={`animate__animated ${gameStarted ? "animate__fadeIn" : ""}`}
      style={{ animationDelay: gameStarted ? randomDelay() : "0s" }} // Apply random delay only when gameStarted is true
      src={image}
    />
  );
}

export default BluePixel;
