import styled from "styled-components";
import useStore from "../../store";

const Image = styled.img`
  top: -40px;
  width: 120px;
  z-index: 4;
  position: absolute;
  height: 110px;
`;

function FactoryEmissions() {
  const factoryEmissionsImages = useStore((store) => store.factoryEmissions);

  return (
    <>
      {factoryEmissionsImages >= 1 && (
        <Image
          src={"../../public/nasa data/smoke.gif"}
          style={{ top: "-100px" }}
        />
      )}
      {factoryEmissionsImages >= 2 && (
        <Image
          src={"../../public/nasa data/smoke.gif"}
          style={{ top: "-100px", left: "170px" }}
        />
      )}
      {factoryEmissionsImages >= 3 && (
        <Image
          src={"../../public/nasa data/smoke.gif"}
          style={{ top: "-100px", left: "340px" }}
        />
      )}
    </>
  );
}

export default FactoryEmissions;
