import styled from "styled-components";
import "animate.css";
const Image = styled.img`
  top: -40px;
  width: 120px;
  z-index: 4;
  position: absolute;
  height: 110px;
  left: ${(props) => props.left};
`;

function FactoryImage({ left, url }) {
  return (
    <Image
      className="animate__animated animate__fadeInRight"
      left={left}
      src={url}
    />
  );
}

export default FactoryImage;
