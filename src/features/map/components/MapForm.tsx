import { useState, type FC, useEffect, FormEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import {
  getPositionData,
  receivedLocationData,
} from "../../../services/getPosition";
import { postCities } from "../../../services/postCities";

import Button from "../../../components/Button";
import ReactDatePicker from "react-datepicker";
import { useCitiesContext } from "../../../context/CitiesContext";

type FormDataObj = {
  hiddenData: string;
  cityName: string;
  date: string;
  note: string;
};
type HiddenData = {
  country: string;
  emoji: string;
  position: { lat: number; lng: number };
};

const StyledReactRouterForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark--2);
  padding: 3rem;
  width: 40rem;
  border-radius: 0.8rem;

  & > label {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  & > input {
    color: var(--color-dark--2);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;

    &:focus-visible {
      background-color: var(--color-light--1);
    }
  }

  & > textarea {
    color: var(--color-dark--2);
    height: 15rem;
    border-radius: 0.5rem;

    &:focus-visible {
      background-color: var(--color-light--1);
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;

    & > button {
      &:focus-visible {
        outline: 2px solid var(--color-light--2);
        opacity: 0.6;
      }
    }
  }

  & > div.react-datepicker-wrapper {
    display: flex;
    margin-top: 0rem;
    padding-block: 0.5rem;

    & > div > input {
      border: none;
      padding: 0.5rem 1rem;
      width: 100%;
      border-radius: 0.5rem;
      color: var(--color-dark--2);

      &:focus-visible {
        outline: 2px solid var(--color-light--2);
        opacity: 0.6;
      }
    }
  }
`;
const StyledBackButton = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--color-light--2);
  color: var(--color-light--2);
`;

const MapForm: FC = function () {
  const { state, dispatch } = useCitiesContext();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | null>(new Date());
  const [city, setCity] = useState("");

  let defaultDate;
  if (date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so we add 1
    const year = date.getFullYear();
    defaultDate = `${month}/${day}/${year}`;
  }

  const data = useLoaderData() as receivedLocationData;
  const hiddenData = JSON.stringify({
    country: data.principalSubdivision,
    emoji: data.countryCode,
    position: { lat: data.latitude, lng: data.longitude },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    async function postData() {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData) as FormDataObj;

      // 1) parsing hiddenData and storing it into a new variable
      const hiddenDataObj: HiddenData = JSON.parse(data.hiddenData);
      // 2) removing hiddenData using destructuring
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hiddenData, ...finalData } = data;
      // 3) creating a new City object
      const newCity = {
        ...finalData,
        ...hiddenDataObj,
        id: `${Math.random() * 9999}`,
      };
      // 4) post it
      postCities(newCity);
      // 5) STATE
      dispatch({ type: "updateCities", payload: [...state.cities, newCity] });
    }

    postData();
    navigate("/application/cities");
  }

  useEffect(() => {
    setCity(data.city);
  }, [data]);

  return (
    <StyledReactRouterForm onSubmit={handleSubmit}>
      <label htmlFor="cityNameInput">City name</label>
      <input
        type="text"
        name="cityName"
        id="cityNameInput"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <label htmlFor="dateInput">When did you go to {data.city}</label>
      <ReactDatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        name="date"
        id="dateInput"
        value={defaultDate ? defaultDate : ""}
      />

      <label htmlFor="note">Notes about your trip to {data.city}</label>
      <textarea name="note" id="note" cols={20} rows={50}></textarea>

      <input type="hidden" name="hiddenData" value={hiddenData} />

      <div>
        <Button el="button"> Add </Button>
        <StyledBackButton el="button" onClick={() => navigate(-1)}>
          ⬅️ Back
        </StyledBackButton>
      </div>
    </StyledReactRouterForm>
  );
};

async function formLoader({ request }: { request: Request }) {
  try {
    const url = new URL(request.url);
    const lat = url.searchParams.get("lat") as string;
    const lng = url.searchParams.get("lng") as string;

    const locationData = await getPositionData({ lat: lat, lng: lng });
    return locationData;
  } catch (err) {
    if (err instanceof Error)
      throw new Error(`Something went wrong ${err.message}`);

    throw new Error(`Unknown Error! 😥`);
  }
}

export default MapForm;
// eslint-disable-next-line react-refresh/only-export-components
export { formLoader };
