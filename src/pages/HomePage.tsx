import { type FC } from "react";
import styled from "styled-components";

import PageNav from "../ui/PageNav";
import Button from "../ui/Button";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url(../bg.jpg);
  background-size: cover;
  background-position: center;
`;
const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  flex: 1 1 80%;

  font-size: 3rem;
  text-align: center;

  & > p {
    margin: 2rem;
    width: 120ch;
    font-size: 2rem;
  }
`;

const HomePage: FC = function () {
  return (
    <MainContainer>
      <PageNav />

      <ParagraphWrapper>
        <h1>You travel the world.</h1>
        <h2>WorldWise keeps track of your adventures.</h2>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>

        <Button el="link" to="/application">
          START TRACKING
        </Button>
      </ParagraphWrapper>
    </MainContainer>
  );
};

export default HomePage;
