import { type FC } from "react";
import { useLoaderData } from "react-router-dom";
import { getCities } from "../services/getCities";
import { City } from "../services/postCities";

const Cities: FC = function () {
  const data = useLoaderData() as City[];

  return (
    <h1>
      {data?.map((d) => (
        <div key={d.id}>{d.cityName}</div>
      ))}
      {/* A component with Country name / city name / date and a delete button  */}
    </h1>
  );
};

async function citiesLoader() {
  try {
    const citiesData = await getCities();
    return citiesData;
  } catch (err) {
    if (err instanceof Error)
      throw new Error(`Something went wrong ${err.message}`);

    throw new Error("Unknown error while trying to fetch data!😥");
  }
}

export default Cities;
// eslint-disable-next-line react-refresh/only-export-components
export { citiesLoader };
