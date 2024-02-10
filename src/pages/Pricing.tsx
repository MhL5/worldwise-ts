import { type FC } from "react";
import PageNav from "../components/PageNav";
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

const Pricing: FC = function () {
  return (
    <div>
      <PageNav />

      <Container>
        <TextContainer>
          <h2>Simple pricing. Just $9/month.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </TextContainer>

        <ImgContainer>
          <img src="img-2.jpg" alt="" />
        </ImgContainer>
      </Container>
    </div>
  );
};

export default Pricing;
