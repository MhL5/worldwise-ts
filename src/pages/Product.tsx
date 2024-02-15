import { type FC } from "react";
import PageNav from "../ui/PageNav";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 50dvw;
  margin: auto;
  gap: 4rem;
`;
const TextContainer = styled.div`
  flex: 1 1 50%;
  font-size: 2.5rem;
  & > p {
    font-size: 1.5rem;
  }
`;
const ImgContainer = styled.figure`
  flex: 1 1 50%;

  & > img {
    width: 100%;
    display: block;
  }
`;

const Product: FC = function () {
  return (
    <div>
      <PageNav />

      <Container>
        <ImgContainer>
          <img src="img-1.jpg" alt="" />
        </ImgContainer>

        <TextContainer>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis doloribus libero sunt expedita ratione iusto, magni,
            id sapiente sequi officiis et.
          </p>
        </TextContainer>
      </Container>
    </div>
  );
};

export default Product;
