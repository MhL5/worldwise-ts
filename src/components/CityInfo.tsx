import { type FC } from "react";
import { getCity } from "../services/getCity";
import { Params, useLoaderData } from "react-router-dom";

const CityInfo: FC = function () {
  const loaderData = useLoaderData();
  console.log(loaderData);

  return <h1>testing {loaderData.cityName} </h1>;
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
