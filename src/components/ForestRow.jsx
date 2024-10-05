import "animate.css"; // Importing Animate.css for animations
import styled from "styled-components";

// Styled component for the image
const Image = styled.img`
  height: 140px;
  width: auto;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left - 10}%;
  z-index: 3;
  animation-delay: ${({ delay }) => delay}s; /* Add animation delay */
`;
let delayTime = 20;

// Function to generate random numbers within a range
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
function ForestRow({ url }) {
  delayTime = delayTime * 0.1;
  // Generate random top and left values
  const containerWidth = 100; // Assume the container's width is 100% (100vw)

  // Generate random top and left values
  const top = getRandomNumber(-50, 50); // Random top from -50px to 50px
  const maxLeft = containerWidth - 10; // Max left is 90% (keeping 10% margin for tree image width)
  const left = getRandomNumber(0, maxLeft); // Constrain left so it doesn't exceed the boundary
  const delay = delayTime; // 0.5s delay between each tree

  return (
    <Image
      className="animate__animated animate__bounceInUp"
      src={url}
      top={top}
      left={left}
      delay={delay}
    />
  );
}

export default ForestRow;
