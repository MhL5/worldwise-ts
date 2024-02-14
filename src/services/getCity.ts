import axios from "axios";
import { City } from "./postCities";

async function getCity(id: number | string) : Promise<City> {
  try {
    const response = await axios.get(`http://localhost:3000/cities/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(`Something went wrong ${err}`);
  }
}

export { getCity };
