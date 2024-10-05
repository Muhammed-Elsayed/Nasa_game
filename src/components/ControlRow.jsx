import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px grey solid;
  margin-bottom: 5px;
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #4caf50; /* Green background */
  color: white; /* White text */
  border: 2px solid #4caf50; /* Border matching background color */
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease; /* Smooth transitions */
  outline: none; /* Remove default outline */
  font-size: x-large;
  &:hover {
    background-color: white; /* Change background on hover */
    color: #4caf50; /* Change text color on hover */
    border: 2px solid #4caf50; /* Keep the green border */
  }

  &:focus {
    outline: 2px solid #ffffff; /* White outline when focused */
    outline-offset: 2px; /* Create space between the button and outline */
  }

  &:active {
    background-color: #45a049; /* Darker green when clicked */
    border-color: #45a049; /* Match border to background */
  }
`;
const P = styled.p`
  font-size: larger;
  color: aliceblue;
  font-weight: 700;
`;

function ControlRow({ state, setState, name, wind = null, factor }) {
  function handleIncrease() {
    setState(10); // Increase wind direction by 10
  }

  function handleDecrease() {
    setState(-10); // Decrease wind direction by 10
  }
  return (
    <Div>
      <div>
        <P>
          {name}:{" "}
          {`${name === "Plastic" ? Math.round(state * 10) / 10 : state}${
            wind ? "°" : ""
          }`}
          {name === "Temperature"
            ? " C°"
            : name === "Rain"
            ? " mm"
            : name === "Humidity"
            ? " %"
            : name === "Factory Emissions"
            ? " µg/m³"
            : name === "Plastic"
            ? " kg"
            : name === "Wind Speed"
            ? " kph"
            : null}
        </P>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {wind ? (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              onClick={wind ? handleIncrease : () => setState(state + factor)}
            >
              {!wind ? "+" : "+"}
            </Button>
            <Button
              onClick={wind ? handleDecrease : () => setState(state - factor)}
            >
              {!wind ? "-" : "-"}
            </Button>
          </div>
        ) : (
          <>
            <Button
              onClick={wind ? handleIncrease : () => setState(state + factor)}
            >
              {!wind ? "+" : "+"}
            </Button>
            <Button
              onClick={wind ? handleDecrease : () => setState(state - factor)}
            >
              {!wind ? "-" : "-"}
            </Button>
          </>
        )}
      </div>
    </Div>
  );
}

export default ControlRow;
