import styled from "styled-components";

const Image = styled.img`
  width: 30px;
  height: 23.2px;
`;
const Span = styled.span`
  font-size: rem;
  /* width: 30px;
  
  height: 23.2px; */
  z-index: 2;
`;
function GreenPixel({ image = null, tree }) {
  if (!image) return <Span>{tree}</Span>;
  return <Image src={image} />;
}

export default GreenPixel;
