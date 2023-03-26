import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "~/components/UIComponents";
import { fetchCountriesDataStart, fetchStatsStart } from "~/store/api/redux/covid-data";
import { useAppDispatch } from "~/utils/hooks";
import NotFound from "./views/404";

const WorldMap = React.lazy(() => import("./views/home-page"));
const CountryDetailPage = React.lazy(() => import("./views/country"));

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountriesDataStart());
    dispatch(fetchStatsStart());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<LoadingSpinner />}><WorldMap /></React.Suspense>}></Route>
      <Route path="/country/:id" element={<React.Suspense fallback={<LoadingSpinner />}><CountryDetailPage /></React.Suspense>}></Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
