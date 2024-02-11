import { type FC } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import styled from "styled-components";
import axios from "axios";

const StyledReactRouterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark--2);
  padding: 3rem;
  width: 40rem;
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
`;
const StyledBackButton = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--color-light--2);
  color: var(--color-light--2);
`;

const MapForm: FC = function () {
  const navigate = useNavigate();

  return (
    <StyledReactRouterForm method="post" action="/application/form">
      <label htmlFor="cityNameInput">City name</label>
      <input type="text" name="cityName" id="cityNameInput" />

      <label htmlFor="dateInput">When did you go to X</label>
      <input type="date" name="dateInput" id="dateInput" />

      <label htmlFor="noteInput">Notes about your trip to X</label>
      <textarea name="noteInput" id="noteInput" cols={20} rows={50}></textarea>

      <div>
        <Button el="button"> Add </Button>
        <StyledBackButton el="button" onClick={() => navigate(-1)}>
          ⬅️ Back
        </StyledBackButton>
      </div>
    </StyledReactRouterForm>
  );
};

/*
"cities": [
    {
      "cityName": "Madrid",
      "country": "Spain",
      "emoji": "🇪🇸",
      "date": "2027-07-15T08:22:53.976Z",
      "notes": "",
      "position": {
        "lat": 40.46635901755316,
        "lng": -3.7133789062500004
      },
      "id": 17806751
    }
  ]
*/

async function formAction() {
  console.log(`action`);
  await axios.post("http://localhost:3000/cities", { test: "test" });

  return redirect("/application");
}

export default MapForm;
export { formAction };
