import styled from "styled-components";
import useStore from "../../store";
import "animate.css"; // Ensure Animate.css is imported

const Image = styled.img`
  width: 485px;
  height: 280px;
  top: 0;
  z-index: 100;
  opacity: 0.8;
  left: 0;
  position: absolute;
  transition: 10s;
  animation-duration: 5s; /* Set the animation duration to 5 seconds */
`;

function FireOverLay() {
  const factoryEmissions = useStore((state) => state.factoryEmissions);

  return (
    factoryEmissions >= 4 && (
      <Image
        className="animate__animated animate__fadeIn"
        src="../../public/nasa data/humidity.gif"
      />
    )
  );
}

export default FireOverLay;
