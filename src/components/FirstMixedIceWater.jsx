import styled from "styled-components";
import BluePixel from "./BluePixel";
import WhitePixel from "./WhitePixel";
import "animate.css";
const Row = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 23.2px;
  /* background-color: black; */
  margin-top: ${(props) => props.marginTop};

  overflow: hidden;
`;

function FirstMixedIceWater({ levelOfWater, rounded }) {
  let ice1 = new Array((10 - levelOfWater) / 2).fill(null);
  let water = new Array(levelOfWater).fill(null);
  let ice2 = new Array(10 - levelOfWater).fill(null);
  let waterRounded = new Array(levelOfWater / 2).fill(null);
  if (rounded)
    return (
      <Row className="animate__animated animate__fadeIn">
        {waterRounded.map((_, index) => (
          <BluePixel key={index} image="/nasa data/SeaPixel.gif" />
        ))}
        {ice2.map((_, index) => (
          <WhitePixel key={index} image="/nasa data/icePixel.gif" />
        ))}

        {waterRounded.map((_, index) => (
          <BluePixel key={index} image="/nasa data/SeaPixel.gif" />
        ))}
      </Row>
    );
  return (
    <Row className="animate__animated animate__fadeIn">
      {ice1.map((_, index) => (
        <WhitePixel key={index} image="/nasa data/icePixel.gif" />
      ))}
      {water.map((_, index) => (
        <BluePixel key={index} image="/nasa data/SeaPixel.gif" />
      ))}
      {ice2.map((_, index) => (
        <WhitePixel key={index} image="/nasa data/icePixel.gif" />
      ))}
    </Row>
  );
}

export default FirstMixedIceWater;
