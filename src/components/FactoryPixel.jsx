import styled from "styled-components";

const Image = styled.img`
  width: 28px;
  height: 13px;
  /* margin: 1px; */
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  /* border: 2px brown solid; */
`;

function FactoryPixel({ url }) {
  return <Image src={url} />;
}

export default FactoryPixel;
