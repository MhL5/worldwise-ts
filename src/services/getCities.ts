import axios from "axios";
import { City } from "./postCities";

const getCities = async function () {
  try {
    const response = await axios.get<City[]>("http://localhost:3000/cities");

    return response.data;
  } catch (err) {
    if (err instanceof Error) throw new Error(`Something went wrong! ${err}`);
    throw new Error(`UNKNOWN ERROR😥`);
  }
};

export { getCities };
