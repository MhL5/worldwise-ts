import { type FC } from "react";
import { useCitiesContext } from "../features/map/context/CitiesContext";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;
const StyledLi = styled.li`
  display: flex;
  background-color: var(--color-dark--2);
  border-radius: 0.7rem;
  min-width: 15rem;
  gap: 2rem;
  margin-block: 0rem;
  padding: 1.5rem;
  height: 5rem;
  position: relative;

  & > :nth-child(1) {
    content: "";
    position: absolute;
    background-color: var(--color-brand--1);
    width: 0.7rem;
    height: 5rem;

    border-top-left-radius: 99rem;
    border-bottom-left-radius: 99rem;

    top: 50%;
    left: 0.3%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
`;

const Countries: FC = function () {
  const { state } = useCitiesContext();

  return (
    <StyledUl>
      {state.cities.map((city) => {
        return (
          <StyledLi key={city.id}>
            <div></div>
            <div>{city.emoji}</div>
            <div>{city.country}</div>
          </StyledLi>
        );
      })}
      {/* Country flag and city name */}
    </StyledUl>
  );
};

export default Countries;
