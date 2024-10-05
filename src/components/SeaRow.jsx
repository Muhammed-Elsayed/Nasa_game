import styled from "styled-components";
import BluePixel from "./BluePixel";
const Row = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 23.2px;
  /* background-color: black; */
  margin-top: ${(props) => props.marginTop};

  overflow: hidden;
`;
let myArray = new Array(10).fill(null);

function SeaRow() {
  return (
    <Row>
      {myArray.map((_, index) => (
        <BluePixel key={index} image="../../public/nasa data/SeaPixel.gif" />
      ))}
    </Row>
  );
}

export default SeaRow;
