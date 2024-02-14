import { type FC } from "react";
import { useCitiesContext } from "../context/CitiesContext";
import City from "./City";

const Cities: FC = function () {
  const { state } = useCitiesContext();

  return (
    <ul>
      {state.cities?.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default Cities;
