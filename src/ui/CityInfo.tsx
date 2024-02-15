import { type FC } from "react";
import { getCity } from "../services/getCity";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import { City } from "../services/postCities";

import Button from "./Button";
import styled from "styled-components";

const StyledBackButton = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--color-light--2);
  color: var(--color-light--2);
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark--2);
  padding: 3rem;
  width: 40rem;
  border-radius: 0.7rem;

  p {
    font-size: 1.2rem;
    color: var(--color-light--1);
  }
  div {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  a {
    color: var(--color-brand--1);
    text-decoration: underline;
  }
`;

const CityInfo: FC = function () {
  const { cityName, date, note } = useLoaderData() as City;
  const navigate = useNavigate();

  return (
    <StyledSection>
      <p>CITY NAME:</p>
      <div>{cityName}</div>
      <p>YOU WENT TO ALIAGA ON</p>
      <div>{date}</div>
      <p>YOUR NOTES</p>
      <div>{note}</div>
      <p>Learn more:</p>
      <div>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`} target="_blank">
          checkout {cityName} on Wikipedia ➡️
        </a>
      </div>
      <StyledBackButton el="button" onClick={() => navigate(-1)}>
        ⬅️ back
      </StyledBackButton>
    </StyledSection>
  );
};

async function cityInfoLoader({ params }: { params: Params }) {
  let city;
  city = "not Found";
  if (params.cityId) city = await getCity(params.cityId);

  return city;
}

// eslint-disable-next-line react-refresh/only-export-components
export { cityInfoLoader };
export default CityInfo;
