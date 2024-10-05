import { useEffect, useRef } from "react";
import styled from "styled-components";
const Video = styled.video`
  position: absolute;
  top: 20px;
  left: 0px;
  width: 800px;
  height: 500px;
  border: 0;
  border-radius: 11%; /* Apply border-radius to round the corners */
  overflow: hidden;
  background-color: #000012;
  z-index: -1;
`;
// const Div = styled.div`
//   position: absolute;
//   width: 800px;
//   height: 500px;
// `;
function MapEarth({ url, playbackSpeed = 1 }) {
  const videoRef = useRef(null);
  // Set the playback rate when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed; // Slow down the video to half-speed
    }
  }, [playbackSpeed]);

  return (
    <Video
      className={`animate__animated animate__fadeIn`}
      ref={videoRef}
      autoPlay
      muted
      playsInline
    >
      <source src={url} type="video/mp4" />
    </Video>
  );
}

export default MapEarth;
