import { useState } from "react";
import styled, { keyframes } from "styled-components";
import useStore from "../../store";

// Keyframes for the floating animation
const float = keyframes`
  0% {
    transform: translateY(0); /* Starting point */
  }
  50% {
    transform: translateY(-20px); /* Move 20px up */
  }
  100% {
    transform: translateY(0); /* Return to starting point */
  }
`;

// Styled components
const Image = styled.img`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  position: absolute;
  animation: ${float} 3s ease-in-out infinite; /* 3s duration for smooth floating */
`;

const P = styled.p`
  color: white;
  font-family: "Edu AU VIC WA NT Dots", cursive;
  display: block;
  text-align: center;
  font-size: 1.4rem;
  margin-left: 300px; /* Centers the text inside the div */
  width: 100%; /* Ensures the P element takes full width */
  opacity: ${({ loading }) =>
    loading ? 0.6 : 1}; /* Dim the text when loading */
`;

const Button = styled.button`
  width: 100px;
  height: 70px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #4caf50; /* Green background */
  color: white; /* White text */
  border: 2px solid #4caf50; /* Border matching background color */
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease; /* Smooth transitions */
  outline: none; /* Remove default outline */
  font-size: large;
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

function AiResult() {
  const [generate, setGenerate] = useState(false);
  const [aiResponse, setAiResponse] = useState(""); // To store AI's response
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Let's start"); // Status text for <h1>

  // Fetch data from the store
  const temp = useStore((state) => state.temp);
  const humidity = useStore((state) => state.humidity);
  const precip = useStore((state) => state.rain);
  const windspeed = useStore((state) => state.windSpeed);
  const winddir = useStore((state) => state.windDirection);

  // Create data object from store
  const dataFromStore = {
    temp,
    humidity,
    precip,
    windspeed,
    winddir,
  };

  // console.log(dataFromStore);
  // Send data to the AI model (POST request)
  const sendDataToAi = async () => {
    setLoading(true);
    setStatus("Data is sending..."); // Update status when sending data

    try {
      const response = await fetch(
        "https://ahmed1122.pythonanywhere.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataFromStore), // Send your data here
        }
      );

      if (response.ok) {
        // Successfully sent data
        setStatus("Ready to get Data"); // Update status after sending data
      } else {
        console.error("Error in POST request");
        setStatus("Error sending data");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Network error");
    } finally {
      setLoading(false);
    }
  };

  // Get data from the AI model (GET request)
  const getDataFromAi = async () => {
    setLoading(true);
    setStatus("Getting data..."); // Update status when fetching data

    try {
      const response = await fetch(
        "https://ahmed1122.pythonanywhere.com/predict "
      );
      if (response.ok) {
        const data = await response.json();
        setAiResponse(data.message); // Assuming the response contains 'message'
        setStatus("Result:"); // Change to "Result:" after data is fetched
      } else {
        console.error("Error in GET request");
        setStatus("Error fetching data");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Image src={"../../public/nasa data/ai.png"} alt="Reaction GIF" />
      <h2 style={{ textAlign: "center", color: "white" }}>{status}</h2>
      <div
        style={{
          width: "75%",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {generate && (
          <P loading={loading}>
            {loading ? "AI is predicting..." : aiResponse}
          </P>
        )}

        {aiResponse && <P>{aiResponse}</P>}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!generate && (
          <Button
            onClick={() => {
              setGenerate(true);
              sendDataToAi();
            }}
            disabled={loading}
          >
            {loading ? "is Sending..." : "Send Data"}
          </Button>
        )}
        {generate && (
          <Button
            onClick={() => {
              setGenerate(false);
              getDataFromAi();
            }}
            disabled={loading}
            style={{ marginLeft: "10px" }}
          >
            {loading ? "loading..." : "Get Data"}
          </Button>
        )}
      </div>
    </>
  );
}

export default AiResult;
