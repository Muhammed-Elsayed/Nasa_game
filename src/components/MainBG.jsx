import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../../store";

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 500px;
  cursor: pointer;
  opacity: ${(props) => (props.isFadingOut ? 0 : 1)};
  transition: opacity 2s ease;
  border-radius: 15%; /* Apply border-radius to round the corners */
  background-color: #000012;
  /* opacity: 0.6; */
  /* mix-blend-mode: overlay; Blends the image with the video */

  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

function MainBG({ url }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true); // Control video visibility
  const [isFadingOut, setIsFadingOut] = useState(false); // Control fade-out effect

  // Access Zustand store
  const isPlaying = useStore((state) => state.isPlaying);
  const setPlaying = useStore((state) => state.setPlaying);
  const setIsVideoFinished = useStore((state) => state.setIsVideoFinished); // Zustand setter
  const setGameStarted = useStore((state) => state.setGameStarted);
  const timeoutId = useRef(null); // To store the timeout ID

  // Automatically play the video for 3 seconds when the component mounts
  useEffect(() => {
    videoRef.current.play();
    setPlaying(true);

    // Pause the video after 3 seconds
    timeoutId.current = setTimeout(() => {
      videoRef.current.pause();
      setPlaying(false);
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId.current);
  }, [setPlaying]);

  // Handle video click to start fade-out and then hide the video
  const handleVideoClick = () => {
    setGameStarted(true);
    if (isPlaying) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);

      // Start the fade-out effect after clicking
      setTimeout(() => {
        setIsFadingOut(true); // Trigger fade-out

        // Set timeout to hide the video after the fade-out transition completes
        setTimeout(() => {
          setIsVisible(false); // Hide the video after fade-out
          setIsVideoFinished(true); // Notify Zustand store that video has finished
        }, 2000); // Wait for the fade-out duration (2s in this case)
      }, 700); // Start fade-out after 3 seconds of playing
    }
  };

  if (!isVisible) {
    return null; // Return null once video is hidden
  }

  return (
    <div>
      <Video
        ref={videoRef}
        muted
        onClick={isPlaying ? null : handleVideoClick} // Play/pause and fade-out when clicking on the video
        playsInline
        isVisible={isVisible} // Pass isVisible to control display
        isFadingOut={isFadingOut} // Pass isFadingOut to control opacity
      >
        <source src={url} type="video/mp4" />
      </Video>
    </div>
  );
}

export default MainBG;
