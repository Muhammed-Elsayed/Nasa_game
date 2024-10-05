import styled from "styled-components";
import GreenPixel from "./GreenPixel";
import WhitePixel from "./WhitePixel";
import FactoryPixel from "./FactoryPixel";

const Row = styled.div`
  width: 485px;
  margin: 0 auto;
  height: 23.2px;
  margin-top: ${(props) => props.marginTop};
  overflow: hidden;
  display: flex;
`;

let myArray = new Array(20).fill(null);
let twoTypes = [
  "../../public/nasa data/FactoryCementPixel.png",
  "../../public/nasa data/factortyStreatPixel.png",
];
function FactoryRow({ url }) {
  return (
    <Row>
      {myArray.map((_, index) => (
        <FactoryPixel key={index} url={url} />
      ))}
    </Row>
  );
}

export default FactoryRow;
