import styled from "styled-components";
import WhitePixel from "./WhitePixel";

const Row = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 23.2px;
  /* background-color: black; */
  margin-top: ${(props) => props.marginTop};
  border-top-right-radius: ${(props) =>
    props.top}; /* Rounds the top-right corner */
  border-top-left-radius: ${(props) =>
    props.top}; /* Rounds the top-right corner */
  border-bottom-right-radius: ${(props) =>
    props.bottom}; /* Rounds the top-right corner */
  border-bottom-left-radius: ${(props) =>
    props.bottom}; /* Rounds the top-right corner */
  overflow: hidden;
`;
let myArray = new Array(10).fill(null);

function IceRow({ marginTop = "", bottom = "", top = "" }) {
  return (
    <Row marginTop={marginTop} top={top} bottom={bottom}>
      {myArray.map((_, index) => (
        <WhitePixel key={index} image="/nasa data/icePixel.gif" />
      ))}
    </Row>
  );
}

export default IceRow;
