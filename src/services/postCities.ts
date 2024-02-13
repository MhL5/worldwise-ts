import axios from "axios";

export type City = {
  country: string;
  emoji: string;
  cityName: string;
  date: string;
  note: string;
  id: string;
  position: {
    lat: number;
    lng: number;
  };
};
type PostCities = (newCity: City) => void;

const postCities: PostCities = async function (newCity) {
  try {
    await axios.post("http://localhost:3000/cities", newCity);
  } catch (err) {
    if (err instanceof Error) throw new Error(`ERROR: ${err}`);
    throw new Error(`Unknown Error`);
  }
};

export { postCities };
