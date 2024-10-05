import styled from "styled-components";
import IceRow from "./IceRow";
import useStore from "../../store";
import FirstMixedIceWater from "./FirstMixedIceWater";

const Div = styled.div`
  margin-top: 60px;
  width: 310px;
  height: 196px;
  display: flex;
  flex-direction: column;
  background: url("/nasa data/icePixel.gif");
`;

function Ice() {
  const temp = useStore((state) => state.factory);
  return (
    <Div>
      <IceRow />
      <IceRow />
      <IceRow />
      <IceRow />
      <IceRow />
      {temp >= 6 ? (
        <FirstMixedIceWater levelOfWater={2} rounded={true} />
      ) : (
        <IceRow />
      )}
      {temp > 6 ? (
        <FirstMixedIceWater levelOfWater={4} rounded={true} />
      ) : (
        <IceRow />
      )}
      {temp > 5 ? (
        <FirstMixedIceWater levelOfWater={6} rounded={true} />
      ) : (
        <IceRow />
      )}
      {/* do it dynamically */}
      {temp > 4 ? (
        <FirstMixedIceWater levelOfWater={10} rounded={false} />
      ) : (
        <IceRow />
      )}
    </Div>
  );
}

export default Ice;
