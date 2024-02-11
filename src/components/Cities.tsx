import axios from "axios";
import { type FC } from "react";
import { useLoaderData } from "react-router-dom";

const Cities: FC = function () {
  const data = useLoaderData() as CitiesData;

  return (
    <h1>
      {data[0].cityName}
      {/* A component with Country name / city name / date and a delete button  */}
    </h1>
  );
};

type CitiesData = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: { lat: number; lng: number };
  id: string;
}[];

async function citiesLoader() {
  const data = await axios.get<CitiesData>("http://localhost:3000/cities");

  return data.data;
}

export default Cities;
// eslint-disable-next-line react-refresh/only-export-components
export { citiesLoader };
