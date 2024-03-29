import { type FC } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CityInfo, { cityInfoLoader } from "./ui/CityInfo";
import AppLayout, { appLoader } from "./pages/AppLayout";
import MapForm, { formLoader } from "./features/map/components/MapForm";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Cities from "./ui/Cities";
import Countries from "./ui/Countries";
import CitiesProvider from "./context/CitiesContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />

      <Route
        path="application"
        element={<AppLayout />}
        loader={appLoader}
        errorElement={<ErrorPage />}
      >
        <Route index={true} element={<Cities />} />
        <Route index={true} path="cities" element={<Cities />} />
        <Route
          path="cities/:cityId"
          element={<CityInfo />}
          loader={cityInfoLoader}
        />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<MapForm />} loader={formLoader} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Route>
  )
);

const App: FC = function () {
  return (
    <CitiesProvider>
      <RouterProvider router={router} />
    </CitiesProvider>
  );
};

export default App;
