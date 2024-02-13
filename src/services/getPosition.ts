import axios from "axios";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export type receivedLocationData = {
  city: string;
  principalSubdivision: string;
  countryCode: string;
  latitude: number;
  longitude: number;
};
type GetPositionData = ({
  lat,
  lng,
}: {
  lat: string;
  lng: string;
}) => Promise<receivedLocationData>;

const getPositionData: GetPositionData = async function ({ lat, lng }) {
  try {
    const response = await axios.get(
      `${BASE_URL}?latitude=${lat}&longitude=${lng}`
    );

    return response.data;
  } catch (err) {
    throw new Error(`Something went wrong ${err} `);
  }
};

export { getPositionData };
