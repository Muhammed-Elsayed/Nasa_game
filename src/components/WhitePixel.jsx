import styled from "styled-components";

const Image = styled.img`
  width: 28px;
  height: 23px;
  margin: 1px;
`;
function WhitePixel({ image }) {
  return <Image src={image} />;
}

export default WhitePixel;
