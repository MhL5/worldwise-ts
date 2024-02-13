import { type FC } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Cities, { citiesLoader } from "./components/Cities";
import Countries from "./components/Countries";
import MapForm, { formLoader } from "./features/map/components/MapForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />

      <Route path="application" element={<AppLayout />}>
        <Route path="cities" index element={<Cities />} loader={citiesLoader} />
        <Route path="countries" element={<Countries />} />
        <Route path="form" element={<MapForm />} loader={formLoader} />C
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />

      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Route>
  )
);

const App: FC = function () {
  return <RouterProvider router={router} />;
};

export default App;
