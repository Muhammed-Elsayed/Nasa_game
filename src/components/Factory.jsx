import styled from "styled-components";
import FactoryRow from "./FactoryRow";
import FactoryImage from "./FactoryImage";
import FactoryEmissions from "./FactoryEmissions";

const Div = styled.div`
  width: 485px;
  height: 130px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
`;

function Factory() {
  return (
    <Div>
      <FactoryRow url={"/nasa data/FactoryCementPixel.png"} />
      <FactoryRow url={"/nasa data/FactoryCementPixel.png"} />
      <FactoryRow url={"/nasa data/factortyStreatPixel.png"} />
      <FactoryRow url={"/nasa data/FactoryCementPixel.png"} />
      <FactoryRow url={"/nasa data/FactoryCementPixel.png"} />
      <FactoryRow url={"/nasa data/factortyStreatPixel.png"} />
      <FactoryRow url={"/nasa data/FactoryCementPixel.png"} />
      <FactoryRow url={"/nasa data/FactoryCementPixel.png"} />
      <FactoryImage url={"/nasa data/single.png"} />
      <FactoryImage left={"170px"} url={"/nasa data/twin.png"} />
      <FactoryImage left={"340px"} url={"/nasa data/badBG.png"} />
      <FactoryEmissions />
    </Div>
  );
}

export default Factory;
