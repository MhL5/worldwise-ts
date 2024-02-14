import { type FC } from "react";
import styled from "styled-components";
import { City } from "../services/postCities";
import { useCitiesContext } from "../context/CitiesContext";
import { NavLink } from "react-router-dom";

const StyledLi = styled.li`
  display: flex;
  background-color: var(--color-dark--2);
  border-radius: 0.7rem;
  width: 45rem;
  gap: 2rem;
  margin-block: 2rem;
  padding: 1.5rem;
  height: 5rem;
  position: relative;

  & > :nth-child(3) {
    margin-left: auto;
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: var(--color-dark--1);
    padding: 1.2rem;
    width: 1rem;
    font-size: 1.2rem;

    border-radius: 999px;

    & > div {
      color: rgba(255, 26, 9, 0.877);
    }
  }

  & > :nth-child(5) {
    content: "";
    position: absolute;
    background-color: var(--color-brand--2);
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

type CityParams = {
  city: City;
};

const City: FC<CityParams> = function ({ city }) {
  const { deleteCity } = useCitiesContext();

  function handleDelete() {
    deleteCity(city.id);
  }

  return (
    <NavLink to={`/application/cities/${city.id}`}>
      <StyledLi key={city.id}>
        <div>{city.emoji}</div>
        <div>{city.cityName}</div>
        <div>{city.date}</div>
        <button onClick={handleDelete}>
          <div>X</div>
        </button>
        <div></div>
      </StyledLi>
    </NavLink>
  );
};

export default City;
